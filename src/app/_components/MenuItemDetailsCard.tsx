import React from "react";
import { MenuItemType } from "../_types/menuApiResponse";
import { urlForImage } from "../_lib/sanity";

interface MenuItemDetailsCardProps {
  data: MenuItemType;
}

const MenuItemDetailsCard = (props: MenuItemDetailsCardProps) => {
  return (
    <div className="bg-gray-100 w-full lg:flex">
      {/* Left Side: Image */}
      <div
        className="w-full lg:w-1/2 max-h-[372px] md:order-1 overflow-hidden lg:max-h-[388px]"
        style={{ backgroundColor: "rgb(242, 239, 234)" }}
      >
        <img
          className="w-full h-auto md:h-full object-cover object-center"
          src={urlForImage(props.data.mainImage.asset._ref).url()}
          alt={props.data.title}
        />
      </div>

      {/* Right Side: Product Details */}
      <div
        className="p-10 md:order-2 lg:w-1/2"
        style={{ backgroundColor: "rgb(242, 239, 234)" }}
      >
        <h1 className="text-2xl font-bold mb-2">{props.data.title}</h1>
        <p className="text-gray-600 mb-6">{`Starting price $${props.data.price}`}</p>
        <p className="text-gray-800">{props.data?.body[0].children[0].text}</p>
      </div>
    </div>
  );
};

export default MenuItemDetailsCard;
