import Link from "next/link";
const page = () => {
  return (
    <>
      <section className=" p-16 bg-[#242020]">
        <div className=" flex justify-evenly">
          <div className=" ml-[10rem]">
            <div className=" ">
              <div class="form-container">
                <h3 className=" text-center text-2xl font-medium">
                  Forgot Password?
                </h3>

                <form class="form">
                  <div class="form-group">
                    <label for="email" className=" text-white">
                      Please enter you're email
                    </label>
                    <input
                      required=""
                      name="email"
                      id="email"
                      type="text"
                      placeholder="support@gmail.com"
                      autoFocus
                    ></input>
                  </div>

                  <button type="submit" class="form-submit-btn">
                    Reset Password
                  </button>
                </form>
                {/* /////////////// */}
                <div>
                  <div className=" mt-10">
                    <p class="signup">
                      Don't have an account?
                      {/* <a rel="noopener noreferrer" href="#" class="">
                        Sign up
                      </a> */}
                      <Link href={"/login"}>Login</Link>
                    </p>
                  </div>

                  <div className=" text-xs flex space-x-2 justify-center text-[#9ca3af] mt-3">
                    <ul>
                      <Link
                        href={"/"}
                        className=" hover:underline cursor-pointer"
                      >
                        Tearms & Conditions
                      </Link>
                    </ul>
                    <ul>
                      <Link
                        href={"/"}
                        className=" hover:underline cursor-pointer"
                      >
                        Support
                      </Link>
                    </ul>
                    <ul>
                      <Link
                        href={"/"}
                        className=" hover:underline cursor-pointer"
                      >
                        Customer care
                      </Link>
                    </ul>
                  </div>
                </div>
                {/* /////////////// */}
              </div>
            </div>
          </div>

          <div className=" my-auto text-white pt-3">
            <img
              src="assets/emoji.png"
              className=" w-[12.5rem] mx-auto animate__animated animate__bounceInDown animate__slower"
            ></img>
            <h2 className=" text-5xl font-extrabold border-dashed border-b-2 pb-6 border-[#4e4e4e] animate__animated animate__fadeInRight animate__slower">
              Take me Back.!
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
