# Portfolio
My portoflio website


import React from "react";

function Body() {
  return (
    <div className="min-h-screen bg-gray-950 py-10 px-3 lg:py-15 lg:px-50 ">
      <section className="">
        <span className="flex items-center justify-center">
          <h1 className="text-color-red-950 font-black text-red-900 text-6xl ">
            Welcome{" "}
          </h1>
        </span>
        <div className="flex flex-col w-full  mt-20 items-center  justify-center">
          <div
            id="my skill set"
            className="text-white z-50 w-80 h-80 lg:w-125 lg:h-125  text-center"
          >
            <div class="h-60 lg:h-90 w-screen absolute bottom-42 lg:bottom-20 left-0 z-0 bg-[#27181f]"></div>
            <img
              src="/images/Snapchat-418546523.jpg"
              className="w-full h-full z-50 rounded-full relative object-cover"
              alt=""
            />
          </div>
          <div
            id="About me card"
            className="text-white lg:w-[50%] w-full p-10 h-full text-center"
          >
            {" "}
            <span className="flex flex-col space-y-2 ">
              <h1 className="text-4xl text-white font-bold">
                {" "}
                Who<span className="text-red-900 font-black"> I'm I</span>
              </h1>
              <p className="text-lg">
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
                industry I learned many skills throughout my journey and I will
                handle any task given to me and adapt no matter the difficulty.
              </p>
            </span>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-4xl text-red-900 text-center font-black">
          My Tech Stack
        </h1>
        <div className="rounded-4xl h-fit  items-center justify-center gap-6 w-full bg-[#0A0E16] mt-8 p-8 flex flex-wrap">
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/react.svg"
              alt="react"
            />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img className="w-full h-full " src="/images/css.svg" alt="css" />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img className="w-full h-full " src="/images/html.svg" alt="html" />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/javascript.svg"
              alt="javascript"
            />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/laravel.svg"
              alt="laravel"
            />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img className="w-full h-full " src="/images/php.svg" alt="php" />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/mysql.svg"
              alt="mysql"
            />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/prisma.svg"
              alt="prisma"
            />
          </span>
          <span className="w-[28%] h-[26%] lg:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0">
            <img
              className="w-full h-full "
              src="/images/postgresql.svg"
              alt="postgresql"
            />
          </span>
        </div>
      </section>

      <section>
        <h1 className="lg:ml-60 text-4xl font-black text-red-900 mt-25">
          My Projects
        </h1>
        <div className="mt-20 lg:ml-30 max-md:items-center flex flex-col-reverse lg:space-x-30 lg:flex-row ">
          <span className="lg:w-[35%] lg:ml-60">
            <h1 className="text-red-900 hover:underline hover:cursor-pointer text-3xl font-bold max-md:hidden">
              Garrow
            </h1>
            <p className=" text-white mt-10 text-center lg:text-left text-lg">
              {" "}
              A goal-tracking system that helps you organize and link yearly,{" "}
              monthly, weekly, and daily goals. Set progress percentages, manage
              points, and track achievements while keeping everything
              interconnected. Designed to motivate, visualize progress, and make
              goal-setting fun and rewarding.
              <br />
              <span className="ml-4">
                [<span className="text-red-900 font-bold">Tech Used:</span>{" "}
                <span className="text-blue-400"> React </span>
                <span className="text-purple-800">(Vite)</span>,{" "}
                <span className="text-green-600">Node</span>,{" "}
                <span className="text-blue-600"> Tailwind </span>]
              </span>
            </p>
          </span>
          <div className="w-[90%] lg:w-[30%] lg:mt-30 h-[50%] lg:h-[30%]">
            <img
              className="w-full h-full rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2 opacity-70 hover:opacity-100 hover:border-gray-800"
              src="/images/garrow.png"
              alt=""
            />
            <h1 className="hover:underline text-3xl text-red-900 lg:text-white font-black text-center mt-3 hover:cursor-pointer">
              Garrow
            </h1>
          </div>
        </div>{" "}
        <div className="mt-20 lg:ml-30 flex flex-col lg:space-x-30 lg:flex-row ">
          <span className="lg:w-[35%] ml-60">
            <h1 className="text-red-900 hover:underline hover:cursor-pointer text-3xl font-bold">
              Greocy
            </h1>
            <p className=" text-white mt-10 text-pretty text-lg">
              {" "}
              Greocy is an online grocery shopping platform that lets you
              browse, order, and have your groceries delivered straight to your
              door. From fresh produce and pantry staples to household
              essentials, everything you need is available in one convenient
              place. With a user-friendly interface, easy search and filter
              options, and fast delivery, Greocy makes grocery shopping simple,
              efficient, and stress-free for busy households.
              <br />
              <span className="ml-4">
                [<span className="text-red-900 font-bold">Tech Used:</span>{" "}
                <span className="text-blue-400"> React </span>
                <span className="text-purple-800">(Vite)</span>,{" "}
                <span className="text-green-600">Node</span>,{" "}
                <span className="text-blue-600"> Tailwind </span>]
              </span>
            </p>
          </span>
          <div className="w-[30%] mt-30 h-[35%]">
            <img
              className="w-full h-full rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2 opacity-70 hover:opacity-100 hover:border-gray-800"
              src="/images/greocy.jpeg"
              alt=""
            />
            <h1 className="hover:underline text-3xl text-white font-black text-center mt-3 hover:cursor-pointer">
              Greocy
            </h1>
          </div>
        </div>{" "}
        <div className="mt-20 lg:ml-30 flex flex-col lg:space-x-30 lg:flex-row ">
          <span className="lg:w-[35%] ml-60">
            <h1 className="text-red-900 hover:underline hover:cursor-pointer text-3xl font-bold">
              Restauro
            </h1>
            <p className=" text-white mt-10 text-pretty text-lg">
              {" "}
              A restaurant website that showcases the menu, daily specials, and
              signature dishes. Visitors can explore the food, learn about the
              restaurant’s story and ambiance, and easily make reservations
              online. Designed to provide a seamless and engaging browsing
              experience for both new and returning customers.
              <br />
              <span className="ml-4">
                [<span className="text-red-900 font-bold">Tech Used:</span>{" "}
                <span className="text-blue-400"> React </span>
                <span className="text-purple-800">(Vite)</span>,{" "}
                <span className="text-green-600">Node</span>,{" "}
                <span className="text-blue-600"> Tailwind </span>]
              </span>
            </p>
          </span>
          <div className="w-[30%] mt-30 h-[30%]">
            <img
              className="w-full h-full rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:transition hover:duration-300 hover:border-2 opacity-70 hover:opacity-100 hover:border-gray-800"
              src="/images/restaurant.png"
              alt=""
            />
            <h1 className="hover:underline text-3xl text-white font-black text-center mt-3 hover:cursor-pointer">
              Restauro
            </h1>
          </div>
        </div>
      </section>

      <section>
        <h1 className=" text-center text-4xl font-black text-red-900 mt-25">
          What to expect
        </h1>

        <div>
          <div>Amazing front end design the way you like it</div>
          <div>Can manage a back for you if you want</div>
          <div>a full stack app</div>
        </div>
      </section>
    </div>
  );
}

export default Body;
