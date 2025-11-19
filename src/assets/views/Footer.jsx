import React, { useEffect, useRef, useState } from "react";
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isInView];
}

function Footer() {
  const [footerRef, footerInView] = useInView(0.3);
  const [mediaRef, mediaInView] = useInView(0.2);

  return (
    <div
      ref={footerRef}
      className="w-full bg-gray-950 p-10 border-t-8 border-red-900 "
    >
      <div className="flex flex-col items-center justify-center space-y-3.5 ">
        <div>
          <p className="animate-pulse animate-duration-500 text-gray-600 font-medium">
            Make your dream website come true
          </p>
        </div>
        <div>
          <h1
            className={`font-black text-4xl text-red-900 ${
              footerInView
                ? "animate-flip-in-x animate-duration-900"
                : "opacity-0"
            }`}
          >
            Let's Start!
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-10 justify-between mt-5 lg:flex-row">
        <div className="lg:w-[49%] mt-10 lg:mt-0 w-full flex items-center justify-center">
          <h1
            className={`xl:text-4xl text-2xl lg:text-3xl  lg:border-b-2 lg:border-gray-600 hover:border-white pb-3  decoration-gray-600 decoration-3 underline-offset-20 hover:cursor-pointer hover:decoration-white transition duration-500 text-[#E1E4EB] drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] font-black ${
              footerInView
                ? "animate-bounce-fade-in animate-delay-600"
                : "opacity-0"
            }`}
          >
            Adamforbusiness01@gmail.com
          </h1>
        </div>
        <div
          className={`w-full h-0.5 lg:w-0.5 lg:h-50 bg-gray-600 ${
            footerInView
              ? "animate-expand-horizontally lg:animate-expand-vertically animate-delay-700 opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        ></div>
        <div className="w-full lg:w-[49%] flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div
              className={`w-18 -mt-15 lg:-mt-5 h-18 ${
                footerInView ? "animate-fade-in animate-delay-800" : "opacity-0"
              }`}
            >
              {" "}
              <img
                className="w-full h-full"
                src="/images/language.svg"
                alt=""
              />
            </div>
            <div className="flex 2xl:w-[40%]  space-y-5 items-center justify-center flex-col">
              <h1
                className={`text-3xl lg:border-b-2 border-gray-600 hover:border-white pb-3 hover:cursor-pointer hover:decoration-white transition duration-500 decoration-gray-600 decoration-3 underline-offset-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] text-[#E1E4EB] font-black ${
                  footerInView
                    ? "animate-bounce-fade-in animate-delay-800"
                    : "opacity-0"
                }`}
              >
                +213 553 567 938
              </h1>
              <div className="flex  items-center justify-center gap-4 flex-wrap">
                <div
                  className={`w-12 h-12 rounded-full  border-gray-600 ${
                    footerInView
                      ? "animate-flip-in-x animate-delay-900 opacity-100 duration-300 delay-1000"
                      : "opacity-0"
                  }`}
                >
                  {" "}
                  <img className="w-full h-full" src="/images/usa.svg" alt="" />
                </div>
                <div
                  className={`w-12 h-12 rounded-full  border-gray-600 ${
                    footerInView
                      ? "animate-flip-in-x animate-delay-900 opacity-100 duration-300 delay-1000"
                      : "opacity-0"
                  }`}
                >
                  {" "}
                  <img
                    className="w-full h-full"
                    src="/images/germany.svg"
                    alt=""
                  />
                </div>
                <div
                  className={`w-12 h-12 rounded-full  border-gray-600 ${
                    footerInView
                      ? "animate-flip-in-x animate-delay-900 opacity-100 duration-300 delay-1000"
                      : "opacity-0"
                  }`}
                >
                  {" "}
                  <img
                    className="w-full h-full"
                    src="/images/algeria.svg"
                    alt=""
                  />
                </div>
                <div
                  className={`w-12 h-12 rounded-full  border-gray-600 ${
                    footerInView
                      ? "animate-flip-in-x animate-delay-900 opacity-100 duration-300 delay-1000"
                      : "opacity-0"
                  }`}
                >
                  {" "}
                  <img
                    className="w-full h-full"
                    src="/images/france.svg"
                    alt=""
                  />
                </div>
                <div
                  className={`w-12 h-12 rounded-full  border-gray-600 ${
                    footerInView
                      ? "animate-flip-in-x animate-delay-900 opacity-100 duration-300 delay-1000"
                      : "opacity-0"
                  }`}
                >
                  {" "}
                  <img
                    className="w-full h-full"
                    src="/images/japan.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-0.5 mt-25  bg-gray-600 ${
          mediaInView
            ? "duration-2000 transition scale-x-100 opacity-70 "
            : "scale-x-0 opacity-30"
        }`}
      ></div>

      <div
        ref={mediaRef}
        className="flex space-x-6 items-center justify-center mt-[7%]"
      >
        <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <a href="https://x.com/El_cazzador01" target="_blank">
            <img className="w-full h-full " src="images/twitter.svg" alt="" />
          </a>
        </div>
        <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <a
            href="https://www.facebook.com/profile.php?id=61583826608232"
            target="_blank"
          >
            <img className="w-full h-full " src="images/facebook.svg" alt="" />
          </a>
        </div>
        <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <a href="https://www.instagram.com/cazzador01/" target="_blank">
            <img className="w-full h-full " src="images/instagram.svg" alt="" />
          </a>
        </div>
        <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/adam-yakoub-28635221a/"
            target="_blank"
          >
            <img className="w-full h-full " src="images/linkedin.svg" alt="" />
          </a>
        </div>
        <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <a
            href="https://github.com/Adam-dev-sic?tab=repositories"
            target="_blank"
          >
            <img className="w-full h-full " src="images/github.svg" alt="" />
          </a>
        </div>
        {/* https://www.linkedin.com/in/adam-yakoub-28635221a/ */}
        {/* <div
          className={`lg:h-13 lg:w-13 h-auto md:h-12  hover:border-white border-gray-600 border overflow-hidden  p-2 hover:animate-heartbeat rounded-full ${
            mediaInView
              ? "animate-flip-in-x opacity-100 transition duration-300"
              : "opacity-0"
          }`}
        >
          <img className="w-full h-full " src="images/slack.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
