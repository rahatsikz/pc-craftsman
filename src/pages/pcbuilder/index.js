import Link from "next/link";
import React from "react";

const PCBuilder = () => {
  const categories = [
    {
      id: 1,
      name: "CPU",
    },
    {
      id: 2,
      name: "Motherboard",
    },
    {
      id: 3,
      name: "Ram",
    },
    {
      id: 4,
      name: "Power Supply Unit",
    },
    {
      id: 5,
      name: "Storage Device",
    },
    {
      id: 6,
      name: "Monitor",
    },
    {
      id: 7,
      name: "Others",
    },
  ];

  // console.log(products);
  return (
    <div className="my-12 container mx-auto">
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        PC Builder
      </p>
      <div className="grid xl:grid-cols-1 lg:grid-cols-1 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden bg-white border rounded-lg hover:shadow-xl text-slate-500 shadow-slate-200"
          >
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-xl font-bold">{category.name}</h3>
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
