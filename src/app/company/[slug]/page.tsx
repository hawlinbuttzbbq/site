import { client, urlForImage } from "@/app/_lib/sanity";
import { CompanyPagesType } from "@/app/_types/pagesType";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import doc from "../doc.json";
import { PortableTextBlock } from "sanity";

interface CompanyPagesProps {
  params: { slug: string };
}

// // Set Page meta data
// export async function generateMetadata({ params }: MenuItemPageProps) {
//   const metaData = await getMenuItem(params.slug);

//   return {
//     title: metaData.title,
//   };
// }

// // Used because we are export project as static page fetch data here
// export async function generateStaticParams() {
//   const query = `*[_type == "menuItem"]`;

//   const data: MenuItemType[] = await client.fetch(query);

//   const slugs = data.map((page) => ({
//     slug: page.slug.current,
//   }));

//   return slugs;
// }

async function getData(slug: string) {
  const query = `*[_type == "page" && slug.current == "${slug}"][0]`;

  const data: CompanyPagesType = await client.fetch(query);
  console.log(JSON.stringify(data, null, 4));
  return data;
}

// PortableText Image Component
const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlForImage(value).fit("min").auto("format").url()}
      alt={value.alt || " "}
      width={width}
      height={height}
      sizes="50vw"
      className="p-10"
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
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl mb-5">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    span: ({ children }) => <span className="mb-5">{children}</span>,
    p: ({ children }) => <p className="mb-5">{children}</p>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="list-disc ml-8 mb-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-8 mb-5">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
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
      <div className="reset-all-styles">
        <PortableText
          value={doc.content}
          // components={components}
        />
      </div>
    </main>
  );
}
