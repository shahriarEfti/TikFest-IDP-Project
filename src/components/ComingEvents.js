import Link from "next/link";
import { IoTicketSharp } from "react-icons/io5";
import WritterEffect from "./WritterEffect";

const ComingEvents = () => {
  return (
    <>
      <h2 className=" text-center text-3xl font-semibold p-5 text-white bg-[#242020]">
        <WritterEffect text={"Upcoming Events"} />
      </h2>

      <section className=" bg-[#353232] p-[5rem] text-white">
        <div className=" flex justify-evenly">
          <div className=" relative rounded-3xl animate__animated animate__slideInLeft animate__slower hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-1.jpg"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>

              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative animate__animated animate__slideInDown animate__slower rounded-3xl hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-2.png"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>

              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative animate__animated animate__slideInRight animate__slower rounded-3xl hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-3.png"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>

              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* //////////// */}
        <div className=" flex justify-evenly mt-28">
          <div className=" relative animate__animated animate__slideInLeft animate__slower rounded-3xl hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-4.png"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>

              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative animate__animated animate__slideInUp animate__slower rounded-3xl hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-5.jpg"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>
              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className=" relative animate__animated animate__slideInRight animate__slower rounded-3xl hover:shadow-lg hover:shadow-white">
            <div className="w-[18rem] h-[27rem] bg-[#303030] rounded-3xl border-2 border-[#f32b00]">
              <img
                src="assets/events/p-6.png"
                className=" w-[10rem] h-[15rem] absolute -top-8 left-16 rounded-xl"
              ></img>

              <div className=" flex absolute bottom-40 space-x-3 text-sm px-5">
                <div className=" flex flex-col">
                  <p className=" text-xs text-[#f32b00]">Nov</p>
                  <h5 className=" text-xl font-bold">20</h5>
                </div>

                <p className=" font-semibold">
                  James stages show in Rajshahi
                  <br></br>
                  city
                </p>
              </div>
              <p className="absolute bottom-28 text-xs ml-14 tracking-wide">
                James stages show in Rajshahi
                <br></br>
                city
              </p>

              <Link href={"/show-page"}>
                <button className=" text-center text-white bg-[#f32b00] flex py-[0.325rem] px-5 rounded-md absolute bottom-8 ml-20 text-base">
                  Buy Ticket
                  <IoTicketSharp className="ml-2 mt-[0.325rem]" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Link href={"#"}>
          <button className="text-center text-white border-2 border-[#f32b00] flex mx-auto py-[0.425rem] px-5 rounded-full text-base mt-20 hover:bg-white hover:text-black  hover:font-medium hover:border-none transition-colors">
            Learn More
          </button>
        </Link>
      </section>
    </>
  );
};

export default ComingEvents;
