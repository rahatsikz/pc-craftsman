import Link from "next/link";

const FeaturedCategory = () => {
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

  return (
    <div className="my-12 container mx-auto">
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        Featured categories
      </p>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-12">
        {categories.map((category) => (
          <Link href={`/category/${category.name}`} key={category.id}>
            <div className="overflow-hidden bg-white border rounded-lg hover:shadow-xl text-slate-500 shadow-slate-200">
              <div className="p-6">
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
