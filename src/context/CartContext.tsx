import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface ProductsOnCart {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextProps {
  productsOnCart: ProductsOnCart[];
  setProductsOnCart: Dispatch<SetStateAction<ProductsOnCart[]>>;
}

export const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [productsOnCart, setProductsOnCart] = useState([] as ProductsOnCart[]);

  return (
    <CartContext.Provider value={{ productsOnCart, setProductsOnCart }}>
      {children}
    </CartContext.Provider>
  );
};
