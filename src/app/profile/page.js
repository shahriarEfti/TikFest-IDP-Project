import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsTicketDetailed } from "react-icons/bs";

const page = () => {
  return (
    <>
      <section className=" bg-[#242020] p-[4rem]">
        <div className="flex justify-evenly">
          <div>
            <div class="results-summary-container">
              <div class="confetti">
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
              </div>
              <div class="results-summary-container__result">
                <div class="">
                  <img src="assets/efti.jpg" class="result-box"></img>
                </div>
                <div class="result-text-box">
                  <div class="heading-secondary">Shahriar Pervez Efti</div>

                  <div class="summary__cta">
                    <button class="btn btn__continue">Edit profile</button>
                  </div>
                </div>
              </div>
              <div class="results-summary-container__options">
                <div class="heading-secondary heading-secondary--blue">
                  Profile menu
                </div>
                <div className=" w-[100%] h-1 bg-[#ca2805] mb-4"></div>
                <div class="summary-result-options">
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <RiHome6Line className=" mx-2" />
                      <span class="memory-icon-text">Home</span>
                    </div>
                  </div>
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <FaRegUser className=" mx-2" />
                      <span class="memory-icon-text">Memory</span>
                    </div>
                  </div>
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <HiOutlineLockClosed className=" mx-2" />
                      <span class="verbal-icon-text">Change password</span>
                    </div>
                  </div>
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <BsTicketDetailed className=" mx-2" />
                      <span class="visual-icon-text">My tickets</span>
                    </div>
                  </div>
                  <div class="result-option result-option-memory r_o_m_b">
                    <div class="icon-box">
                      <HiOutlineLockClosed className=" mx-2" />
                      <span class="verbal-icon-text">Change password</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////////// */}
          <div className="text-white border-[#ca2805] border-2 rounded-lg p-8 w-[38.5%]">
            <h2 className=" text-4xl font-semibold text-center mb-[5rem]">
              Basic Information
            </h2>

            <div className=" space-y-10">
              <div>
                <label className=" mr-[10.5rem] font-semibold text-2xl">
                  Name
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[10.5rem] font-semibold text-2xl">
                  E-mail
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[10.5rem] font-semibold text-2xl">
                  Phone
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[10.5rem] font-semibold text-2xl -ml-3">
                  Gender
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[10.5rem] font-semibold text-2xl -ml-4">
                  Address
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>

              <div>
                <label className=" mr-[8rem] font-semibold text-2xl -ml-5">
                  Membership
                </label>
                <input className=" bg-transparent outline-none border-b-2 border-dashed border-[#414141]"></input>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
