import React from "react";
import "./HomeSlider.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

// icon section
import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { VscLock } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

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
        {/* banner end */}
        {/* customber support section start */}
        <div className="custember_section ">
          <div className="main_item_section">
            <MdOutlineLocalShipping className="icon_class" />
            <div className="custember_content">
              <p className="text_heading">Free Shiping</p>
              <p className="text_sub">Writing Result-Orinted</p>
            </div>
          </div>

          <div className="main_item_section">
            <LiaHandHoldingUsdSolid className="icon_class" />
            <div className="custember_content">
              <p className="text_heading">Money Return</p>
              <p className="text_sub">Writing Result-Orinted</p>
            </div>
          </div>

          <div className="main_item_section">
            <VscLock className="icon_class" />
            <div className="custember_content">
              <p className="text_heading">Secure Payment</p>
              <p className="text_sub">Writing Result-Orinted</p>
            </div>
          </div>

          <div className="main_item_section">
            <BiSupport className="icon_class" />
            <div className="custember_content">
              <p className="text_heading">24/7Support</p>
              <p className="text_sub">Writing Result-Orinted</p>
            </div>
          </div>
        </div>
        {/* customber support section end */}
        {/* Daily DEALS start section */}
        <div>
          <div className="deals">
            <p className="deals_heading">DAILY DEALS</p>
            <div className="newitemsection">
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Sale Items</p>
            </div>
          </div>
        </div>
        {/* Daily DEALS end section */}

        {/*  Item section start */}
        <div className="item_section_start">
          <div>
            <img
              src="\image\homepage\img2.jpg.jpg"
              alt="dress"
              className="image_section"
            ></img>
            <h2 className="text_section">Mens Leather Jacket</h2>
            <div className="price_section">
              <p className="old_price">$200</p>
              <span className="new_price">$150</span>
            </div>
            <BiSupport className="" />
          </div>

          {/* image 2 */}
          <div>
            <img
              src="\image\homepage\img2.jpg.jpg"
              alt="dress"
              className="image_section"
            ></img>
            <h2 className="text_section">Mens Leather Jacket</h2>
            <div className="price_section">
              <p className="old_price">$20</p>
              <span className="new_price">$15</span>
            </div>
            <BiSupport className="" />
          </div>

          {/* image 3 */}
          <div>
            <img
              src="\image\homepage\img2.jpg.jpg"
              alt="dress"
              className="image_section"
            ></img>
            <h2 className="text_section">Mens Leather Jacket</h2>
            <div className="price_section">
              <p className="old_price">$20</p>
              <span className="new_price">$15</span>
            </div>
            <BiSupport className="" />
          </div>
          {/* image  */}
          <div>
            <img
              src="\image\homepage\img2.jpg.jpg"
              alt="dress"
              className="image_section"
            ></img>
            <h2 className="text_section">Mens Leather Jacket</h2>
            <div className="price_section">
              <p className="old_price">$20</p>
              <span className="new_price">$15</span>
            </div>
            <BiSupport className="" />
          </div>
        </div>
        {/*  Item section end */}
      </div>
    </>
  );
};

export default HomeSlider;
