/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaSlack, FaMoneyBillAlt, FaStore, FaStar } from "react-icons/fa";

const FeaturedProduct = ({ products }) => {
  //   console.log(products);
  return (
    <div className="my-12 container mx-auto">
      <p className="text-primary text-2xl text-center underline underline-offset-8 mb-8">
        Featured Product
      </p>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-12">
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

export default FeaturedProduct;
