"use client";

import { BsSendArrowUp } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import MembershipCard from "./../../components/MembershipCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const page = () => {
  return (
    <>
      <section className=" bg-[#121214] relative">
        <div className=" flex">
          <div className="w-1/2 text-white">
            <div className=" flex mt-6 px-4 justify-start">
              <img
                src="assets/membarship/emoji.png"
                className=" w-1/3 ml-10 px-4 animate__animated animate__flash animate__slower"
              ></img>
              <h2 className=" text-3xl font-bold py-10 italic mr-20 animate__animated animate__bounce animate__slower">
                BE PROFESSIONAL
              </h2>
            </div>

            <div className=" mt-[4rem] pl-12 space-y-3">
              <h3 className=" text-[#08c05e] font-semibold text-xl">
                Atualize ideias realizing in 5 minutes
              </h3>
              <p className=" text-white font-semibold text-xl">
                tudo que você precisa saber para começar seu dia bem e informado
              </p>
              <p className=" text-[#bfbfbf] text-justify">
                These are the brand guidelines for using the Very Professional
                branding, created and
                <br></br>
                organized into a slideshow/presentation by our Very Professional
                team ;)
              </p>
            </div>
            <Link href={"#"}>
              <button className=" text-[#f32b00] absolute pl-12 bottom-14 flex">
                Go on your own creativity
                <FaArrowRightLong className=" text-[##f32b00] ml-7 mt-1 text-xl" />
              </button>
            </Link>
          </div>
          <div className=" absolute bottom-44 text-white pl-12">
            <label className="">Input E-mail</label>
            <br></br>
            <br></br>
            <input
              type="email"
              className=" w-[50rem] outline-none py-3 border-l-4 border-[#04d361] text-black pl-2"
            ></input>
            <BsSendArrowUp className=" absolute right-0 bottom-0 bg-[#f32b00]  w-[3.5rem] h-[2.940rem] " />
          </div>
          <div className=" w-1/2">
            <img
              src="assets/membarship/image.png"
              className="w-[100%] h-[90vh] bg-cover "
            ></img>
          </div>
        </div>
      </section>

      <section className="">
        <div
          className="bg-cover bg-center h-screen p-[5rem]"
          style={{
            backgroundImage: 'url("assets/membarship/card-bg.png")',
          }}
        >
          {/* parent */}
          <div className=" flex justify-evenly">
            <MembershipCard
              val={
                "animate__animated animate__fadeInTopLeft animate__slower hover:scale-105 transition-all duration-300"
              }
            />
            <MembershipCard
              val={
                "mt-[4.325rem] animate__animated animate__pulse animate__slower hover:scale-95 transition-all duration-300"
              }
            />
            <MembershipCard
              val={
                "animate__animated animate__fadeInBottomRight animate__slower hover:scale-105 transition-all duration-300"
              }
            />
          </div>
        </div>
      </section>

      <section className="bg-[#242020]">
        <div
          className="bg-cover bg-center h-screen p-[5rem]"
          style={{
            backgroundImage: 'url("assets/membarship/rec.png")',
          }}
        >
          <div className=" flex justify-evenly relative">
            <div className=" flex flex-row-reverse w-1/2">
              <div className="">
                <h2 className=" text-3xl font-bold mt-14 mb-3 text-[#ffffff]">
                  Get Online Membership
                </h2>
                <text className=" text-base font-medium text-[#e0dfdf]">
                  14 days unlimited free trial. No contract or credit card
                  required
                </text>
                <img
                  src="assets/membarship/c-1.png"
                  className=" mx-auto mt-10"
                ></img>
              </div>

              <img
                src="assets/membarship/girl.png"
                className=" h-[18rem] animate__animated animate__slideInLeft animate__slower"
              ></img>

              <Link href={"#"}>
                <button className=" text-white absolute bottom-0 font-normal py-2 px-20 bg-[#f32b00] rounded-full">
                  Get Start
                </button>
              </Link>
            </div>

            <div className="w-1/2 animate-pulse">
              <img
                src="assets/membarship/pessoas-assistindo-tv 1.png"
                className=" mt-20 mx-auto"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="p-[5rem] bg-[#242020]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Link href={"#"}>
              <img
                src="assets/membarship/Cards1.png"
                className=" cursor-pointer"
              ></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"}>
              <img
                src="assets/membarship/Cards2.png"
                className=" cursor-pointer"
              ></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"}>
              <img
                src="assets/membarship/Cards3.png"
                className=" cursor-pointer"
              ></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"}>
              <img
                src="assets/membarship/card4.png"
                className=" cursor-pointer"
              ></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"}>
              <img
                src="assets/membarship/card5.png"
                className=" h-[13.1rem] cursor-pointer"
              ></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="p-[5rem] bg-[#242020]">
        <div>
          <img src="assets/membarship/buy.png"></img>
        </div>
      </section>
    </>
  );
};

export default page;
