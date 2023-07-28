import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PCBuilder = () => {
  const { product } = useSelector((state) => state.product);

  const categories = [
    {
      id: 1,
      name: "CPU",
      selected: product.cpu,
    },
    {
      id: 2,
      name: "Motherboard",
      selected: product.motherboard,
    },
    {
      id: 3,
      name: "Ram",
      selected: product.ram,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      selected: product.psu,
    },
    {
      id: 5,
      name: "Storage Device",
      selected: product.storage,
    },
    {
      id: 6,
      name: "Monitor",
      selected: product.monitor,
    },
    {
      id: 7,
      name: "Others",
      selected: product.others,
    },
  ];

  // console.log(products);
  return (
    <div className="my-12 container mx-auto">
      <Head>
        <title>PC Builder</title>
      </Head>
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        PC Builder
      </p>
      <div className="grid xl:grid-cols-1 lg:grid-cols-1 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden bg-white border rounded-lg  text-slate-500 shadow-slate-200"
          >
            <div className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-2"> {category.selected?.productName} </p>
              </div>
              <Link href={`/pcbuilder/${category.name}`}>
                <button className="btn">Choose</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCBuilder;
