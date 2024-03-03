import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className=" p-[5rem] bg-[#303030] text-[#dddddd]">
        <div>
          <img src="assets/nav/logo.png"></img>
        </div>

        <div className=" flex mt-10">
          <div className=" w-[30%]">
            <p className=" text-justify pl-4">
              TikFest is a Bangladeshi self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
          </div>

          <div className=" w-[20%] pl-20 space-y-2 font-semibold cursor-pointer">
            <ul className=" hover:underline">Create and Set Up</ul>
            <ul className=" hover:underline">Sell Tickets</ul>
            <ul className=" hover:underline">Online RSVP</ul>
            <ul className=" hover:underline">Online Events</ul>
          </div>

          <div className=" w-[20%] pl-14 space-y-2 font-semibold cursor-pointer">
            <ul className=" hover:underline"> About Us</ul>
            <ul className=" hover:underline">Press</ul>
            <ul className=" hover:underline">Contact Us</ul>
            <ul className=" hover:underline">Help Center</ul>
            <ul className=" hover:underline">How it Works</ul>
            <ul className=" hover:underline">Privacy</ul>
            <ul className=" hover:underline">Terms</ul>
          </div>

          <div className=" w-[30%]">
            <p className=" text-justify">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </p>

            <ul className=" mt-8 relative">
              <input
                type="search"
                placeholder="Enter your email address.."
                className=" p-4 rounded-3xl w-[25rem] outline-none placeholder-[#dddddd] text-[#5c5c5c]"
              ></input>
              <Link href={"/membarship"}>
                <button className=" rounded-3xl  py-3 px-10 text-center bg-[#F32B00] top-[-3.2rem] right-[-12.5rem] animate-bounce">
                  Subscribe Now
                </button>
              </Link>
            </ul>
          </div>
        </div>

        <hr className=" mt-16 mb-8 w-[90%] bg-[#ffc300] pb-[0.01rem] border-none mx-auto"></hr>
        <p className=" text-center">
          copyrights&copy;2023 all rights reserved by TikFest
        </p>
      </section>
    </>
  );
};

export default Footer;
