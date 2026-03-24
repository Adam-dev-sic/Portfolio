import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isInView];
}

// ─── Project data ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Garrow",
    href: "https://garrow.onrender.com",
    image: "/images/garrow.png",
    description:
      "A goal-tracking system that helps you organize and link yearly, monthly, weekly, and daily goals. Set progress percentages, manage points, and track achievements while keeping everything interconnected. Designed to motivate, visualize progress, and make goal-setting fun and rewarding.",
    tech: [
      { label: "React", color: "text-cyan-400" },
      { label: "(Vite)", color: "text-purple-800" },
      { label: "Node", color: "text-green-600" },
      { label: "Tailwind", color: "text-blue-600" },
    ],
  },
  {
    title: "Marketing Agency",
    href: "https://digital-agency-webpage-ten.vercel.app/",
    image: "/images/marketix.png",
    description:
      "Marketix is a modern web project designed to showcase a digital agency's services, branding, and client-focused approach. The platform highlights key offerings such as social media management, advertising, and content creation through a clean and engaging layout.",
    tech: [
      { label: "HTML", color: "text-orange-500" },
      { label: "CSS", color: "text-blue-500" },
      { label: "React", color: "text-cyan-400" },
    ],
  },
  {
    title: "Netflix Copy",
    href: "https://netflix-by-me-ivory.vercel.app/",
    image: "/images/netflix.png",
    description:
      "A Netflix-inspired UI built to improve my ability to replicate real-world designs with precision. By studying the original interface, I recreated core features like sliders, hover effects, and custom navigation, focusing on detail and user experience.",
    tech: [
      { label: "Next.js", color: "text-slate-400" },
      { label: "React", color: "text-cyan-400" },
      { label: "Tailwind", color: "text-teal-400" },
    ],
  },
  {
    title: "Fashionist",
    href: null,
    image: "/images/fashionist.png",
    description:
      "A full-featured e-commerce platform selling clothing, built end-to-end with payment integration, an admin dashboard, product management, order tracking, and user authentication. Focused on a clean shopping experience with real-world functionality.",
    tech: [
      { label: "React", color: "text-cyan-400" },
      { label: "Node.js", color: "text-green-600" },
      { label: "Stripe", color: "text-indigo-400" },
      { label: "Tailwind", color: "text-teal-400" },
      { label: "Supabase", color: "text-emerald-400" },
    ],
  },
];

const PAGES = [PROJECTS.slice(0, 3), PROJECTS.slice(3, 6)];

// ─── Single project row ───────────────────────────────────────────────────────
function ProjectRow({ project, index, visible }) {
  return (
    <div
      className="mt-16 xl:ml-15 max-lg:items-center flex flex-col-reverse lg:space-x-20 2xl:space-x-30 lg:flex-row"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-40px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      {/* Text side */}
      <span className="2xl:w-[35%] lg:w-[50%] 2xl:ml-[8%]">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            <h1 className="text-red-900 hover:cursor-pointer text-3xl font-bold hidden lg:inline-block relative underline-anim">
              {project.title}
            </h1>
          </a>
        ) : (
          <h1 className="text-red-900 text-3xl font-bold hidden lg:inline-block relative underline-anim">
            {project.title}
          </h1>
        )}
        <p className="text-white mt-10 text-center lg:text-left text-lg">
          {project.description}
          <br />
          <span className="ml-4">
            <span className="text-red-900 font-bold">Tech Used: </span>
            {project.tech.map((t, i) => (
              <span key={i}>
                <span className={t.color}>{t.label}</span>
                {i < project.tech.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </span>
            ))}
          </span>
        </p>
      </span>

      {/* Image side */}
      <div className="w-[90%] xl:w-[55%] lg:w-[55%] 2xl:w-[37%] lg:mt-[16%] xl:mt-[16%] 2xl:mt-[8.5%] h-[50%] lg:h-[30%]">
        <img
          className="w-full h-full ease-in-out rounded-4xl border-2 border-gray-600 hover:cursor-pointer hover:border-gray-800 opacity-70 hover:opacity-100 transition duration-300"
          src={project.image}
          alt={project.title}
          onError={(e) => {
            e.target.style.background = "#1a1a2e";
            e.target.style.minHeight = "200px";
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='340' viewBox='0 0 600 340'%3E%3Crect fill='%231a1a2e' width='600' height='340'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E" +
              encodeURIComponent(project.title) +
              "%3C/text%3E%3C/svg%3E";
          }}
        />
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            <h1 className="hover:underline text-3xl text-red-900 lg:text-white font-black text-center mt-3 hover:cursor-pointer">
              {project.title}
            </h1>
          </a>
        ) : (
          <h1 className="text-3xl text-red-900 lg:text-white font-black text-center mt-3">
            {project.title}
          </h1>
        )}
      </div>
    </div>
  );
}

// ─── Service Modal ────────────────────────────────────────────────────────────
function ServiceModal({ isOpen, onClose, title, icon, tagline, features, perfect, emailSubject, emailBody, accentFrom, accentTo }) {
  if (!isOpen) return null;

  const mailtoLink = `mailto:adamforbusiness01@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ animation: "backdropIn 0.35s ease forwards" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="relative z-10 w-[92%] max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl flex flex-col"
        style={{
          background: "linear-gradient(160deg, #0d1117 0%, #0A0E16 60%, #110a0e 100%)",
          animation: "modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        {/* Glow top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${accentFrom}, ${accentTo}, transparent)` }}
        />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Icon bubble */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(127,29,29,0.25)", border: "1px solid rgba(127,29,29,0.4)" }}
              >
                {icon}
              </div>
              <div>
                <h2 className="text-2xl font-black text-white leading-tight">{title}</h2>
                <p className="text-sm text-gray-400 mt-0.5 font-medium">{tagline}</p>
              </div>
            </div>
            {/* Close X */}
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-white transition-colors duration-200 hover:cursor-pointer mt-1 flex-shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="px-8 py-6 flex flex-col gap-3 flex-1">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-3 group"
              style={{ animation: `featureIn 0.35s ease ${0.1 + i * 0.06}s both` }}
            >
              {/* Icon pill */}
              <span className="mt-0.5 text-base flex-shrink-0">{f.icon}</span>
              <div>
                <span className="text-white font-bold text-sm">{f.title}</span>
                {f.desc && <p className="text-gray-400 text-sm mt-0.5 font-medium">{f.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* "Perfect for" strip */}
        <div className="mx-8 mb-6 rounded-xl p-4" style={{ background: "rgba(127,29,29,0.1)", border: "1px solid rgba(127,29,29,0.2)" }}>
          <p className="text-xs font-black uppercase tracking-widest text-red-800 mb-1">Perfect for</p>
          <p className="text-gray-300 text-sm font-medium">{perfect}</p>
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm font-bold transition-all duration-200 hover:cursor-pointer"
          >
            Close
          </button>
          <a
            href={mailtoLink}
            className="flex-1 h-11 rounded-xl bg-red-900 hover:bg-red-800 text-white text-sm font-black flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ boxShadow: "0 0 20px rgba(127,29,29,0.4)" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Order Now
          </a>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes featureIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Main Body component ──────────────────────────────────────────────────────
function Body() {
  const [loaded, setLoaded] = useState(false);
  const [headerRef, headerInView] = useInView(0.3);
  const [imageRef, imageInView] = useInView(0.3);
  const [techStackRef, techStackInView] = useInView(0.3);
  const [lineRef, lineInView] = useInView(0.3);
  const [myProjectTextRef, myProjectTextInView] = useInView(0.3);
  const [servicesTextRef, servicesTextInView] = useInView(0.5);
  const [servicesRef, servicesInView] = useInView(0.1);

  const [firstProject, setFirstProject] = useState(false);
  const [secondProject, setSecondProject] = useState(false);
  const [thirdProject, setThirdProject] = useState(false);
  const [fourthProject, setFourthProject] = useState(false);

  // ── Pagination state ──────────────────────────────────────────────────────
  const [activePage, setActivePage] = useState(0);
  const [visible, setVisible] = useState(true);
  const [projectsSectionRef, projectsSectionInView] = useInView(0.1);

  function switchPage(pageIndex) {
    if (pageIndex === activePage) return;
    setVisible(false);
    setTimeout(() => {
      setActivePage(pageIndex);
      setVisible(true);
    }, 380);
  }

  useEffect(() => {
    if (firstProject || secondProject || thirdProject || fourthProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [firstProject, secondProject, thirdProject, fourthProject]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-950 py-10 px-3 lg:px-25 xl:px-35 lg:py-15 2xl:px-45">

        {/* ── HERO / ABOUT ─────────────────────────────────────────────── */}
        <section>
          <span
            ref={headerRef}
            className={`flex items-center justify-center ${
              headerInView
                ? "animate-fade-in animate-duration-300 animate-delay-300"
                : "opacity-0"
            }`}
          >
            <h1 className="text-color-red-950 font-black text-red-900 text-6xl">
              Welcome{" "}
            </h1>
          </span>
          <div className="flex flex-col w-full mt-20 items-center justify-center">
            <div className="sticky w-full flex items-center justify-center">
              <div
                ref={imageRef}
                className={`h-60 lg:h-90 bottom-3 w-screen absolute z-0 bg-[#27181f] ${
                  imageInView
                    ? "animate-slide-in-bottom animate-duration-300 opacity-100"
                    : "opacity-100"
                }`}
              ></div>
              <div
                id="my skill set"
                className="text-white z-50 w-80 h-80 lg:w-125 lg:h-125 relative text-center"
              >
                <img
                  ref={imageRef}
                  src="/images/Snapchat-418546523.jpg"
                  className={`w-full h-full z-50 rounded-full relative object-cover ${
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
              <span className="flex flex-col space-y-2">
                <h1 className="text-4xl text-white font-bold">
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
                  difficulty, I will help you get a fully{" "}
                  <span className="font-black">
                    {" "}
                    Dynamic,Functioning Appealing Website{" "}
                  </span>
                  that will make you{" "}
                  <span className="font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] border-b border-white">
                    {" "}
                    reach the results and vision you are Dreaming Of.{" "}
                  </span>{" "}
                  <br />
                  <div className="text-gray-600 font-semibold mt-1">
                    Make Your Dreams Come True!
                  </div>
                </p>
              </span>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────────────── */}
        <section>
          <span className="w-full flex items-center animate-pulse animate-duration-500 justify-center">
            <h1
              onClick={(e) =>
                window.scrollTo({
                  top: e.currentTarget.offsetTop,
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
            className={`rounded-4xl h-fit items-center justify-center gap-6 w-full bg-[#0A0E16] mt-8 p-8 flex flex-wrap ${
              techStackInView
                ? "animate-fade-in-up animate-duration-500"
                : "opacity-0"
            }`}
          >
            {[
              { src: "/images/react.svg", alt: "react" },
              { src: "/images/css.svg", alt: "css" },
              { src: "/images/html.svg", alt: "html" },
              { src: "/images/javascript.svg", alt: "javascript" },
              { src: "/images/laravel.svg", alt: "laravel" },
              { src: "/images/php.svg", alt: "php" },
              { src: "/images/mysql.svg", alt: "mysql" },
              { src: "/images/prisma.svg", alt: "prisma" },
              { src: "/images/postgresql.svg", alt: "postgresql" },
            ].map((tech) => (
              <span
                key={tech.alt}
                className="w-[26%] lg:hover:animate-tilt h-[26%] lg:w-[8%] 2xl:w-[9%] lg:h-25 lg:grayscale-100 lg:transition lg:duration-300 lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0"
              >
                <img className="w-full h-full" src={tech.src} alt={tech.alt} />
              </span>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────────────── */}
        <section ref={lineRef} className="relative lg:p-10 xl:p-5 2xl:p-0">
          <div
            className={`absolute h-full w-1 bg-red-900 max-lg:hidden rounded-2xl left-0 ${
              lineInView
                ? "scale-y-100 transition duration-3000 origin-top"
                : "scale-y-0"
            }`}
          ></div>

          {/* Section heading */}
          <div
            ref={myProjectTextRef}
            className={`2xl:ml-[7%] text-4xl font-black text-red-900 mt-25 ${
              myProjectTextInView
                ? "animate-slide-in-left animate-duration-500 opacity-100"
                : "opacity-0"
            }`}
          >
            <h1 className="relative inline-block underline-anim hover:cursor-pointer">
              My Projects
            </h1>
          </div>

          {/* ── Pagination tabs ────────────────────────────────────────── */}
          <div
            ref={projectsSectionRef}
            className={`flex items-center gap-3 mt-10 2xl:ml-[7%] ${
              projectsSectionInView
                ? "animate-fade-in animate-duration-500"
                : "opacity-0"
            }`}
          >
            {PAGES.map((page, i) => (
              <button
                key={i}
                onClick={() => switchPage(i)}
                className="relative group flex items-center gap-2 hover:cursor-pointer"
              >
                {/* Dot */}
                <span
                  className={`inline-block rounded-full transition-all duration-400 ${
                    activePage === i
                      ? "w-8 h-3 bg-red-900"
                      : "w-3 h-3 bg-gray-700 group-hover:bg-red-950"
                  }`}
                />
                {/* Label */}
                <span
                  className={`text-sm font-black transition-all duration-300 ${
                    activePage === i
                      ? "text-red-900 opacity-100"
                      : "text-gray-600 group-hover:text-gray-400 opacity-70"
                  }`}
                >
                  {i === 0 ? "01 — 03" : `0${i * 3 + 1} — 0${Math.min(i * 3 + 3, PROJECTS.length)}`}
                </span>
              </button>
            ))}

            {/* Divider line */}
            <div className="flex-1 h-px bg-gray-800 ml-2 max-w-xs" />

            {/* Counter */}
            <span className="text-gray-600 text-sm font-black ml-auto">
              <span className="text-red-900">{String(activePage + 1).padStart(2, "0")}</span>
              {" / "}
              {String(PAGES.length).padStart(2, "0")}
            </span>
          </div>

          {/* ── Project list ───────────────────────────────────────────── */}
          <div ref={projectsSectionRef}>
            {PAGES[activePage].map((project, index) => (
              <ProjectRow
                key={`${activePage}-${project.title}`}
                project={project}
                index={index}
                visible={visible}
              />
            ))}
          </div>

          {/* ── Next / Prev buttons ────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-20 2xl:ml-[7%] 2xl:mr-[7%]">
            <button
              onClick={() => switchPage(activePage - 1)}
              disabled={activePage === 0}
              className={`flex items-center gap-2 text-sm font-black transition-all duration-300 hover:cursor-pointer ${
                activePage === 0
                  ? "opacity-20 pointer-events-none"
                  : "text-red-900 hover:scale-105"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Previous
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {PAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => switchPage(i)}
                  className={`rounded-full transition-all duration-400 hover:cursor-pointer ${
                    activePage === i
                      ? "w-6 h-2 bg-red-900"
                      : "w-2 h-2 bg-gray-700 hover:bg-red-950"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => switchPage(activePage + 1)}
              disabled={activePage === PAGES.length - 1}
              className={`flex items-center gap-2 text-sm font-black transition-all duration-300 hover:cursor-pointer ${
                activePage === PAGES.length - 1
                  ? "opacity-20 pointer-events-none"
                  : "text-red-900 hover:scale-105"
              }`}
            >
              Next
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────── */}
        <section>
          <div
            ref={servicesTextRef}
            className={`text-center text-4xl font-black hover:cursor-pointer text-red-900 mt-25 ${
              servicesTextInView
                ? "animate-slide-in-left animate-duration-400 transition duration-300 opacity-100"
                : "opacity-0"
            }`}
          >
            <h1
              onClick={(e) =>
                window.scrollTo({
                  top: e.currentTarget.offsetTop + 3200,
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
            className="flex mt-[5%] flex-wrap gap-8 lg:gap-15 items-center justify-center w-full"
          >
            {/* Front End App */}
            <div
              className={`bg-[#0A0E16] overflow-auto rounded-3xl border-4 border-[#11141B] group hover:cursor-pointer hover:border-[#2D3038] p-10 h-150 w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "lg:opacity-75 transition duration-800 lg:hover:duration-300 lg:hover:delay-0 lg:hover:opacity-100"
                  : "opacity-0"
              } ${firstProject ? "z-9999" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center">
                <img className="w-full h-full" src="/images/webpage.svg" alt="" />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">Front End App</h1>
                <p className="font-bold text-white">I craft beautiful, high-performance front-end interfaces with a strong focus on animations, responsiveness, and pixel-perfect design. Your website or app will feel clean, modern, fast, and intuitive on every device.</p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button onClick={() => setFirstProject(true)} className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black">Details</button>
              </div>
            </div>

            {/* Full Stack App */}
            <div
              className={`bg-[#0A0E16] overflow-auto rounded-3xl border-4 border-[#11141B] z-0 group hover:cursor-pointer hover:border-[#2D3038] p-10 h-150 w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "transition lg:opacity-75 duration-800 lg:hover:duration-300 lg:hover:delay-0 z-0 lg:hover:opacity-100"
                  : "opacity-0"
              } ${secondProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center">
                <img className="w-full h-full" src="/images/hammerandwrench.svg" alt="" />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">Full Stack App</h1>
                <p className="font-bold text-white">I build full end-to-end web applications—from the user interface to the server, database, and APIs. Whether it's a new product or an upgrade, I deliver secure, scalable, and optimized solutions.</p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button onClick={() => setSecondProject(true)} className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black">Details</button>
              </div>
            </div>

            {/* Back End App */}
            <div
              className={`bg-[#0A0E16] overflow-auto rounded-3xl border-4 border-[#11141B] group hover:cursor-pointer hover:border-[#2D3038] transition duration-500 ease-in-out p-10 h-150 w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "transition lg:opacity-75 lg:hover:opacity-100 lg:hover:duration-300 lg:hover:delay-0 duration-800 delay-400"
                  : "opacity-0"
              } ${thirdProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center">
                <img className="w-full h-full" src="/images/settings.svg" alt="" />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">Back End App</h1>
                <p className="font-bold text-white">I build secure, scalable, and efficient back-end systems that handle your business logic, data processing, and integrations smoothly and reliably.</p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button onClick={() => setThirdProject(true)} className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black">Details</button>
              </div>
            </div>

            {/* Custom Request */}
            <div
              className={`bg-[#0A0E16] overflow-auto rounded-3xl group border-4 border-[#11141B] hover:cursor-pointer hover:border-[#2D3038] transition p-10 h-150 w-screen xl:w-[40%] 2xl:w-[30%] flex flex-col space-y-8 2xl:space-y-14 ${
                servicesInView
                  ? "lg:opacity-75 transition duration-800 lg:hover:opacity-100 hover:duration-300 hover:delay-0 delay-600"
                  : "opacity-0"
              } ${fourthProject ? "z-500" : ""}`}
            >
              <div className="mt-[14%] w-full h-19 flex justify-center items-center">
                <img className="w-full h-full" src="/images/sparkles.svg" alt="" />
              </div>
              <span className="flex flex-col space-y-4">
                <h1 className="mx-auto inline-block relative underline-anim font-black text-3xl text-red-900">Custom Request</h1>
                <p className="font-bold text-white">Have something unique in mind? I offer fully custom solutions tailored to your exact needs — whether it's a small component, a complex feature, a bug fix, or a full product idea.</p>
              </span>
              <div className="w-full flex items-center justify-center">
                <button onClick={() => setFourthProject(true)} className="lg:w-40 w-40 h-12 focus:bg-red-950 lg:h-12 bg-red-900 hover:scale-110 transition duration-300 hover:cursor-pointer hover:bg-red-950 rounded-full text-white text-xl font-black">Details</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SERVICE MODALS (rendered outside main div to avoid z-index issues) ── */}

      {/* Front End Modal */}
      <ServiceModal
        isOpen={firstProject}
        onClose={() => setFirstProject(false)}
        title="Front-End Application"
        icon="🖥️"
        tagline="Pixel-perfect interfaces that feel alive"
        accentFrom="#7f1d1d"
        accentTo="#ef4444"
        features={[
          { icon: "📐", title: "Fully responsive layouts", desc: "Flawless on mobile, tablet, and desktop." },
          { icon: "🎨", title: "Tailwind-powered styling", desc: "Consistent, scalable, and easy to maintain." },
          { icon: "✨", title: "Sleek animations", desc: "Framer Motion or CSS — smooth and purposeful." },
          { icon: "🧩", title: "Component-based UI", desc: "Reusable, modular, clean architecture." },
          { icon: "⚡", title: "Optimized performance", desc: "Fast load times and lightweight assets." },
          { icon: "🔗", title: "API-ready integration", desc: "Seamless connection to any backend you provide." },
        ]}
        perfect="Landing pages, portfolios, product UIs, marketing sites, modern dashboards."
        emailSubject="Front-End Application Order"
        emailBody={`Hi Adam,\n\nI'm interested in ordering a Front-End Application.\n\nHere are my project details:\n\n- Project name / idea:\n- Key pages / sections needed:\n- Design references (if any):\n- Deadline:\n- Budget range:\n\nLooking forward to hearing from you!`}
      />

      {/* Full Stack Modal */}
      <ServiceModal
        isOpen={secondProject}
        onClose={() => setSecondProject(false)}
        title="Full Stack Application"
        icon="⚙️"
        tagline="End-to-end products built to scale"
        accentFrom="#7f1d1d"
        accentTo="#f97316"
        features={[
          { icon: "📱", title: "Modern, responsive UI", desc: "Great UX on every screen, every time." },
          { icon: "🔒", title: "Secure backend", desc: "Industry-standard practices from day one." },
          { icon: "🛠️", title: "API design & integration", desc: "Clean, documented, and extensible endpoints." },
          { icon: "🗄️", title: "Database setup & optimization", desc: "SQL or NoSQL — structured for your needs." },
          { icon: "☁️", title: "Deployment & hosting", desc: "Live and configured from day one." },
          { icon: "🧹", title: "Clean, maintainable code", desc: "Ready for future scaling and new devs." },
        ]}
        perfect="Startups, SaaS products, dashboards, admin panels, business apps, and custom tools."
        emailSubject="Full Stack Application Order"
        emailBody={`Hi Adam,\n\nI'm interested in ordering a Full Stack Application.\n\nHere are my project details:\n\n- Project name / idea:\n- Frontend requirements:\n- Backend / database needs:\n- Key features:\n- Deadline:\n- Budget range:\n\nLooking forward to hearing from you!`}
      />

      {/* Back End Modal */}
      <ServiceModal
        isOpen={thirdProject}
        onClose={() => setThirdProject(false)}
        title="Back-End Application"
        icon="🛡️"
        tagline="Robust server-side systems, built right"
        accentFrom="#7f1d1d"
        accentTo="#6366f1"
        features={[
          { icon: "🔁", title: "REST or GraphQL APIs", desc: "Flexible, documented, and production-ready." },
          { icon: "🛡️", title: "Auth & security", desc: "JWT, OAuth, and role-based access systems." },
          { icon: "🗂️", title: "Database design", desc: "Optimized schemas for SQL or NoSQL databases." },
          { icon: "🤖", title: "Server-side logic & automation", desc: "Business logic handled efficiently at scale." },
          { icon: "🌐", title: "Third-party integrations", desc: "Payment gateways, email services, and more." },
          { icon: "🚀", title: "Deployment & server setup", desc: "Configured and ready for production traffic." },
        ]}
        perfect="Complex logic systems, API-only projects, SaaS backends, and service infrastructures."
        emailSubject="Back-End Application Order"
        emailBody={`Hi Adam,\n\nI'm interested in ordering a Back-End Application.\n\nHere are my project details:\n\n- Project name / idea:\n- API requirements:\n- Database preferences:\n- Authentication needs:\n- Deadline:\n- Budget range:\n\nLooking forward to hearing from you!`}
      />

      {/* Custom Request Modal */}
      <ServiceModal
        isOpen={fourthProject}
        onClose={() => setFourthProject(false)}
        title="Custom Request"
        icon="💡"
        tagline="Your vision, built your way"
        accentFrom="#7f1d1d"
        accentTo="#10b981"
        features={[
          { icon: "🎛️", title: "Any feature or component", desc: "Animations, dashboards, tools, widgets — you name it." },
          { icon: "🔌", title: "API & service integrations", desc: "Connect to any API, database, or third-party service." },
          { icon: "🛠️", title: "Fixes, refactors & audits", desc: "Clean up, speed up, and improve existing code." },
          { icon: "🧪", title: "Experimental ideas", desc: "If you can dream it, we can build it." },
          { icon: "🔄", title: "Flexible project scope", desc: "Small task or large — I adapt to your goals." },
          { icon: "📦", title: "One-off deliverables", desc: "No long contracts — just clean, delivered work." },
        ]}
        perfect="One-off tasks, unique requirements, experimental ideas, or anything outside standard packages."
        emailSubject="Custom Development Request"
        emailBody={`Hi Adam,\n\nI have a custom development request.\n\nHere are the details:\n\n- What I need:\n- Tech stack / preferences (if any):\n- Rough scope / size:\n- Deadline:\n- Budget range:\n\nLooking forward to hearing from you!`}
      />
    </>
  );
}

export default Body;