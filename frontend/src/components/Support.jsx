import React, { useEffect, useRef } from "react";

import Hero from "../assets/assets_frontend/Hero.png";

import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const imgRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    gsap.to(imgRef.current, {
      y: -50,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="w-[1200px] mt-20">
      <div className="flex justify-between gap-3">
        <img
          ref={imgRef}
          className="w-72 hover:drop-shadow-2xl transition-all"
          src={Hero}
          alt=""
        />
        <div className="flex flex-col items-start pt-6 gap-9">
          <p className="text-5xl font-bold">24 X 7 SUPPORT</p>
          <p className="text-xl text-gray-400">
            Health doesn’t wait — and neither should you. With our 24x7 hospital
            appointment booking service, you can schedule a consultation with
            trusted doctors anytime, anywhere. Whether it’s late at night, early
            morning, or during weekends, getting the care you need is now faster
            and easier than ever. No more waiting in long queues or struggling
            to find an available doctor — just instant booking, quick
            confirmations, and timely reminders to ensure you never miss a vital
            check-up. Your health is our priority, and we’re here for you —
            round the clock, every day.
          </p>
          <div className="w-full text-center">
            <button
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="py-2 px-3 rounded-xl bg-primary text-white"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
