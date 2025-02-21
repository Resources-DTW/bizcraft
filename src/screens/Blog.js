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
      <div
        style={{
          margin: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#FFFFFF",
          }}
        >
          Our Latest <span className="highlight">Blog</span> &{" "}
          <span className="highlight">News</span>
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "27px",
            color: "#FFFFFF",
            opacity: "80%",
            width: "80%",
          }}
        >
          Stay updated with our latest blog & news for insights, trends, and
          tech advancements. Explore a wealth of knowledge and stay ahead in the
          digital world with BizCraft.
        </p>
      </div>

      <div
        style={{
          marginTop: "10%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Top Blog
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          style={{ marginTop: "5%" }}
        >
          {topblogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "90%",
                    height: "450px",
                    marginTop: "5%",
                  }}
                />
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

      <div
        style={{
          marginTop: "10%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Latest Blog
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          style={{ marginTop: "5%" }}
        >
          {latestblogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "90%",
                    height: "450px",
                    marginTop: "5%",
                  }}
                />
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
            style={{
              position: "absolute",
              zIndex: 1,
              fontSize: 22,
              fontWeight: 400,
              backgroundColor: "transparent",
              borderRadius: "8px",
              width: "377px",
              height: "70px",
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
