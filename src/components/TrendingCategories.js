import Link from "next/link";
import WritterEffect from "./WritterEffect";

const TrendingCategories = () => {
  return (
    <>
      <section className=" bg-[#353232] py-7">
        <h2 className=" text-center text-[#CED4DA] text-4xl font-semibold mb-4">
          <WritterEffect text={"Check Out Trending Catagories"} />
        </h2>
        <div className=" space-y-5  bg-[#2C2B2B] w-[60%] mx-auto py-7 rounded-lg border boder-[#CED4DA]">
          <div className=" rounded text-white font-medium flex justify-center space-x-5 ">
            <div className=" py-2 px-20 bg-[#28A745] rounded-sm">
              <Link href={"/"}>Music</Link>
            </div>
            <div className=" py-2 px-20 bg-[#FFC300] rounded-sm">
              <Link href={"/"}>Health</Link>
            </div>
            <div className=" py-2 px-20 bg-[#F5167E] rounded-sm">
              <Link href={"/"}>Holiday</Link>
            </div>
          </div>
          <div className=" rounded text-white font-medium flex justify-center space-x-5 ">
            <div className=" py-2 px-20 bg-[#3D37F1] rounded-sm">
              <Link href={"/"}>Sports</Link>
            </div>
            <div className=" py-2 px-[3.7rem] bg-[#A72828] rounded-sm">
              <Link href={"/"}>Food & Drink</Link>
            </div>
            <div className=" py-2 px-[3.4rem] bg-[#2889A7] rounded-sm">
              <Link href={"/"}>Movies & Series</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCategories;
