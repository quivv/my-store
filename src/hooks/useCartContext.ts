import { ProductType } from "../Type";
import { useAppSelector } from "./reduxHooks";

export interface CartContext {
  cardList: ProductType[];
  cartFirst: ProductType;
}

export function useCartContext(): CartContext {
  const cart = useAppSelector((state) => state.handleCart);
  return {
    cardList: cart,
    cartFirst: cart?.[0],
  };
}