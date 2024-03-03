import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section className="bg-[#242020] text-white p-[4rem] ">
        <h2 className=" text-center font-semibold text-3xl">Payment Methods</h2>

        <Link href={"/profile"}>
          <button
            type="button"
            className=" py-2 bg-[#f32b00] w-[13rem] text-center relative text-[#242020] font-medium ml-[70rem]"
          >
            <FaUser className=" absolute ml-3 mt-1 text-white" /> Shahriar
            Pervez Efti
          </button>
        </Link>

        <p className=" font-medium text-md">
          Please login to show your saved wallets
        </p>
        <div className=" bg-[#f32b00] relative h-16 my-0 w-[18rem] rounded-lg mt-5">
          <span className=" w-3 h-12 bg-white py-2 absolute top-2 left-3"></span>
          <p className=" text-2xl font-semibold underline ml-12 py-3">
            MOBILE BANKING
          </p>
        </div>

        <div className=" flex justify-evenly mt-10 mx-12 animate__animated animate__fadeInLeft animate__slower">
          <Link href={"#"}>
            <img
              src="assets/payment/BKash-Logo.wine.png"
              alt="bkash"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>

          <Link href={"#"}>
            <img
              src="assets/payment/nogod.png"
              alt="nogod"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
          <Link href={"#"}>
            <img
              src="assets/payment/-rocket-logo.png"
              alt="rocket"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
          <Link href={"#"}>
            <img
              src="assets/payment/upai.png"
              alt="upay"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
        </div>

        {/* 
        //////////////
        // 2nd part // 
        /////////////
        */}
        <div className=" bg-[#f32b00] relative h-16 w-[18rem] rounded-lg mt-24">
          <span className=" w-3 h-12 bg-white py-2 absolute top-2 left-3"></span>
          <p className=" text-2xl font-semibold underline ml-12 py-3">CARDS</p>
        </div>

        <div className=" flex justify-evenly mt-10 mx-12 animate__animated animate__fadeInRight animate__slower">
          <Link href={"#"}>
            <img
              src="assets/payment/Visa cards.png"
              alt="bkash"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>

          <Link href={"#"}>
            <img
              src="assets/payment/master cards.png"
              alt="nogod"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
          <Link href={"#"}>
            <img
              src="assets/payment/paypal.png"
              alt="rocket"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
          <Link href={"#"}>
            <img
              src="assets/payment/dbbl.png"
              alt="upay"
              className=" w-64 h-32 bg-white"
            ></img>
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
