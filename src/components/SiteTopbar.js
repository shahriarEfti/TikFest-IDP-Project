import Link from "next/link";
import WritterEffect from "./WritterEffect";

const SiteTopbar = () => {
  return (
    <>
      <nav className=" text-[#CED4DA] bg-[#010101] flex py-5 justify-between">
        <div className=" pl-10">
          <Link href={"/"}>
            <img src="assets/nav/logo.png" alt="logo"></img>
          </Link>
        </div>

        <div className=" flex space-x-10 font-semibold mr-96">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/about"}>About</Link>
          </div>
          <div>
            <Link href={"/"} className="text-[#F32B00]">
              <WritterEffect text={"Ticket"} />
            </Link>
          </div>
          <div>
            <Link href={"/eventpubliser"}>Create an Event</Link>
          </div>
          <div>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className=" pr-10">
          <Link href={"/login"}>
            <button className=" border rounded-2xl py-1 px-6 text-center transition-all hover:bg-[#F32B00] ">
              Login
            </button>
          </Link>

          <Link href={"/registration"}>
            <button className="border rounded-2xl py-1 px-6 text-center -ml-4 bg-[#F32B00] transition-all hover:bg-[#F32B00]/90">
              SignUp
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default SiteTopbar;
