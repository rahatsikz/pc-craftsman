/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaSlack, FaMoneyBillAlt, FaStore, FaStar } from "react-icons/fa";

const PCBuilderProduct = ({ products }) => {
  console.log(products);

  return (
    <div className="my-6 container mx-auto">
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        Products
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {products?.data.map((pr) => (
          <div
            key={pr._id}
            className="card lg:card-side bg-base-100 shadow-xl border px-5 lg:py-8 py-12"
          >
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
              <button className="btn my-4">Add To Builder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCBuilderProduct;

export const getServerSideProps = async ({ params }) => {
  const { name } = params;

  const res = await fetch(
    `http://localhost:3000/api/products?category=${name}`
  );
  const products = await res.json();
  return { props: { products } };
};
