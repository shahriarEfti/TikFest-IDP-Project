const MembershipCard = ({ val }) => {
  return (
    <>
      <section>
        <div>
          <div
            class={`flex flex-col bg-[#454242] rounded-3xl w-[20rem] ${val}`}
          >
            <div class="px-6 py-8 sm:p-10 sm:pb-6">
              <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 class="text-lg font-medium tracking-tighter  text-[#ffffff] lg:text-3xl">
                    Single Session
                  </h2>
                  <p class="mt-2 text-sm text-[#ffffff]">Membership</p>
                </div>
                <div class="mt-6">
                  <p>
                    <span class="text-5xl font-light tracking-tight text-[#ffffff]">
                      $15
                    </span>
                    <span class="text-base font-medium text-gray-400">
                      /package
                    </span>
                  </p>
                </div>

                <div className=" mt-20  space-y-4">
                  <hr className=" border-none pb-[0.125rem] bg-gray-400 mb-10"></hr>

                  <ul className="">
                    <li className=" list-disc ml-5 text-[#ffffff]">
                      Personalisez Workout
                    </li>
                  </ul>

                  <ul className="">
                    <li className=" list-disc ml-5 text-[#ffffff]">
                      Excercise Form Connection
                    </li>
                  </ul>

                  <ul className="">
                    <li className=" list-disc ml-5 text-[#ffffff]">
                      Lifestyle Plan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex px-6 pb-8 sm:px-8 mt-10">
              <a
                aria-describedby="tier-company"
                class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#f32b00] border-2 border-gray-400 rounded-full nline-flex hover:bg-transparent hover:border-gray-400 hover:text-gray-300 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                href="#"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipCard;
