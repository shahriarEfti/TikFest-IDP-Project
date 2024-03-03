import { FaAlignLeft } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import { TiSocialLinkedinCircular } from "react-icons/ti";

import Link from "next/link";

const About = () => {
  return (
    <>
      <section className=" p-[2rem] bg-[#242020]">
        {/* for headline */}
        <div className=" flex">
          <div className=" w-2 h-9 bg-[#f32b00] mt-1"></div>
          <h3 className=" text-2xl font-bold p-1 text-slate-50">About Us</h3>
        </div>

        {/* for little description */}
        <div className=" pr-10 mt-5">
          <p className=" text-base font-medium p-2.5 text-justify text-slate-50">
            TikFest is the place to go for all your ticket needs in Bangladesh.
            We're a trusted ticket company that helps you handle and sell
            tickets for concerts, events, and more. Our goal is to make it easy
            for event organizers and attendees. We have a user-friendly platform
            that lets event organizers easily sell tickets, keep track of
            attendees, and look at data. For attendees, buying tickets is
            simple, with different ways to pay and instant ticket delivery. At
            TikFest, we believe in giving great customer service to make things
            easy for you. Our team is here to help with any questions or
            concerns, and we work hard to make sure your event goes smoothly.
            We're proud to be a Bangladeshi company that knows the local market
            well. We support our local communities and the arts and culture
            scene in Bangladesh. Along with ticketing, TikFest also lets you
            post and make events every week and month. It's a complete platform
            for managing and promoting events.
            <br />
            <br />
            TikFest is committed to making your event experience enjoyable from
            start to finish. We aim to take the stress out of ticketing so you
            can focus on creating memorable moments. Our platform's simplicity
            ensures that anyone, regardless of their tech-savviness, can easily
            navigate and make the most of our services.
          </p>
        </div>

        <div className=" flex justify-between mt-28">
          <div className=" mt-3 ml-[10rem]">
            <button className="flex justify-center my-auto font-medium bg-[#8b2510] p-3 text-slate-50 w-[18rem]">
              <FaAlignLeft className="m-1 font-bold mr-2" /> Event|Photo Gallary
            </button>
          </div>

          <div className="">
            <marquee>
              {" "}
              <div className=" flex space-x-7 justify-end pr-10 pt-2 mr-10">
                <div className=" bg-slate-50 w-[10rem] h-[10rem]">
                  <img src="assets/gallery/g-1.png"></img>
                </div>
                <div className=" bg-slate-50 w-[10rem] h-[10rem]">
                  <img src="assets/gallery/g-2.png"></img>
                </div>
                <div className=" bg-slate-50 w-[10rem] h-[10rem]">
                  <img src="assets/gallery/g-3.png"></img>
                </div>
                <div className=" bg-slate-50 w-[10rem] h-[10rem]">
                  <img src="assets/gallery/g-4.png"></img>
                </div>
              </div>
            </marquee>

            {/* // */}
          </div>
        </div>
        <div className=" flex text-lg text-white font-semibold">
          <p className=" pr-2">
            <Link href={"/"} className=" underline uppercase">
              Share:
            </Link>
          </p>

          <div className=" flex space-x-1  ml-5 text-3xl">
            <FaFacebook className=" text-[#3b5998] " />
            <AiFillTwitterCircle className=" text-[#55acee]" />
            <TiSocialLinkedinCircular className=" text-[#007ab9]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
