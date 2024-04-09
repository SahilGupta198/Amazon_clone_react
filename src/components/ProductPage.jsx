import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";
import { callAPI } from "../utils/CallApi";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* Left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="Main product" />
            </div>
            {/* Middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base mt-6 py-2 text-gray-700 first-line:font-bold first-line:leading-10">
                {product.description}
              </div>
            </div>
            {/* Right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl  text-red-700 text-right font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-sm leading-5 text-gray-400 text-right font-semibold">
                M.R.P:{" "}
                <span className="line-through">{GB_CURRENCY.format(product.oldPrice)}</span>
                <br />
                <span>SAVE 50%</span>
              </div>
              <div className="text-sm xl:text-base text-cyan-700 font-semibold mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base text-cyan-700 font-semibold mt-1">
                FREE Delivery
              </div>
              <div className="text-base  text-green-700 font-semibold mt-4">
                In Stock
              </div>
              <div className="text-base text-gray-700">
                Quantity:{" "}
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-1 bg-white border rounded-md focus:border-amazonclone-yellow">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button onClick={() => dispatch(addToCart(addQuantityToProduct()))} className="btn">
                  Add to Cart
                </button>
                <button className="bg-amber-500 w-full px-3 py-1 text-gray-700 font-semibold text-xs xl:text-sm rounded-2xl hover:bg-amber-600 mt-2">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
