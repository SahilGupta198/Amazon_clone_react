import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselSuggestion = () => {
    const navigate = useNavigate();
    const searchCategory = (category) => {
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${category}`,
                searchTerm: ``,
            })}`,
        });
    };

    return (
        <div className="bg-white m-3">
            <div className="text-2xl font-semibold pt-4 pl-4">Up to 75% off | Top home products from stores neaby<span className="text-sm ml-4 text-cyan-700 cursor-pointer hover:underline">See all deals</span></div>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="m-4">
                <SwiperSlide
                    onClick={() => searchCategory("Deals")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_1.jpg"} alt="Deal category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Amazon")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_2.jpg"} alt="Amazon category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Deals")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_3.jpg"} alt="Fashion category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Amazon")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_4.jpg"} alt="Computers category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Deals")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_5.jpg"} alt="Home category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Amazon")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_6.jpg"} alt="Mobiles category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Deals")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_7.jpg"} alt="Mobiles category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Amazon")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_8.jpg"} alt="Mobiles category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Deals")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_9.jpg"} alt="Mobiles category" />
                </SwiperSlide>
                <SwiperSlide
                    onClick={() => searchCategory("Amazon")}
                    className="cursor-pointer rounded-sm py-2 flex flex-col items-center justify-center">
                    <img src={"../images/suggestion_10.jpg"} alt="Mobiles category" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSuggestion;
