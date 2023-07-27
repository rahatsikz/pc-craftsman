import FeaturedProduct from "@/Components/ui/FeaturedProduct";
import Hero from "@/Components/ui/Hero";
import Head from "next/head";
import React from "react";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>PC Craftsman</title>
        <meta
          name="PC Craftsman"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedProduct products={products} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/featured");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
