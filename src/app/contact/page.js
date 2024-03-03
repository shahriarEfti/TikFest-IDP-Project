import React from "react";

const page = () => {
  return (
    <>
      <section className=" bg-[#242020] p-[5rem] ">
        <div className=" flex">
          <div className=" w-2 h-12 bg-[#f32b00] mt-1"></div>
          <h3 className=" text-3xl font-bold p-1 text-slate-50">HotLine</h3>
        </div>
        <h4 className=" text-xl font-semibold p-1 text-slate-50 ">
          Cell: 017******44
        </h4>

        <div className=" flex mt-10">
          <div className=" w-2 h-12 bg-[#f32b00] mt-1"></div>
          <h3 className=" text-3xl font-bold p-1 text-slate-50">Call Us</h3>
        </div>
        <h4 className=" text-xl font-semibold p-1 text-slate-50 ">
          Tel:(+88) 09617660660
        </h4>

        <h4 className=" text-xl font-semibold p-1 text-slate-50 mt-14">
          Find us
        </h4>
        <p className="text-white">using map here</p>

        <div className=" flex mt-10">
          <div className=" w-2 h-12 bg-[#f32b00] mt-1"></div>
          <h3 className=" text-3xl font-bold p-1 text-slate-50">E-mail us</h3>
        </div>

        <div className="text-white my-8 space-y-5">
          <div className="mx-3">
            <span className=" text-lg font-medium">Customer Service :</span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              Customerservices@TikFestbd.com
            </span>
          </div>
          <div className="mx-3">
            <span className=" text-lg font-medium">
              Com General Information :
            </span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              Inf0@TikFestbd.com{" "}
            </span>
          </div>
          <div className="mx-3">
            <span className=" text-lg font-medium">
              Com Marketing Department :
            </span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              {" "}
              Media_mkt@TikFestbd.Com{" "}
            </span>
          </div>
          <div className="mx-3">
            <span className=" text-lg font-medium">
              {" "}
              Membership Coordinator :
            </span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              Member@TikFestbd.Com{" "}
            </span>
          </div>
          <div className="mx-3">
            <span className=" text-lg font-medium"> Hr/Admin Department :</span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              Hr@TikFestbd.Com{" "}
            </span>
          </div>
          <div className="mx-3">
            <span className=" text-lg font-medium">Executive Director :</span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              Ed@TikFestbd.Com{" "}
            </span>
          </div>
          <div className="mx-3">
            <span className=" font-medium"> Managing Director :</span>
            <span className="ml-2 text-[#f32b00] underline cursor-pointer">
              {" "}
              TikFestbd.Com{" "}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
