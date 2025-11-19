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

function Navbar() {
  const [loaded, setLoaded] = useState(false);
  const [headerRef, headerInView] = useInView(0.3);

  useEffect(() => {
    // This runs after the component mounts (on page load)
    setLoaded(true);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="w-full bg-gray-950 items-center p-10 justify-center flex "
      >
        <div className="flex flex-col w-full">
          <div className="w-full flex items-center justify-center">
            <div
              className={`flex flex-col hover:cursor-pointer text-center ${
                headerInView
                  ? "animate-fade-in animate-duration-300"
                  : "opacity-0"
              }`}
            >
              <h1 className="text-4xl text-white font-black">Adam Yakoub</h1>
              <h1 className="text-lg font-black text-red-900">
                F.S Web Developer
              </h1>
            </div>
            <div
              className={`w-full h-2 rounded-2xl bg-red-900 transform origin-left transition-all duration-2000 ${
                headerInView
                  ? "scale-x-100 scale-y-100"
                  : "scale-x-0 scale-y-80"
              }`}
            >
              {/* <button className="text-white ">Contact</button> */}
            </div>
          </div>
          {/* <div className="w-full bg-red-900 h-1 mt-5"> </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
