"use client";

import Link from "next/link";
import useRef from "react";

const page = () => {
  // let fNameRef,
  //   industryRef,
  //   emailRef,
  //   nidRef,
  //   phnNumRef,
  //   postCodeRef,
  //   addressRef,
  //   tinNumRef,
  //   tradeLicenseRef,
  //   catagoryRef,
  //   passportNumRef,
  //   bioRef,
  //   fileRef = useRef();

  return (
    <>
      <section className=" p-10 container mx-auto">
        <div className=" flex">
          <div className="ml-[5rem]">
            <div>
              <div
                className="form-container-event-publisher {
"
              >
                <h3 className=" text-center text-2xl font-medium text-[#9ca3af]">
                  To Be An Event Publisher
                </h3>

                <p className="signup">
                  Don't have an account?
                  <Link href={"/registration"}>
                    {/* <a rel="noopener noreferrer" className=""> */}
                    Sign up
                    {/* </a> */}
                  </Link>
                </p>

                <form className="form">
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (fNameRef = input)}
                        type="text"
                        id="firstname"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 peer"
                      ></input>
                      <label
                        htmlFor="firstname"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Firstname: *
                      </label>
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (industryRef = input)}
                        type="text"
                        id="industry"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        htmlFor="industry"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Company/Industry/Board/Instritution: *
                      </label>
                    </div>
                  </div>

                  {/* //// */}
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (emailRef = input)}
                        type="email"
                        id="email"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 peer"
                      ></input>
                      <label
                        htmlFor="firstname"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        E-mail: *
                      </label>
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (nidRef = input)}
                        type="text"
                        id="nid"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        htmlFor="nid"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        NID no: *
                      </label>
                    </div>
                  </div>
                  {/* //// */}

                  {/* //// */}
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (phnNumRef = input)}
                        type="text"
                        id="phnnum"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 peer"
                      ></input>
                      <label
                        htmlFor="phnnum"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Phone number: *
                      </label>
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (postCodeRef = input)}
                        type="text"
                        id="postcode"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        htmlFor="postcode"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Post code: *
                      </label>
                    </div>
                  </div>
                  {/* //// */}

                  {/* //// */}
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (addressRef = input)}
                        type="text"
                        id="address"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 peer"
                      ></input>
                      <label
                        htmlFor="address"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Address: *
                      </label>
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (tinNumRef = input)}
                        type="tinnum"
                        id="firstname"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        htmlFor="tinnum"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        TIN no: *
                      </label>
                    </div>
                  </div>
                  {/* //// */}

                  {/* //// */}
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (fileRef = input)}
                        type="file"
                        id="firstname"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 file:border-none file:py-1 file:px-3 file:rounded-full file:bg-gradient-to-b file:from-[#6897af] file:to-[#215f8f]"
                      ></input>
                      {/* <label
                        for="firstname"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Firstname: *
                      </label> */}
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (tradeLicenseRef = input)}
                        type="text"
                        id="trade"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        htmlFor="trade"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Trade Lience: *
                      </label>
                    </div>
                  </div>
                  {/* //// */}

                  {/* //// */}
                  <div className=" flex space-x-4">
                    <div className=" relative">
                      <input
                        // ref={(input) => (catagoryRef = input)}
                        type="text"
                        id="category"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[20.5rem] focus:border-lime-300 peer"
                      ></input>
                      <label
                        htmlFor="category"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Category: *
                      </label>
                    </div>

                    <div className=" relative">
                      <input
                        // ref={(input) => (passportNumRef = input)}
                        type="text"
                        id="passport"
                        placeholder=""
                        required="true"
                        className=" outline-none border-solid border-[#414141] border-[1px] bg-[#212121] py-4 px-2 rounded-lg w-[21rem] focus:border-cyan-300 peer"
                      ></input>
                      <label
                        for="passport"
                        className=" absolute left-0 py-5 px-2 cursor-text text-[#9ca3af] peer-focus:text-xs peer-focus:-top-5 peer-focus:text-[#ffffff]"
                      >
                        Passport no[if have]: *
                      </label>
                    </div>
                  </div>
                  {/* //// */}

                  <div className="form-group-event-publisher">
                    <textarea
                      // ref={(input) => (bioRef = input)}
                      placeholder="Introducing Business Bio..*"
                      className=" focus:border-teal-300"
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Become an Event Publisher
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
