import { StaticImageData } from "next/image";

export interface categoryType {
  id: number;
  name: string;
  picture: StaticImageData;
}
export interface productType {
  id: string;
  imgUrl: string;
  description: string;
  name: string;
}
