import Link from "next/link";
import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";

const NewEra = () => {
  return (
    <>
      <section className=" bg-[#242020] p-[5rem]">
        <div className=" flex justify-evenly">
          <div className=" w-1/2 animate__animated animate__lightSpeedInLeft animate__slower">
            <img
              src="assets/getar.png"
              alt="getar img"
              className=" w-[23rem] h-[22rem] pl-10 ml-6 bg-transparent mt-4"
            ></img>
          </div>
          <div className=" w-1/2 animate__animated animate__slideInRight animate__slower">
            <img src="assets/new-era.png" alt="text" className="mx-auto"></img>

            <p className=" text-justify text-white pr-10 mr-6 mt-8">
              <span className="text-[#ffc300]"> Prepare to Rock! </span>
              With a mission to harness the power of our community and
              contribute significantly to the professional landscape, Get Set
              Rock is eager to directly engage with and introduce thrilling
              offerings to all those immersed in Bangladesh's vibrant Band Music
              Scene.
              <br></br>
              <br></br>
              We share your passion, anticipation, and optimism for the
              Bangladeshi Band Music Industry, and we guarantee that your most
              incredible musical adventure begins right here.
            </p>

            <Link href={"#"}>
              <button className=" py-3 px-10 bg-[#f32b00] rounded-lg text-white flex mt-8 mx-auto">
                <RiSendPlaneLine className=" mt-1 mx-2 text-xl" />
                Know More
              </button>
            </Link>
          </div>
        </div>

        <img
          src="assets/Brand.png"
          alt="brands"
          className=" p-4 mx-auto mt-20 animate__animated animate__zoomIn animate__slower"
        ></img>
      </section>
    </>
  );
};

export default NewEra;
