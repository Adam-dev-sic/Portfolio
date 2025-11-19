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

function Body() {
  const [loaded, setLoaded] = useState(false);
  const [headerRef, headerInView] = useInView(0.3);
  const [imageRef, imageInView] = useInView(0.3);
  const [techStackRef, techStackInView] = useInView(0.3);
  const [lineRef, lineInView] = useInView(0.3);
  const [projectOneRef, projectOneInView] = useInView(0.5);
  const [myProjectTextRef, myProjectTextInView] = useInView(0.3);
  const [projectTwoRef, projectTwoInView] = useInView(0.2);
  const [projectThreeRef, projectThreeInView] = useInView(0.2);
  const [servicesTextRef, servicesTextInView] = useInView(0.5);
  const [servicesRef, servicesInView] = useInView(0.1);
  const [firstProject, setFirstProject] = useState(false);
  const [secondProject, setSecondProject] = useState(false);
  const [thirdProject, setThirdProject] = useState(false);
  const [fourthProject, setFourthProject] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (firstProject || secondProject || thirdProject || fourthProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [firstProject, secondProject, thirdProject, fourthProject]);

  useEffect(() => {
    // This runs after the component mounts (on page load)
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-950 py-10 px-3 lg:px-25 xl:px-35 lg:py-15 2xl:px-45 ">
        <section className="">
          <span
            ref={headerRef}
            className={`flex items-center  justify-center ${
              headerInView
                ? "animate-fade-in animate-duration-300 animate-delay-300"
                : "opacity-0"
            }`}
          >
            <h1 className="text-color-red-950 font-black text-red-900 text-6xl ">
              Welcome{" "}
            </h1>
          </span>
          <div className="flex  flex-col w-full  mt-20 items-center  justify-center">
            <div className="sticky  w-full flex items-center justify-center">
              <div
                ref={imageRef}
                className={`h-60 lg:h-90 bottom-3 w-screen absolute  z-0 bg-[#27181f] ${
                  imageInView
                    ? "animate-slide-in-bottom animate-duration-300 opacity-100"
                    : "opacity-100"
                }`}
              ></div>
              <div
                id="my skill set"
                className="text-white z-50 w-80 h-80 lg:w-125 lg:h-125 relative  text-center"
              >
                <img
                  ref={imageRef}
                  src="/images/Snapchat-418546523.jpg"
                  className={` w-full h-full z-50 rounded-full relative object-cover ${
                    imageInView
                      ? "animate-blink animate-delay-500 animate-duration-700"
                      : "opacity-0"
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div
              id="About me card"
              className="text-white lg:w-[55%] w-full p-10 h-full text-center"
            >
              {" "}
              <span className="flex flex-col space-y-2 ">
                <h1 className="text-4xl text-white font-bold">
                  {" "}
                  Who<span className="text-red-900 font-black"> I'm I</span>
                </h1>
                <p className="text-lg font-bold">
                  Hi, My name is{" "}
                  <span className="text-red-900 font-black">Adam</span>, a very
                  passionate and ambitious{" "}
                  <span className="text-red-900 font-black">
                    Software Developer{" "}
                  </span>{" "}
                  always looking to provide a
                  <span className="bg-linear-to-b from-[#5A5A5A] via-[#E5E5E5] to-[#FFFFFF] bg-clip-text text-transparent">
                    {" "}
                    clean, professional and excellent work{" "}
                  </span>
                  , I have 3 years of experience when it comes to{" "}
                  <span className="text-red-900 font-black">
                    {" "}
                    Web Developement{" "}
                  </span>{" "}
                  industry I learned many skills throughout my journey and I
                  will handle any task given to me and adapt no matter the
                  difficulty, I will help you get a fully <span className="font-black"> Dynamic,Functioning Appealing Website </span> 
                  that will make you <span className="font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] border-b border-white"> reach the results and  vision you are Dreaming Of. </span>  <br />
                  <div className="text-gray-600 font-semibold mt-1">Make Your Dreams Come True!</div>
                </p>
              </span>
            </div>
          </div>
        </section>
        <section>
          <span className="w-full flex items-center animate-pulse animate-duration-500 justify-center">
            <h1
              onClick={(e) =>
                window.scrollTo({
                  top: e.currentTarget.offsetTop, // scrolls 200px down from current position
                  behavior: "smooth",
                })
              }
              className="text-4xl text-red-900 relative underline-anim hover:cursor-pointer inline-block font-black"
            >
              My Tech Stack
            </h1>
          </span>
          <div
            ref={techStackRef}
            className={`rounded-4xl h-fit items-center justify-center   gap-6 w-full bg-[#0A0E16] mt-8 p-8 flex flex-wrap ${
              techStackInView
                ? "animate-fade-in-up animate-duration-500"
                : "opacity-0"
            }
            
          }`}
          >
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/react.svg"
                alt="react"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img className="w-full h-full " src="/images/css.svg" alt="css" />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/html.svg"
                alt="html"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/javascript.svg"
                alt="javascript"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/laravel.svg"
                alt="laravel"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img className="w-full h-full " src="/images/php.svg" alt="php" />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/mysql.svg"
                alt="mysql"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/prisma.svg"
                alt="prisma"
              />
            </span>
            <span className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
              <img
                className="w-full h-full "
                src="/images/postgresql.svg"
                alt="postgresql"
              />
            </span>
          </div>
        </section>

        <section ref={lineRef} className="relative lg:p-10 xl:p-5 2xl:p-0">
          <div
            className={`absolute h-full w-1 bg-red-900 max-lg:hidden rounded-2xl left-0 ${
              lineInView
                ? "scale-y-100 transition duration-3000 origin-top"
                : "scale-y-0"
            }`}
          ></div>
          <div
            ref={myProjectTextRef}
            className={`2xl:ml-[7%] text-4xl font-black text-red-900 mt-25 ${
              myProjectTextInView
                ? "animate-slide-in-left animate-duration-500 opacity-100"
                : "opacity-0"
            }`}
          >
            <h1
              onClick={(e) =>
                window.scrollTo({
                  top: e.currentTarget.offsetTop + 1400, // scrolls 200px down from current position
                  behavior: "smooth",
                })
              }
              className="relative inline-block  underline-anim hover:cursor-pointer"
            >
              My Projects
            </h1>
          </div>
          <div
            ref={projectOneRef}
            className="mt-20 xl:ml-15 max-lg:items-center flex flex-col-reverse lg:space-x-20 2xl:space-x-30 lg:flex-row "
          >
            <span className="2xl:w-[35%] lg:w-[50%] 2xl:ml-[8%]">
              <div
                className={`text-red-900  hover:cursor-pointer text-3xl font-bold hidden lg:flex ${
                  projectOneInView
                    ? "animate-scale animate-duration-500 transition duration-300 opacity-100"
                    : "opacity-0"
                }`}
              >
                <a href="https://garrow.onrender.com"
                target="_blank">
                  {" "}
                  <h1 className="inline-block relative underline-anim">
                    Garrow
                  </h1>
                </a>
              </div>
              <p
                className={`text-white mt-10 text-center lg:text-left text-lg ${
                  projectOneInView
                    ? "animate-fade-in animate-delay-300 animate-duration-300 "
                    : "opacity-0"
                }`}
              >
                {" "}
                A goal-tracking system that helps you organize and link yearly,{" "}
                monthly, weekly, and daily goals. Set progress percentages,
                manage points, and track achievements while keeping everything
                interconnected. Designed to motivate, visualize progress, and
                make goal-setting fun and rewarding.
                <br />
                <span className="ml-4">
                  <span className="text-red-900 font-bold">Tech Used:</span>{" "}
                  <span className="text-blue-400"> React </span>
                  <span className="text-purple-800">(Vite)</span>,{" "}
                  <span className="text-green-600">Node</span>,{" "}
                  <span className="text-blue-600"> Tailwind </span>
                </span>
              </p>
            </span>
            <div className="w-[90%] xl:w-[55%] lg:w-[55%] 2xl:w-[37%] lg:mt-[16%] xl:mt-[16%] 2xl:mt-[8.5%] h-[50%] lg:h-[30%]">
              <img
                className={`w-full h-full ease-in-out rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2  hover:opacity-100 hover:border-gray-800 ${
                  projectOneInView
                    ? "animate-slide-in-left opacity-70 transition duration-300 animate-duration-600 "
                    : "opacity-0"
                }`}
                src="/images/garrow.png"
                alt=""
              />
              <a href="https://garrow.onrender.com"
              target="_blank">
                <h1
                  className={`hover:underline text-3xl text-red-900 lg:text-white font-black text-center mt-3 hover:cursor-pointer ${
                    projectOneInView
                      ? "animate-fade-in animate-delay-800"
                      : "opacity-0"
                  }`}
                >
                  Garrow
                </h1>
              </a>
            </div>
          </div>{" "}
          <div
            ref={projectTwoRef}
            className="mt-20 xl:ml-15 max-lg:items-center flex flex-col-reverse lg:space-x-20 2xl:space-x-30 lg:flex-row "
          >
            <span className="2xl:w-[35%] lg:w-[50%] 2xl:ml-[8%]">
              <div
                className={`text-red-900  hover:cursor-pointer text-3xl font-bold hidden lg:flex ${
                  projectTwoInView
                    ? "animate-scale animate-duration-500 transition duration-300 opacity-100"
                    : "opacity-0"
                }`}
              >
                <h1 className="inline-block relative underline-anim">
                  Restauro
                </h1>
              </div>
              <p
                className={`text-white mt-10 text-center lg:text-left text-lg ${
                  projectTwoInView
                    ? "animate-fade-in animate-delay-300 animate-duration-300 "
                    : "opacity-0"
                }`}
              >
                {" "}
                A restaurant website that showcases the menu, daily specials,
                and signature dishes. Visitors can explore the food, learn about
                the restaurant’s story and ambiance, and easily make
                reservations online. Designed to provide a seamless and engaging
                browsing experience for both new and returning customers.
                <br />
                <span className="ml-4">
                  <span className="text-red-900 font-bold">Tech Used:</span>{" "}
                  <span className="text-orange-500">HTML</span>,{" "}
                  <span className="text-blue-500">CSS</span>,{" "}
                  <span className="text-yellow-500">JS</span>{" "}
                </span>
              </p>
            </span>
            <div className="w-[90%] xl:w-[55%] lg:w-[55%] 2xl:w-[37%] lg:mt-[16%] xl:mt-[16%] 2xl:mt-[8.5%] h-[50%] lg:h-[30%]">
              <img
                className={`w-full h-full ease-in-out rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2  hover:opacity-100 hover:border-gray-800 ${
                  projectTwoInView
                    ? "animate-slide-in-left opacity-70 transition duration-300 animate-duration-600 "
                    : "opacity-0"
                }`}
                src="/images/restaurant.png"
                alt=""
              />
              <h1
                className={`hover:underline text-3xl text-red-900 lg:text-white font-black text-center mt-3 hover:cursor-pointer ${
                  projectTwoInView
                    ? "animate-fade-in animate-delay-800"
                    : "opacity-0"
                }`}
              >
                Restauro
              </h1>
            </div>
          </div>{" "}
          <div
            ref={projectThreeRef}
            className="mt-20 xl:ml-15 max-lg:items-center flex flex-col-reverse lg:space-x-20 2xl:space-x-30 lg:flex-row "
          >
            <span className="2xl:w-[35%] lg:w-[50%] 2xl:ml-[8%]">
              <div
                className={`text-red-900  hover:cursor-pointer text-3xl font-bold hidden lg:flex ${
                  projectThreeInView
                    ? "animate-scale animate-duration-500 transition duration-300 opacity-100"
                    : "opacity-0"
                }`}
              >
                <h1 className="inline-block relative underline-anim">Greocy</h1>
              </div>
              <p
                className={`text-white mt-10 text-center lg:text-left text-lg ${
                  projectThreeInView
                    ? "animate-fade-in animate-delay-300 animate-duration-300 "
                    : "opacity-0"
                }`}
              >
                {" "}
                Greocy is an online grocery shopping platform that lets you
                browse, order, and have your groceries delivered straight to
                your door. From fresh produce and pantry staples to household
                essentials, everything you need is available in one convenient
                place. With a user-friendly interface, easy search and filter
                options, and fast delivery, Greocy makes grocery shopping
                simple, efficient, and stress-free for busy households.
                <br />
                <span className="ml-4">
                  <span className="text-red-900 font-bold">Tech Used:</span>{" "}
                  <span className="text-indigo-600">PHP</span>,{" "}
                  <span className="text-red-500">Laravel</span>,{" "}
                  <span className="text-blue-600">Tailwind</span>
                </span>
              </p>
            </span>
            <div className="w-[90%] xl:w-[55%] lg:w-[55%] 2xl:w-[37%] lg:mt-[16%] xl:mt-[16%] 2xl:mt-[8.5%] h-[50%] lg:h-[30%]">
              <img
                className={`w-full h-full ease-in-out rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2  hover:opacity-100 hover:border-gray-800 ${
                  projectThreeInView
                    ? "animate-slide-in-left opacity-70 transition duration-300 animate-duration-600 "
                    : "opacity-0"
                }`}
                src="/images/greocy.jpeg"
                alt=""
              />
              <h1
                className={`hover:underline text-3xl text-red-900 lg:text-white font-black text-center mt-3 hover:cursor-pointer ${
                  projectThreeInView
                    ? "animate-fade-in animate-delay-800"
                    : "opacity-0"
                }`}
              >
                Greocy
              </h1>
            </div>
          </div>{" "}
        </section>

        <section>
          <div
            ref={servicesTextRef}
            className={`text-center  text-4xl font-black hover:cursor-pointer text-red-900 mt-25 ${
              servicesTextInView
                ? "animate-slide-in-left  animate-duration-400 transition duration-300 opacity-100"
                : "opacity-0"
            }`}
          >
            <h1
              onClick={(e) =>
                window.scrollTo({
                  top: e.currentTarget.offsetTop + 3200, // scrolls 200px down from current position
                  behavior: "smooth",
                })
              }
              className="inline-block relative underline-anim"
            >
              Services
            </h1>
          </div>

          <div
            ref={servicesRef}
            className="flex mt-[5%] flex-wrap gap-8 lg:gap-15 items-center  justify-center w-full "
          >
            <div
              className={`bg-[#0A0E16] overflow-auto rounded-3xl border-4 border-[#11141B] group hover:cursor-pointer  hover:border-[#2D3038] p-10 h-150  w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "lg:opacity-75 transition duration-800 lg:hover:duration-300 lg:hover:delay-0  lg:hover:opacity-100"
                  : "opacity-0"
              } ${firstProject ? "z-9999" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center ">
                <img
                  className="w-full h-full"
                  src="/images/webpage.svg"
                  alt=""
                />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">
                  Front End App
                </h1>
                <p className="font-bold text-white">
                  {" "}
                  I craft beautiful, high-performance front-end interfaces with
                  a strong focus on animations, responsiveness, and
                  pixel-perfect design. Your website or app will feel clean,
                  modern, fast, and intuitive on every device.
                </p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    setFirstProject(true);
                  }}
                  className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black"
                >
                  Details
                </button>
                <div
                  className={` fixed top-0 will-change-transform left-0 opacity-100 z-9999 w-full h-screen bg-black/60 items-center justify-center animate-zoom-in animate-duration-600 ${
                    firstProject ? "flex z-50" : "hidden"
                  }`}
                >
                  <div
                    className={`h-[80%] w-[80%] opacity-100 z-899 will-change-transform overflow-auto lg:w-[60%] lg:h-[70%] xl:w-[40%] rounded-2xl xl:h-[90%] lg:p-25   bg-[#0A0E16] flex flex-col space-y-10 p-6 animate-expand-vertically animate-duration-600 animate-delay-500 border border-gray-800 ${
                      firstProject ? "z-50" : "z-30"
                    }`}
                  >
                    <h1 className="text-4xl font-black text-center text-red-900">
                      Front-End Application
                    </h1>
                    <span className="text-white text-lg font-black space-y-6">
                      <h3>● 🖥️ Fully responsive layouts</h3>
                      <h3>● 🎨 Tailwind-powered styling</h3>
                      <h3>● ✨ Sleek animations with Framer Motion or CSS</h3>
                      <h3>● 🧩 Component-based, reusable UI</h3>
                      <h3>● ⚡ Fast loading times + optimized assets</h3>
                      <h3>
                        ● 🔗 Seamless integration with backend APIs (if
                        provided)
                      </h3>
                      <h1 className="text-xl font-black text-center mt-10">
                        {" "}
                        Perfect for: landing pages, portfolios, product UIs,
                        marketing sites, modern dashboards.
                      </h1>
                    </span>
                    <div className="flex items-center justify-center space-x-4">
                      {/* <button className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer">
                        Contact
                      </button> */}
                      <button
                        onClick={() => {
                          setFirstProject(false);
                        }}
                        className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#0A0E16] overflow-auto   rounded-3xl border-4 border-[#11141B] z-0 group hover:cursor-pointer hover:border-[#2D3038] p-10 h-150  w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "transition lg:opacity-75 duration-800  lg:hover:duration-300 lg:hover:delay-0 z-0 lg:hover:opacity-100 "
                  : "opacity-0"
              } ${secondProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center ">
                <img
                  className="w-full h-full"
                  src="/images/hammerandwrench.svg"
                  alt=""
                />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block  relative underline-anim font-black text-3xl text-red-900">
                  Full Stack App
                </h1>
                <p className="font-bold text-white">
                  I build full end-to-end web applications—from the user
                  interface to the server, database, and APIs. Whether it’s a
                  new product or an upgrade, I deliver secure, scalable, and
                  optimized solutions.
                </p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    setSecondProject(true);
                    console.log(secondProject);
                  }}
                  className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black"
                >
                  Details
                </button>
                <div
                  className={`fixed top-0 left-0 w-full h-full bg-black/60 items-center justify-center animate-zoom-in animate-duration-600 ${
                    secondProject ? "flex z-50" : "hidden"
                  }`}
                >
                  <div
                    className={`h-[80%] w-[80%] opacity-100!  overflow-auto lg:w-[60%] lg:h-[70%] xl:w-[40%] rounded-2xl xl:h-[90%] lg:p-25  z-50 bg-[#0A0E16] flex flex-col space-y-10 p-6 animate-expand-vertically animate-duration-600 animate-delay-500`}
                  >
                    <h1 className="text-4xl font-black text-center text-red-900">
                      Full Stack Application
                    </h1>
                    <span className="text-white text-lg font-black space-y-6">
                      <h3>● 📱 Modern, responsive UI with smooth UX</h3>
                      <h3>
                        ● 🔒 Secure backend built with industry-standard best
                        practices
                      </h3>
                      <h3>● 🛠️ API design & integration</h3>
                      <h3>● 🗄️ Database setup & optimization</h3>
                      <h3>
                        ● ☁️ Deployment, hosting, and environment configuration
                      </h3>
                      <h3>
                        ● 🧹 Clean and maintainable codebase ready for future
                        scaling
                      </h3>
                      <h1 className="text-xl font-black text-center mt-10">
                        Perfect for: startups, SaaS products, dashboards, admin
                        panels, business apps, and custom tools.
                      </h1>
                    </span>
                    <div className="flex items-center justify-center space-x-4">
                      {/* <button className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer">
                        Contact
                      </button> */}
                      <button
                        onClick={() => {
                          setSecondProject(false);
                        }}
                        className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#0A0E16] overflow-auto   a rounded-3xl border-4 border-[#11141B] group hover:cursor-pointer   hover:border-[#2D3038] transition duration-500 ease-in-out p-10 h-150  w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "transition lg:opacity-75 lg:hover:opacity-100 lg:hover:duration-300 lg:hover:delay-0 duration-800 delay-400"
                  : "opacity-0"
              } ${thirdProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center ">
                <img
                  className="w-full h-full"
                  src="/images/settings.svg"
                  alt=""
                />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">
                  Back End App
                </h1>
                <p className="font-bold text-white">
                  I build secure, scalable, and efficient back-end systems that
                  handle your business logic, data processing, and integrations
                  smoothly and reliably. I focus on clean architecture,
                  performance, and long-term maintainability.
                </p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    setThirdProject(true);
                  }}
                  className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black"
                >
                  Details
                </button>
                <div
                  className={`fixed top-0 left-0 w-full h-full bg-black/60 items-center justify-center animate-zoom-in animate-duration-600 ${
                    thirdProject ? "flex" : "hidden"
                  }
     `}
                >
                  <div
                    className={`h-[80%] w-[80%] opacity-100!  overflow-auto lg:w-[60%] lg:h-[70%] xl:w-[40%] rounded-2xl xl:h-[90%] lg:p-25  z-50 bg-[#0A0E16] flex flex-col space-y-10 p-6 animate-expand-vertically animate-duration-600 animate-delay-500`}
                  >
                    <h1 className="text-4xl font-black text-center text-red-900">
                      Back-End Application
                    </h1>
                    <span className="text-white text-lg font-black space-y-6">
                      <h3>● 🔁 REST or GraphQL APIs</h3>
                      <h3>
                        ● 🛡️ Authentication & security (JWT, OAuth, role
                        systems)
                      </h3>
                      <h3>● 🗂️ Database design (SQL or NoSQL)</h3>
                      <h3>● 🤖 Server-side logic & automation</h3>
                      <h3>● 🌐 Third-party API integrations</h3>
                      <h3>● 🚀 Deployment & server setup</h3>
                      <h1 className="text-xl font-black text-center mt-10">
                        Perfect for: complex logic systems, API-only projects,
                        databases, SaaS backends, and service infrastructures.
                      </h1>
                    </span>
                    <div className="flex items-center justify-center space-x-4">
                      {/* <button className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer">
                        Contact
                      </button> */}
                      <button
                        onClick={() => {
                          setThirdProject(false);
                        }}
                        className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#0A0E16] overflow-auto   rounded-3xl group border-4 border-[#11141B] group hover:cursor-pointer hover:border-[#2D3038] transition p-10 h-150  w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "lg:opacity-75 transition duration-800 lg:hover:opacity-100 hover:duration-300 hover:delay-0 delay-600"
                  : "opacity-0"
              }
              ${fourthProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center ">
                <img
                  className="w-full h-full"
                  src="/images/sparkles.svg"
                  alt=""
                />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">
                  Custom Request
                </h1>
                <p className="font-bold text-white">
                  Have something unique in mind? I offer fully custom solutions
                  tailored to your exact needs — whether it’s a small component,
                  a complex feature, a bug fix, or a full product idea.
                </p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    setFourthProject(true);
                  }}
                  className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black"
                >
                  Details
                </button>
                <div
                  className={` fixed top-0 left-0 w-full h-full bg-black/60 items-center justify-center animate-zoom-in animate-duration-600 ${
                    fourthProject ? "flex" : "hidden"
                  }`}
                >
                  <div
                    className={`h-[80%] w-[80%] opacity-100!  overflow-auto lg:w-[60%] lg:h-[70%] xl:w-[40%] rounded-2xl xl:h-[90%] lg:p-25  z-50 bg-[#0A0E16] flex flex-col space-y-10 p-6 animate-expand-vertically animate-duration-600 animate-delay-500`}
                  >
                    <h1 className="text-4xl font-black text-center text-red-900">
                      Custom Request
                    </h1>
                    <span className="text-white text-lg font-black space-y-6">
                      <h3>● 💡 Any feature or component you need</h3>
                      <h3>
                        ● 🎛️ Custom animations, UI elements, dashboards, tools,
                        or workflows
                      </h3>
                      <h3>
                        ● 🔌 Integrations with APIs, services, or databases
                      </h3>
                      <h3>
                        ● 🛠️ Fixes, refactors, optimizations, or code audits
                      </h3>
                      <h3>● 🔄 Flexible project scope based on your goals</h3>
                      <h1 className="text-xl font-black text-center mt-10">
                        Perfect for: one-off tasks, experimental ideas, unique
                        requirements, or anything that doesn’t fit standard
                        packages.
                      </h1>
                    </span>
                    <div className="flex items-center justify-center space-x-4">
                      {/* <button className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer">
                        Contact
                      </button> */}
                      <button
                        onClick={() => {
                          setFourthProject(false);
                        }}
                        className="w-40 h-12 xl:w-50 text-xl font-black bg-red-900 hover:bg-red-950 focus:bg-red-950 text-white rounded-full hover:cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
