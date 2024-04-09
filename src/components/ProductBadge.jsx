const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <span className="text-xs xl:text-sm bg-slate-800 text-white font-semibold py-1 px-2 rounded-md">
        Amazon's <span className="text-amber-500">Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <span className="text-xs xl:text-sm bg-amber-500 text-white font-semibold py-1 px-2 rounded-md">
        #1 Best Seller
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="text-xs xl:text-sm bg-amber-500 text-white font-semibold py-1 px-2 rounded-md">
        Limited Time Deal
      </span>
    );
  }

  return <div></div>;
};

export default ProductBadge;
