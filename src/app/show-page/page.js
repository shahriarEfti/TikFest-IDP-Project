import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className=" bg-[#242020] p-[5rem] ">
        <div className=" flex">
          <div className=" w-2 h-9 bg-[#f32b00] mt-1"></div>
          <h3 className=" text-2xl font-bold p-1 text-slate-50">Location</h3>
        </div>
        <h4 className=" text-xl font-semibold p-1 text-slate-50 underline">
          Natore
        </h4>

        <div className=" flex justify-evenly relative mt-10">
          <div className=" flex flex-col relative animate__animated animate__fadeInDownBig animate__slower">
            <div className="">
              <img
                src="assets/sp-1.png"
                className=" rounded-lg w-[15rem] h-[20rem] mt-4"
              ></img>
            </div>
            <p className=" text-white absolute top-[23rem] mb-[1rem]">
              Darshan Raval Stage Show in Natore
            </p>
          </div>

          <div className=" h-[20rem] w-2 bg-[#ca2805] absolute top-10 left-[35rem]"></div>

          <div className="text-white border-[#ca2805] border-4 rounded-lg p-5 w-[33%] animate__animated animate__fadeInUpBig animate__slower">
            <h4 className="text-2xl font-semibold text-center text-white mb-8">
              Ticket summary
            </h4>
            <div className=" space-y-10">
              <div>
                <label className=" mr-[4.3rem] font-normal text-xl">
                  Show date
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[4rem] font-normal text-xl">
                  Show time
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[4.3rem] font-normal text-xl">
                  Seat type
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[2rem] font-normal text-xl  ">
                  Ticket quantity
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[2.3rem] font-normal text-xl">
                  Total amount
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div className="text-center">
                <Link href={"/payment-getway"}>
                  <button
                    type="submit"
                    className=" py-2 px-2 w-[65%] rounded-lg bg-[#ca2805] text-center"
                  >
                    Purchase Ticket
                  </button>
                </Link>
              </div>

              <div className="flex justify-center">
                <p className="px-4 text-xs text-justify">
                  By clicking the Purchase Tickets you are accepting
                  <br></br>
                  <span className="text-[#ca2805] cursor-pointer underline">
                    Terms & Conditions
                  </span>{" "}
                  of Tik<span className="text-[#ca2805]">Fest</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
