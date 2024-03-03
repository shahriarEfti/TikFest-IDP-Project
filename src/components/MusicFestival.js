// "use client";

import "animate.css";

const MusicFestival = () => {
  // function clock() {
  //   let date = new Date();
  //   let hr = date.getHours();
  //   let min = date.getMinutes();
  //   let sec = date.getSeconds();

  //   min = formatTime(min);
  //   sec = formatTime(sec);

  //   let time = `hr:${hr}:${min}:${sec}`;

  //   setInterval(clock, 1000);
  // }

  // function formatTime(val) {
  //   val < 0 ? "0" + val : "";

  //   return val;
  // }

  return (
    <>
      <section className=" bg-[#211E1E] pb-4">
        <h2 className=" ml-[26rem] text-[#CED4DA] pt-[3.8rem] font-semibold text-3xl mb-3 animate__animated animate__backInRight animate__slower	">
          Classical Music Festival 2020
        </h2>

        <div className=" flex text-center justify-center space-x-5 text-white font-medium">
          <div className=" bg-[#F32B00] px-4">
            <h3>31</h3>
            <p>Days</p>
          </div>
          <p className=" font-extrabold text-white py-3">:</p>
          <div className=" bg-[#F32B00] px-4">
            <h3>16</h3>
            <p>Hours</p>
          </div>
          <p className=" font-extrabold text-white py-3">:</p>
          <div className=" bg-[#F32B00] px-4">
            <h3>48</h3>
            <p>Mins</p>
          </div>
          <p className=" font-extrabold text-white py-3">:</p>
          <div className=" bg-[#F32B00] px-4">
            <h3>48</h3>
            <p>Secs</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicFestival;
