import React from "react";
import "./HomeSlider.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
  const images = [
    {
      url: "/image/sliderimage/01.jpg",
      title: "LATEST TREANDING COLLECTION",
      description:
        "ugysdfhb ewbnwshj wdjk mewn njwcm wqjf njcwkmwqji nce,vceoi ncw ,mweko wnqem p newmvji",
    },
    {
      url: "/image/sliderimage/02.jpg",
      title: "Image 2",
      description: "This is the description for image 2",
    },
    // {
    //   url: "/image/sliderimage/07.jpg",
    //   title: "Image 3",
    //   description: "This is the description for image 3",
    // },
  ];

  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="main_text_container">
                <img src={image.url} alt="" className="banner_image" />
                <div className="main_heading ">
                  <p className="title_text">{image.title}</p>
                  <p className="desc_text">{image.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* banner end */}
      {/* item section start */}
      {/* <div>bhjdsjufhoswdiho</div> */}
    </>
  );
};

export default HomeSlider;
