import FeaturedProduct from "@/Components/ui/FeaturedProduct";
import Hero from "@/Components/ui/Hero";
import React from "react";

const HomePage = ({ products }) => {
  return (
    <div>
      <Hero />
      <FeaturedProduct products={products} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
