/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaSlack, FaMoneyBillAlt, FaStore, FaStar } from "react-icons/fa";

const CategoryHome = ({ products }) => {
  return (
    <div className="my-6 container mx-auto">
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        Products
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {products?.data.map((pr) => (
          <Link key={pr._id} href={`/products/${pr.id}`}>
            <div className="card lg:card-side bg-base-100 hover:shadow-xl border px-5 lg:py-8 py-12">
              <figure>
                <img src={pr.image} alt="Album" className="w-52" />
              </figure>
              <div className="px-5">
                <h2 className="card-title"> {pr.productName}</h2>
                <span className="flex items-center gap-4 mt-4">
                  <FaSlack /> {pr.category}
                </span>
                <span className="flex items-center gap-4">
                  <FaMoneyBillAlt /> {pr.price}
                </span>
                <span className="flex items-center gap-4">
                  <FaStore /> {pr.status}
                </span>
                <span className="flex items-center gap-4">
                  <FaStar /> {pr.averageRating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  const data = await res.json();

  const paths = data.data.map((pr) => ({
    params: { name: pr.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { name } = params;

  // Fetch data from the API
  const res = await fetch(
    ` http://localhost:3000/api/products?category=${name}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
