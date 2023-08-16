export interface MenuApiResponse {
  _id: string;
  title: string;
  showOrder: number;
  menuItems: MenuItemType[];
  isSides: boolean;
}

export interface MenuItemType {
  _rev: string;
  body: Body[];
  mainImage: MainImage;
  _createdAt: Date;
  categories: Category[];
  featured?: boolean;
  _type: string;
  title: string;
  price: number;
  _id: string;
  showFirst?: boolean;
  _updatedAt: Date;
  slug: Slug;
  publishedAt?: Date;
}

export interface Body {
  style: string;
  _key: string;
  markDefs: any[];
  children: Child[];
  _type: string;
}

export interface Child {
  marks: any[];
  text: string;
  _key: string;
  _type: string;
}

export interface Category {
  _ref: string;
  _type: string;
  _key: string;
}

export interface MainImage {
  _type: string;
  asset: Asset;
  hotspot?: Hotspot;
  crop?: Crop;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Crop {
  left: number;
  bottom: number;
  _type: string;
  right: number;
  top: number;
}

export interface Hotspot {
  y: number;
  height: number;
  _type: string;
  width: number;
  x: number;
}

export interface Slug {
  current: string;
  _type: string;
}
