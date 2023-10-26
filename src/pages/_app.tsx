import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { Divide, Handbag } from "@phosphor-icons/react";

import { CartContextProvider } from "@/context/CartContext";
import { Cart } from "@/components/Cart/Cart";
import { useState } from "react";
import { CartMenu } from "@/components/CartMenu/CartMenu";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <Cart handleOpenMenu={setCartOpen} />
        </Header>
        <Component {...pageProps} />
        {isCartOpen && <CartMenu handleOpenMenu={setCartOpen} />}
      </Container>
    </CartContextProvider>
  );
}
