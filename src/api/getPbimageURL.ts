import { Item } from "../@types/type";

export function getPbimageURL(item: Item, fileName = "photo") {
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}
