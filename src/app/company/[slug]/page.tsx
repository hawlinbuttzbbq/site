import { client, urlForImage } from "@/app/_lib/sanity";
import { CompanyPagesType } from "@/app/_types/pagesType";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

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

interface CompanyPagesProps {
  params: { slug: string };
}

const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlForImage(value).fit("min").auto("format").url()}
      alt={value.alt || " "}
      width={width}
      height={height}
      sizes="50vw"
    />
  );
};

const InternalLink = ({ children, value }: any) => (
  <Link href={`/${value.slug.current}`} prefetch={false}>
    <a>{children}</a>
  </Link>
);

const myPortableTextComponents = {
  types: {
    image: ImageComponent,
    list: ImageComponent,
  },
  marks: {
    internalLink: InternalLink,
  },
};

export default async function Company({ params }: CompanyPagesProps) {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="p-5">
        {/* <BreadcrumbsNav breadCrumb={data.title} /> */}

        <PortableText
          value={data.content}
          components={myPortableTextComponents}
        />
      </div>
    </main>
  );
}
