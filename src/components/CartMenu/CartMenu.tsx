import {
  ButtonContainer,
  CartMenuContainer,
  CartMenuHeader,
  DetailsContainer,
  FooterContainer,
  FooterDetails,
  ImageContainer,
  ProductsContainer,
} from "@/styles/components/cartMenu";
import { X } from "@phosphor-icons/react";
import image from "../../assets/1.png";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useSummary } from "@/hooks/useSummary";
import axios from "axios";

interface CartMenuProps {
  handleOpenMenu: any;
}

export function CartMenu({ handleOpenMenu }: CartMenuProps) {
  const { productsOnCart, setProductsOnCart } = useContext(CartContext);

  const { summary } = useSummary(productsOnCart);

  const productsId = productsOnCart.map((product) => {
    return {
      priceId: product.defaultPriceId,
    };
  });

  async function handleBuyProducts() {
    try {
      const response = await axios.post("/api/checkout", {
        products: productsId,
      });

      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartMenuContainer>
      <div>
        <CartMenuHeader>
          <button onClick={() => handleOpenMenu(false)}>
            <X size={20} />
          </button>
        </CartMenuHeader>
        <h2>Sacola de compras</h2>
        <ProductsContainer>
          {productsOnCart.map((product) => {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ImageContainer>
                  <Image src={product.imageUrl} alt="" width={80} height={90} />
                </ImageContainer>
                <DetailsContainer>
                  <p>{product.name}</p>
                  <strong>{product.price}</strong>
                  <button
                    onClick={() => {
                      setProductsOnCart((state) => {
                        return state.filter((item) => item.id !== product.id);
                      });
                    }}
                  >
                    Remover
                  </button>
                </DetailsContainer>
              </div>
            );
          })}
        </ProductsContainer>
        <FooterContainer>
          <FooterDetails>
            Quantidade <span>{productsOnCart.length} itens</span>
          </FooterDetails>
          <FooterDetails>
            Valor total{" "}
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(summary.total)}
            </strong>
          </FooterDetails>
        </FooterContainer>

        <div>
          <ButtonContainer>
            <button onClick={handleBuyProducts}>Finalizar compra</button>
          </ButtonContainer>
        </div>
      </div>
    </CartMenuContainer>
  );
}
