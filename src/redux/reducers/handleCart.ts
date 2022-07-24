import { ProductType } from "../../Type";

type Props = {
  type: string;
  payload: ProductType;
}

const cartItem: ProductType[] = []

const handleCart = (state: ProductType[] = cartItem, action: Props) => {
  const product: ProductType = action.payload

  switch (action.type){
    case "addItem":
      return [...state, {...product}];
    case "delItem":
      return state.filter(x => x.id !== product.id);
    default:
      return state;
  }
}

export default handleCart;