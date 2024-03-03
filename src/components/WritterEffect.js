"use client";
import Typewriter from "typewriter-effect";

const WritterEffect = ({ text }) => {
  return (
    <>
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default WritterEffect;
