import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-4">Best Seller<span className="text-sm ml-4 text-cyan-700 cursor-pointer hover:underline">See all deals</span></div>
      <Swiper
        slidesPerView={7}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="m-4">
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i} className="bg-gray-100 rounded-sm m-4 py-4 flex flex-col items-center justify-center">
            <Link to={`/product/${i}`} className="mb-4">
              <img src={`../images/product_${i}_small.jpg`} alt="Carousel product" />
            </Link>
            <div className="text-xs font-semibold text-rose-700"><span className="bg-rose-700 text-white p-1 mr-2 rounded-sm">20% off</span>Limited time deal</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
