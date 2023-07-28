import Head from "next/head";
import { FaUserAlt, FaRegComment } from "react-icons/fa";
import ModalImage from "react-modal-image";

const ProductDetail = ({ productData }) => {
  // console.log(productData);

  return (
    <div className="container mx-auto flex lg:flex-row flex-col items-center my-12 lg:gap-20 gap-8 h-[60vh]">
      {/* <p> {productData.data[0].productName} </p> */}
      <Head>
        <title>Product Details </title>
      </Head>
      <ModalImage
        small={productData.data[0].image}
        large={productData.data[0].image}
        hideDownload={true}
        hideZoom={true}
        imageBackgroundColor={"white"}
      />
      ;
      <div>
        <div className="p-5 grid gap-2 bg-base-200">
          <h1>
            <span className="font-bold">Product Name:</span>{" "}
            {productData.data[0].productName}
          </h1>
          <p>
            <span className="font-bold">Category:</span>{" "}
            {productData.data[0].category}{" "}
          </p>
          <p>
            <span className="font-bold">Availability:</span>{" "}
            {productData.data[0].status}{" "}
          </p>
          <p>
            <span className="font-bold">Price:</span>{" "}
            {productData.data[0].price}{" "}
          </p>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {productData.data[0].description}{" "}
          </p>
          <p>
            <span className="font-bold">Key Features:</span>{" "}
            {productData.data[0].keyFeatures.Brand &&
              productData.data[0].keyFeatures.Brand}{" "}
            {productData.data[0].keyFeatures.Model &&
              productData.data[0].keyFeatures.Model}{" "}
            {productData.data[0].keyFeatures.Socket &&
              productData.data[0].keyFeatures.Socket}{" "}
            {productData.data[0].keyFeatures.Wattage &&
              productData.data[0].keyFeatures.Wattage}{" "}
            {productData.data[0].keyFeatures.Interface &&
              productData.data[0].keyFeatures.Interface}{" "}
            {productData.data[0].keyFeatures.Resolution &&
              productData.data[0].keyFeatures.Resolution}{" "}
            {productData.data[0].keyFeatures.Backlighting &&
              productData.data[0].keyFeatures.Backlighting}{" "}
            {productData.data[0].keyFeatures.Ports &&
              productData.data[0].keyFeatures.Ports}{" "}
            {productData.data[0].keyFeatures.Connectivity &&
              productData.data[0].keyFeatures.Connectivity}{" "}
            {productData.data[0].keyFeatures.Type &&
              productData.data[0].keyFeatures.Type}{" "}
            {productData.data[0].keyFeatures.TDP &&
              productData.data[0].keyFeatures.TDP}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Individual Rating:</span>{" "}
            {productData.data[0].individualRating}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Average Rating:</span>{" "}
            {productData.data[0].averageRating}{" "}
          </p>
        </div>
        <div className="bg-base-300 p-5">
          <p className="font-bold mb-2">Reviews:</p>
          <div className="grid gap-4">
            {productData.data[0].reviews.map((review, idx) => (
              <div key={idx}>
                <span className="flex items-center gap-2">
                  <FaUserAlt /> {review.userName || review.username}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegComment />
                  {review.comment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/products`);

  const data = await res.json();

  const paths = data.data.map((pr) => ({
    params: { id: pr.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  // Fetch data from the API
  const res = await fetch(`${process.env.URL}/api/products/?id=${id}`);
  const productData = await res.json();

  return {
    props: {
      productData,
    },
  };
};
