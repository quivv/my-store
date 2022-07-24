import { ProductType } from "../../Type";

export const addItem = (product: ProductType) => {
  return{
    type: "addItem",
    payload: product
  }
}

export const delItem = (product: ProductType) => {
  return{
    type: "delItem",
    payload: product
  }
}