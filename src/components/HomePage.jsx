import { Carousel, HomePageCard, CarouselCategory, CarouselProduct, CarouselSuggestion } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background " id="home">
      <div className="min-w-[1000px] max-w-[1500px] m-auto overflow-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"Min 60% off on Outdoor lights"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Combo packs under ₹699"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Revamp your home in style"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
        </div>
        <div className="m-3 w-[70%] mx-auto">
          <img
            className="w-full rounded-sm"
            src={"../images/banner_image_2.jpg"}
            alt="Banner 2"
          />
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <CarouselSuggestion />
        <div className="h-full mb-4">
          <img
            className="w-[80%] mx-auto rounded-sm"
            src={"../images/banner_image.png"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
