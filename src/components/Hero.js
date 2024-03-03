import Link from "next/link";
import Image from "next/image";
import hero from "../../public/assets/hero/nicholas-green-nPz8akkUmDI-unsplash.jpg";

const Hero = () => {
  return (
    <>
      <section className="">
        <div className=" relative">
          <Image
            src={hero}
            alt="hero"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
              height: "90vh",
              zIndex: "-1",

              opacity: "0.95",
            }}
          />

          <p className=" absolute top-[2rem] left-[3rem]">
            <marquee>
              <img src="assets/hero/Music.png" />
            </marquee>
          </p>
          <p className=" absolute top-[12rem] left-[25rem]">
            <marquee>
              <img src="assets/hero/Beats.png" />
            </marquee>
          </p>
          <p className=" absolute top-[22rem] right-[3rem]">
            <marquee>
              <img src="assets/hero/Life.png" />
            </marquee>
          </p>

          <div className=" text-white absolute top-[28rem] right-[15rem]">
            <Link href={"/"}>
              <button className=" rounded-3xl  py-3 px-10 text-center bg-[#F32B00]">
                Get Ticket
              </button>
            </Link>

            <Link href={"/"}>
              {/* <button className=" rounded-3xl border-2 border-[#CED4DA] py-2 px-10 text-center transition-all hover:bg-[#F32B00] -ml-6">
                Learn More
              </button> */}
              <button class="learn-more -ml-6">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
              </button>
            </Link>
          </div>

          <div className=" flex justify-around bg-[#211E1E] w-[45rem] mx-auto text-center py-4 border border-gray-500-2 rounded-xl absolute top-[36.5rem] left-[30rem]">
            <div>
              <div className=" text-[#CED4DA] mb-2 -ml-5">Search Event</div>
              <input
                type="search"
                name="country"
                list="country_name"
                placeholder="Music Show"
                className=" bg-[#211E1E] text-white py-1 pl-2 outline-none font-medium focus:border-b-2  focus:border-white w-36 rounded ml-5"
              ></input>

              <datalist id="country_name">
                <option value={"Rajshahi"}></option>
                <option value={"Natore"}></option>
                <option value={"Dhaka"}></option>
                <option value={"khulna"}></option>
              </datalist>
            </div>

            <div>
              <div className=" text-[#CED4DA] mb-2 -ml-[4.5rem]">Place</div>
              <input
                type="search"
                placeholder="Natore"
                className=" bg-[#211E1E] text-white py-1 pl-2 outline-none font-medium focus:border-b-2  focus:border-white w-36 rounded ml-5"
              ></input>
            </div>

            <div>
              <div className=" text-[#CED4DA] mb-2 -ml-[4.6rem]">Time</div>
              <input
                type="search"
                placeholder="Any Date"
                className="bg-[#211E1E] text-white py-1 pl-2 outline-none font-medium focus:border-b-2  focus:border-white w-36 rounded ml-5"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
