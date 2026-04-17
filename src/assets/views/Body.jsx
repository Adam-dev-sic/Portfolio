import { title } from "process";
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
    title: "The Remuda",
    href: "https://restaurant-temp-delta.vercel.app/",
    image: "/images/theremuda.png",
    description:
      "A fully responsive restaurant website featuring an elegant menu with food photography, a location and contact section, and a warm dining atmosphere brought to life through modern design. Built to help restaurants attract customers and showcase their food and ambiance online.",
    tech: [
      { label: "HTML", color: "text-orange-500" },
      { label: "Tailwind", color: "text-blue-600" },
    ],
  },
  {
    title: "Foraged Fare",
    href: "https://foraged-fare-pu97nd30m-adams-projects-7c5b4675.vercel.app/",
    image: "/images/foraged.png",
    description:
      "Foraged Fare is a fully responsive website featuring a emnu section along with food photography, a location and contact section, along with a table reservation feature and a warm dining atmosphere brought to life through modern design. Built to help restaurants attract customers and showcase their food and ambiance online.",
    tech: [
      { label: "HTML", color: "text-orange-500" },
      { label: "CSS", color: "text-blue-500" },
    ],
  },
  {
    title: "Golden Orchard",
    href: "https://golden-orchard-5o2q.vercel.app/index.html",
    image: "/images/golden.png",

    description:
      "Golden Orchard is a fully responsive website featuring a menu section along with food photography, and a warm dining atmosphere brought to life through modern design. Built to help restaurants attract customers and showcase their food and ambiance online.",
    tech: [
      { label: "HTML", color: "text-orange-500" },
      { label: "CSS", color: "text-blue-500" },
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

// ─── Pricing Modal ────────────────────────────────────────────────────────────
function PricingModal({
  isOpen,
  onClose,
  title,
  icon,
  tagline,
  features,
  note,
  emailSubject,
  emailBody,
  featured,
}) {
  if (!isOpen) return null;
  const mailtoLink = `mailto:adamforbusiness01@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ animation: "backdropIn 0.3s ease forwards" }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-[92%] max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl flex flex-col"
        style={{
          background: featured
            ? "linear-gradient(160deg, #130a0c 0%, #0d0608 100%)"
            : "linear-gradient(160deg, #0d1117 0%, #0A0E16 100%)",
          borderColor: featured ? "#7f1d1d" : "rgba(255,255,255,0.08)",
          animation: "modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{
            background: featured
              ? "linear-gradient(90deg, transparent, #991b1b, #ef4444, #991b1b, transparent)"
              : "linear-gradient(90deg, transparent, rgba(127,29,29,0.5), transparent)",
          }}
        />

        {/* Header */}
        <div
          className="px-7 pt-8 pb-5 border-b"
          style={{
            borderColor: featured
              ? "rgba(127,29,29,0.2)"
              : "rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: "rgba(127,29,29,0.2)",
                  border: "1px solid rgba(127,29,29,0.35)",
                }}
              >
                {icon}
              </div>
              <div>
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                  {tagline}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-white transition-colors mt-1 flex-shrink-0 hover:cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="px-7 py-5 flex flex-col gap-2.5 flex-1">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-3"
              style={{
                animation: `featureIn 0.3s ease ${0.08 + i * 0.05}s both`,
              }}
            >
              <span className="text-red-600 mt-0.5 flex-shrink-0 font-black text-sm">
                ✓
              </span>
              <div>
                <span className="text-white font-semibold text-sm">
                  {f.label}
                </span>
                {f.desc && (
                  <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note strip */}
        {note && (
          <div
            className="mx-7 mb-5 rounded-xl p-3.5"
            style={{
              background: "rgba(127,29,29,0.08)",
              border: "1px solid rgba(127,29,29,0.18)",
            }}
          >
            <p className="text-gray-400 text-xs font-medium">{note}</p>
          </div>
        )}

        {/* Actions */}
        <div className="px-7 pb-7 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-white/20 text-sm font-bold transition-all duration-200 hover:cursor-pointer"
          >
            Close
          </button>
          <a
            href={mailtoLink}
            className="flex-1 h-11 rounded-xl text-white text-sm font-black flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: featured
                ? "linear-gradient(135deg, #7f1d1d, #991b1b)"
                : "rgba(127,29,29,0.8)",
              boxShadow: featured ? "0 0 20px rgba(127,29,29,0.45)" : "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Order Now
          </a>
        </div>
      </div>

      <style>{`
        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes featureIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
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

  // ── Modal states ──────────────────────────────────────────────────────────
  const [starterModal, setStarterModal] = useState(false);
  const [growthModal, setGrowthModal] = useState(false);
  const [lumpSumModal, setLumpSumModal] = useState(false);

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
    if (starterModal || growthModal || lumpSumModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [starterModal, growthModal, lumpSumModal]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // ── Pricing card data ─────────────────────────────────────────────────────
  const PLANS = [
    {
      key: "starter",
      label: "Starter",
      title: "Starter",
      price: "$150",
      sub: "/month — hosting included",
      featured: false,
      features: [
        "Website Design & Development",
        "Hosting Included",
        "Up to 5 Pages",
        "Mobile Friendly & Fast",
        "SEO Optimized on Launch",
        "Monthly Maintenance",
        "Minor Monthly Updates",
        "24/7 Support",
      ],
      onDetails: () => setStarterModal(true),
      emailSubject: "Starter Plan Order",
      emailBody:
        "Hi Adam,\n\nI'm interested in the Starter plan.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!",
    },
    {
      key: "growth",
      label: "Recommended",
      title: "Growth",
      price: "$250",
      sub: "/month — hosting included",
      featured: true,
      badge: "★ Most Popular",
      features: [
        "Everything in Starter",
        "Monthly SEO Monitoring",
        "Google Search Console Management",
        "Keyword Ranking Tracking",
        "Monthly Performance Report",
        "Unlimited Edits",
        "24/7 Support",
      ],
      onDetails: () => setGrowthModal(true),
      emailSubject: "Growth Plan Order",
      emailBody:
        "Hi Adam,\n\nI'm interested in the Growth plan.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!",
    },
    {
      key: "lumpsum",
      label: "One-Time",
      title: "Lump Sum",
      price: "$1,000",
      sub: "+ $25/mo hosting",
      featured: false,
      features: [
        "Full Website Design & Development",
        "Up to 5 Pages",
        "Mobile Friendly & Fast",
        "SEO Optimized on Launch",
        "$25/mo Hosting",
        "$100 per page after 5",
        "Lifetime Updates",
        "24/7 Support",
      ],
      onDetails: () => setLumpSumModal(true),
      emailSubject: "Lump Sum Website Order",
      emailBody:
        "Hi Adam,\n\nI'm interested in the Lump Sum package.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!",
    },
  ];

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
              id="About Apex Flow"
              className="text-white lg:w-[60%] w-full px-10 py-14 h-full text-center"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span className="flex flex-col items-center space-y-6">
                {/* Eyebrow label */}
                <span className="flex items-center gap-3 text-[0.6rem] tracking-[0.35em] uppercase text-gray-500 font-medium">
                  <span className="w-8 h-px bg-gray-700 inline-block" />
                  Who We Are
                  <span className="w-8 h-px bg-gray-700 inline-block" />
                </span>

                {/* Headline */}
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                  We Are{" "}
                  <span
                    className="text-red-900 inline-block relative"
                    style={{
                      textShadow: "0 0 60px rgba(127,29,29,0.35)",
                    }}
                  >
                    Apex Flow
                  </span>
                </h1>

                {/* Divider accent */}
                <span className="w-12 h-[2px] bg-red-900 rounded-full opacity-70" />

                {/* Body text */}
                <p
                  className="text-[1rem] leading-[1.95] font-light max-w-xl mx-auto"
                  style={{ color: "#b0a9a0" }}
                >
                  A{" "}
                  <span className="text-white font-semibold">
                    professional web development studio
                  </span>{" "}
                  built on one conviction — that every business deserves a
                  digital presence that truly reflects its quality.
                  <br />
                  <br />
                  We craft{" "}
                  <span
                    className="font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, #9ca3af, #e5e7eb, #ffffff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    clean, high-performance web applications
                  </span>{" "}
                  — from sleek front-end interfaces to full-stack platforms —
                  with precision, care, and a relentless focus on results.
                  Whether you need a landing page or a complex custom system, we
                  handle it{" "}
                  <span className="text-white font-semibold">
                    end to end, without compromise.
                  </span>
                </p>

                {/* Tagline */}
                <p
                  className="text-[0.7rem] tracking-[0.25em] uppercase font-medium mt-2"
                  style={{ color: "#4b3030" }}
                >
                  Built Different. Delivered Right.
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
                <span
                  className={`inline-block rounded-full transition-all duration-400 ${
                    activePage === i
                      ? "w-8 h-3 bg-red-900"
                      : "w-3 h-3 bg-gray-700 group-hover:bg-red-950"
                  }`}
                />
                <span
                  className={`text-sm font-black transition-all duration-300 ${
                    activePage === i
                      ? "text-red-900 opacity-100"
                      : "text-gray-600 group-hover:text-gray-400 opacity-70"
                  }`}
                >
                  {i === 0
                    ? "01 — 03"
                    : `0${i * 3 + 1} — 0${Math.min(i * 3 + 3, PROJECTS.length)}`}
                </span>
              </button>
            ))}
            <div className="flex-1 h-px bg-gray-800 ml-2 max-w-xs" />
            <span className="text-gray-600 text-sm font-black ml-auto">
              <span className="text-red-900">
                {String(activePage + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(PAGES.length).padStart(2, "0")}
            </span>
          </div>

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
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </button>

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
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
            <h1 className="inline-block relative underline-anim">Services</h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-center text-gray-500 text-sm font-medium mt-3 transition-opacity duration-700 ${servicesTextInView ? "opacity-100" : "opacity-0"}`}
          >
            Choose a plan that fits your needs — all include professional
            delivery and full support.
          </p>

          {/* Pricing cards */}
          <div
            ref={servicesRef}
            className="flex mt-14 flex-col lg:flex-row gap-6 items-center lg:items-stretch justify-center w-full"
          >
            {PLANS.map((plan, idx) => {
              const delay = idx * 0.15;
              return (
                <div
                  key={plan.key}
                  className="relative flex flex-col w-full lg:w-[30%] rounded-2xl p-7"
                  style={{
                    background: plan.featured
                      ? "linear-gradient(160deg, #130a0c 0%, #0d0608 60%, #110a0e 100%)"
                      : "#0A0E16",
                    border: plan.featured
                      ? "2px solid #7f1d1d"
                      : "1px solid #1e2433",
                    boxShadow: plan.featured
                      ? "0 0 60px rgba(127,29,29,0.25), inset 0 0 60px rgba(127,29,29,0.03)"
                      : "none",
                    opacity: servicesInView ? 1 : 0,
                    transform: servicesInView
                      ? plan.featured
                        ? "translateY(-12px)"
                        : "translateY(0)"
                      : "translateY(24px)",
                    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
                  }}
                >
                  {/* Most popular badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span
                        className="text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap"
                        style={{
                          background:
                            "linear-gradient(135deg, #7f1d1d, #991b1b)",
                          boxShadow: "0 0 24px rgba(127,29,29,0.7)",
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Shimmer top line on featured */}
                  {plan.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #991b1b, #ef4444, #991b1b, transparent)",
                      }}
                    />
                  )}

                  {/* Plan header */}
                  <div className={plan.badge ? "mt-3" : ""}>
                    <p
                      className="text-xs font-black uppercase tracking-widest mb-2"
                      style={{ color: plan.featured ? "#7f1d1d" : "#4b5563" }}
                    >
                      {plan.label}
                    </p>
                    <h2 className="text-white font-black text-2xl">
                      {plan.title}
                    </h2>

                    {/* Price */}
                    <div className="flex items-end gap-2 mt-4">
                      <span
                        className="font-black text-white"
                        style={{ fontSize: "2.4rem", lineHeight: 1 }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs mt-1 font-medium">
                      {plan.sub}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="my-5 h-px"
                    style={{
                      background: plan.featured
                        ? "rgba(127,29,29,0.25)"
                        : "#1e2433",
                    }}
                  />

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="flex-shrink-0 mt-0.5 font-black text-sm"
                          style={{
                            color: plan.featured ? "#ef4444" : "#7f1d1d",
                          }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: plan.featured ? "#e5e7eb" : "#9ca3af",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={plan.onDetails}
                      className="flex-1 h-11 rounded-xl text-sm font-bold transition-all duration-200 hover:cursor-pointer hover:text-white"
                      style={{
                        border: plan.featured
                          ? "1px solid rgba(127,29,29,0.35)"
                          : "1px solid rgba(255,255,255,0.08)",
                        color: "#6b7280",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = plan.featured
                          ? "rgba(127,29,29,0.7)"
                          : "rgba(255,255,255,0.18)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = plan.featured
                          ? "rgba(127,29,29,0.35)"
                          : "rgba(255,255,255,0.08)";
                      }}
                    >
                      Details
                    </button>
                    <a
                      href={`mailto:adamforbusiness01@gmail.com?subject=${encodeURIComponent(plan.emailSubject)}&body=${encodeURIComponent(plan.emailBody)}`}
                      className="flex-1 h-11 rounded-xl text-white text-sm font-black flex items-center justify-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                      style={{
                        background: plan.featured
                          ? "linear-gradient(135deg, #7f1d1d, #991b1b)"
                          : "rgba(127,29,29,0.75)",
                        boxShadow: plan.featured
                          ? "0 0 24px rgba(127,29,29,0.45)"
                          : "none",
                      }}
                    >
                      Order
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── PRICING MODALS ───────────────────────────────────────────────────── */}

      {/* Starter Modal */}
      <PricingModal
        isOpen={starterModal}
        onClose={() => setStarterModal(false)}
        title="Starter Plan"
        icon="🚀"
        tagline="Everything you need to get online"
        featured={false}
        features={[
          {
            label: "Website Design & Development",
            desc: "Custom-built from scratch to match your brand.",
          },
          {
            label: "Hosting Included",
            desc: "No separate hosting bill — everything in one payment.",
          },
          {
            label: "Up to 5 Pages",
            desc: "Home, Menu, About, Contact, Gallery — whatever you need.",
          },
          {
            label: "Mobile Friendly & Fast",
            desc: "Looks great on phones, tablets, and desktops.",
          },
          {
            label: "SEO Optimized on Launch",
            desc: "Built correctly from day one so Google can find you.",
          },
          {
            label: "Monthly Maintenance",
            desc: "Technical upkeep handled — your site stays running smoothly.",
          },
          {
            label: "Minor Monthly Updates",
            desc: "Small content changes included each month.",
          },
          {
            label: "24/7 Support",
            desc: "Direct line to me for any questions or issues.",
          },
        ]}
        note="Best for businesses that want a clean, professional website up and running without the hassle of managing it themselves."
        emailSubject="Starter Plan Order"
        emailBody={
          "Hi Adam,\n\nI'm interested in the Starter plan.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!"
        }
      />

      {/* Growth Modal */}
      <PricingModal
        isOpen={growthModal}
        onClose={() => setGrowthModal(false)}
        title="Growth Plan"
        icon="📈"
        tagline="Get found. Get more customers."
        featured={true}
        features={[
          {
            label: "Everything in Starter",
            desc: "Full design, development, hosting, and maintenance included.",
          },
          {
            label: "Monthly SEO Monitoring",
            desc: "We actively track and improve your Google rankings every month.",
          },
          {
            label: "Google Search Console Management",
            desc: "We monitor errors, indexing issues, and search performance.",
          },
          {
            label: "Keyword Ranking Tracking",
            desc: "See exactly where you rank for searches that matter to your business.",
          },
          {
            label: "Monthly Performance Report",
            desc: "Clear summary of your traffic, rankings, and improvements.",
          },
          {
            label: "Unlimited Edits",
            desc: "Request any changes anytime — no limits, no extra charges.",
          },
          {
            label: "24/7 Support",
            desc: "Direct access to me whenever you need help.",
          },
        ]}
        note="Most popular choice — everything in Starter plus active monthly SEO work to push you above your competitors on Google."
        emailSubject="Growth Plan Order"
        emailBody={
          "Hi Adam,\n\nI'm interested in the Growth plan.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!"
        }
      />

      {/* Lump Sum Modal */}
      <PricingModal
        isOpen={lumpSumModal}
        onClose={() => setLumpSumModal(false)}
        title="Lump Sum"
        icon="💼"
        tagline="One-time payment — own it outright"
        featured={false}
        features={[
          {
            label: "Full Website Design & Development",
            desc: "Custom-built from scratch to your vision.",
          },
          {
            label: "Up to 5 Pages",
            desc: "Home, Menu, About, Contact, Gallery — whatever you need.",
          },
          {
            label: "Mobile Friendly & Fast",
            desc: "Looks great on all devices.",
          },
          {
            label: "SEO Optimized on Launch",
            desc: "Built correctly from day one so Google can find you.",
          },
          {
            label: "$25/mo Hosting",
            desc: "Reliable, fast hosting billed monthly after delivery.",
          },
          {
            label: "$100 per page after 5",
            desc: "Need more pages? Easy to add on.",
          },
          {
            label: "Lifetime Updates",
            desc: "Tech stack and security updates included forever.",
          },
          {
            label: "24/7 Support",
            desc: "Direct line to me for any questions or issues.",
          },
        ]}
        note="Best for businesses that prefer a single upfront investment and want full ownership of their website from day one."
        emailSubject="Lump Sum Website Order"
        emailBody={
          "Hi Adam,\n\nI'm interested in the Lump Sum package.\n\nProject details:\n\n- Business name:\n- Website type:\n- Number of pages:\n- Deadline:\n\nLooking forward to hearing from you!"
        }
      />
    </>
  );
}

export default Body;