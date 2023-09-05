import MenuItemCard from "./_components/MenuItemCard";
import SectionDivider from "./_components/MenuSectionTitle";
import MenuTabNavbar from "./_components/MenuTabNavbar";
import { client, urlForImage } from "./_lib/sanity";
import { MenuApiResponse } from "./_types/menuApiResponse";

async function getMenu() {
  const query = `*[_type == "category"]{
    _id,
    title,
    showOrder,
    "menuItems": *[_type == "menuItem" && references(^._id)]
  }`;

  const data: MenuApiResponse[] = await client.fetch(query);

  // Return data that is sorted by showOrder
  return data.slice().sort((a, b) => a.showOrder - b.showOrder);
}

export default async function HomePage() {
  const menuByCategories = await getMenu();

  return (
    <div>
      {/* For sticky MenuTabNavbar to work the position top mus match the AppHeader height */}
      <div className="sticky z-40 top-[120px] md:top-[160px] lg:top-[180px]">
        <MenuTabNavbar data={menuByCategories} />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between z-10">
        {menuByCategories.map((category) => (
          <>
            <SectionDivider divId={category.title} title={category.title} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2">
              {/* Filter and merge items */}
              {[
                ...category.menuItems.filter(
                  (item) => item.featured && item.showFirst
                ),
                ...category.menuItems.filter(
                  (item) => !item.featured || !item.showFirst
                ),
              ].map((item) => (
                <MenuItemCard
                  key={item._id}
                  title={item.title}
                  slug={item.slug.current}
                  image={urlForImage(item.mainImage.asset._ref).url()}
                  price={item.price}
                  isFeatured={item.featured}
                />
              ))}
            </div>
          </>
        ))}
      </main>
    </div>
  );
}
