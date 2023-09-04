import { client, urlForImage } from "@/app/_lib/sanity";
import { CompanyPagesType } from "@/app/_types/pagesType";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

interface CompanyPagesProps {
  params: { slug: string };
}

// Set Page meta data
export async function generateMetadata({ params }: CompanyPagesProps) {
  const metaData = await getData(params.slug);

  return {
    title: metaData?.title,
  };
}

// Used because we are export project as static page fetch data here
export async function generateStaticParams() {
  const query = `*[_type == "page"]`;

  const data: CompanyPagesType[] = await client.fetch(query);

  const slugs = data.map((page) => ({
    slug: page.slug.current,
  }));

  return slugs;
}

// Gets all our data
async function getData(slug: string) {
  const query = `*[_type == "page" && slug.current == "${slug}"][0]`;

  const data: CompanyPagesType = await client.fetch(query);
  return data;
}

// PortableText Image Component
const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      className="min-w-[400px] md:min-w-[600px]"
      src={urlForImage(value).fit("min").auto("format").url()}
      alt={value.alt || " "}
      width={width}
      height={height}
    />
  );
};

// PortableText Internal Link Component
const InternalLink = ({ children, value }: any) => (
  <Link href={`/${value.slug.current}`} prefetch={false}>
    <span>{children}</span>
  </Link>
);

// `components` object you'll pass to PortableText
const components: any = {
  types: {
    image: ImageComponent,
  },

  block: {
    p: ({ children }: any) => <p className="mb-5">{children}</p>,
  },

  marks: {
    internalLink: InternalLink,
  },
};

export default async function Company({ params }: CompanyPagesProps) {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
      </div>
      {/* Add to the className mx-auto to push everything to center */}
      <div className="rs-margin rs-padding rs-list rs-text">
        <PortableText value={data?.content} components={components} />
      </div>
    </main>
  );
}
