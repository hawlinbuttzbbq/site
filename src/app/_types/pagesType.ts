export interface CompanyPagesType {
  _type: string;
  _id: string;
  title: string;
  order: number;
  _updatedAt: Date;
  content: Content[];
  slug: Slug;
  _createdAt: Date;
  _rev: string;
}

export interface Content {
  style?: string;
  _key: string;
  markDefs?: any[];
  children?: Child[];
  _type: Type;
  level?: number;
  listItem?: string;
  asset?: Asset;
}

export enum Type {
  Block = "block",
  Image = "image",
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Child {
  marks: any[];
  text: string;
  _key: string;
  _type: string;
}

export interface Slug {
  current: string;
  _type: string;
}
