import Link from "next/link";
import React from "react";

const MakeOwnEvent = () => {
  return (
    <>
      <section className=" bg-[#aba8a8] p-[3rem]">
        <div className=" flex justify-evenly">
          <div>
            <img
              src="assets/song-2.png"
              className=" w-[20rem] h-[15rem] text-2xl"
            ></img>
          </div>
          <div>
            <h2 className=" font-bold text-3xl ">Make your own Event</h2>
            <p className=" font-medium text-[#575555] mt-4 mb-8">
              Lorem ipsum dolar sit amet, consectetuer
              <br></br>
              adipiscing elit.
            </p>

            <Link href={"#"}>
              <button className="bg-[#f32b00] py-3 px-20 rounded-full text-white font-normal ml-6 animate__animated animate__heartBeat animate__slower">
                Create Events
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeOwnEvent;
