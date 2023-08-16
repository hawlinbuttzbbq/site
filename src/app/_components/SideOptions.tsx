import { urlForImage } from "../_lib/sanity";
import { MenuItemType } from "../_types/menuApiResponse";

interface SideOptionsProps {
  data: MenuItemType[];
}

const SideOptions = (props: SideOptionsProps) => {
  return (
    <div className="bg-gray-100">
      <div className="text-white bg-red-900 p-2 rounded-t-lg">
        <h1 className="text-left pl-4">Side Options</h1>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {props.data.map((side) => (
          <li
            key={side._id}
            className="flex items-center bg-white rounded-b-lg"
          >
            <div className="w-16 h-16 bg-white rounded-l-lg overflow-hidden">
              <img
                src={urlForImage(side.mainImage.asset._ref).url()}
                alt={side.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-800 ml-2">{side.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideOptions;
