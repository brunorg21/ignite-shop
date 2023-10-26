import { stripe } from "@/lib/stripe";
import { ImageContainer } from "@/styles/pages/success";
import { SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;

  product: any[];
}

export default function Success({ customerName, product }: SuccessProps) {
  console.log(product);

  return (
    <>
      <Head>
        <title>Compra efetuafa - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <div>
          {product.map((item: any) => {
            return (
              <ImageContainer key={item.id}>
                <Image
                  src={item.price.product.images[0]}
                  width={120}
                  height={110}
                  alt=""
                />
              </ImageContainer>
            );
          })}
        </div>
        <p>
          Uhuu <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{product.length} produto(s)</strong> já está a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  return {
    props: {
      customerName,
      product: session.line_items?.data,
    },
  };
};
