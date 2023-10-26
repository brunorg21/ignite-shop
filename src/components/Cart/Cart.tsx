import { CartContext } from "@/context/CartContext";
import { Handbag } from "@phosphor-icons/react";
import { useContext } from "react";

interface CartProps {
  handleOpenMenu: any;
}

export function Cart({ handleOpenMenu }: CartProps) {
  const { productsOnCart } = useContext(CartContext);

  return (
    <button onClick={() => handleOpenMenu(true)}>
      {productsOnCart.length > 0 && <div>{productsOnCart.length}</div>}
      <Handbag size={24} />
    </button>
  );
}
