import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "antd";
import works from "../assests/works.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Carouselimg1 from "../assests/Carouselimg1.png";
import Carouselimg2 from "../assests/Carouselimg2.png";
import Carouselimg3 from "../assests/Carouselimg3.png";

import latestblogimg1 from "../assests/latestblogimg1.png";
import latestblogimg2 from "../assests/latestblogimg2.png";
import latestblogimg3 from "../assests/latestblogimg3.png";

import "../styles/Blog.css";

const topblogPosts = [
  {
    id: 1,
    image: Carouselimg1,
  },
  {
    id: 2,
    image: Carouselimg2,
  },
  {
    id: 3,
    image: Carouselimg3,
  },
  {
    id: 1,
    image: Carouselimg1,
  },
  {
    id: 2,
    image: Carouselimg2,
  },
  {
    id: 3,
    image: Carouselimg3,
  },
];

const latestblogPosts = [
  {
    id: 1,
    image: latestblogimg1,
  },
  {
    id: 2,
    image: latestblogimg2,
  },
  {
    id: 3,
    image: latestblogimg3,
  },
  {
    id: 1,
    image: latestblogimg1,
  },
  {
    id: 2,
    image: latestblogimg2,
  },
  {
    id: 3,
    image: latestblogimg3,
  },
];

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="blog-header">
        <p className="blog-title">
          Our Latest <span className="highlight">Blog</span> &{" "}
          <span className="highlight">News</span>
        </p>
        <p className="blog-description">
          Stay updated with our latest blog & news for insights, trends, and
          tech advancements. Explore a wealth of knowledge and stay ahead in the
          digital world with BizCraft.
        </p>
      </div>

      <div className="blog-section">
        <h2 className="blog-heading">Top Blog</h2>

        <Swiper
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          className="swiper-class"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {topblogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div>
                <img src={post.image} alt={post.title} className="blog-image" />
                <p
                  style={{
                    marginTop: "20%",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {post.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="blog-section">
        <h2 className="blog-heading">Latest Blog</h2>

        <Swiper
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          className="swiper-class"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {latestblogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div>
                <img src={post.image} alt={post.title} className="blog-image" />
                <p
                  style={{
                    marginTop: "20%",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {post.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="work-section">
        <p className="faq-title">OUR WORKS</p>
        <div className="works-image-container">
          <img src={works} className="works-image" alt="" />

          <Button
            className="explore-portfolio-btn"
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
            }}
          >
            Explore Our Portfolio
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
