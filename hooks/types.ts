import { StaticImageData } from "next/image";

export interface categoryType {
  id: number;
  name: string;
  picture: StaticImageData;
  href: string;
}
export interface productType {
  id: string;
  imgUrl: string;
  description: string;
  name: string;
  category: string;
}
export type product = {
  id: string;
  imgUrl: string;
  description: string;
  name: string;
  category: string;
};
