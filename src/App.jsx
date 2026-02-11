import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaJava,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
  SiElastic,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

function App() {
  /* GREETING */
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning!");
    else if (hour < 18) setGreeting("Good afternoon!");
    else setGreeting("Good evening!");
  }, []);

  /* ================= TYPING LOOP ================= */

  const roles = [
    "Angular Developer",
    "React.js Developer",
    "Java Developer",
    "Full Stack Developer",
    "Software Engineer",
  ];

  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1),
      );

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  /* ================= NAV ACTIVE ================= */

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* TAB SWITCH */
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          {" "}
          <img src="/ac.png" alt="profile" className="about-photo" /> Asmitha
          Chandini
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience" onClick={() => setActiveTab("experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setActiveTab("education")}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      {/* ================= HERO ================= */}
      <section id="home" className="hero-center">
        {/* ===== BACKGROUND ===== */}
        <div className="hero-bg">
          <div className="grid"></div>

          <div className="particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* ===== NAME ===== */}
        {/* <h2 className="hero-name">Asmitha Chandini</h2> */}

        {/* ===== INTRO ===== */}
        <p className="intro">
          Hello, I’m Asmitha Chandini. A passionate Software Engineer.
        </p>

        {/* ===== ROLE TYPING ===== */}
        <h1 className="title">
          {typedText}
          <span className="cursor">|</span>
        </h1>

        {/* ===== SPECIALIZATION ===== */}
        {/* <p className="hero-specialization">
    Building Data Visualization & Forecasting Platforms
  </p> */}

        {/* ===== STATS ===== */}
        <div className="hero-stats">
          <span>3+ Years Experience</span>
          <span>Frontend Focused Developer</span>
          <span>Enterprise Application Developer</span>
          <span>Product Development Experience</span>
        </div>

        {/* ===== STACK ===== */}
        <div className="hero-stack">
          <span>React</span>
          <span>Angular</span>
          <span>TypeScript</span>
          <span>D3.js</span>
          <span>Java</span>
        </div>

        {/* ===== META ===== */}
        <div className="hero-meta">
          📍 Bangalore, India &nbsp; | &nbsp; 🟢 Open to Frontend & Full Stack
          Opportunities Worldwide
        </div>

        {/* ===== BUTTONS ===== */}
        <div className="buttons">
          <a href="/resume.pdf" download="Asmitha_Chandini_Resume.pdf">
            <button className="primary">Download Resume</button>
          </a>

          <button
            className="secondary"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                const yOffset = -100;
                const y =
                  section.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </button>
        </div>

        {/* ===== SOCIALS ===== */}
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/asmitha-chandini-tg"
            target="_blank"
            rel="noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/asmithachandinitg"
            target="_blank"
            rel="noreferrer"
            className="icon github"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* ===== LEFT PROFILE ===== */}
          <div className="about-left">
            <img
              src="/profile.png"
              alt="profile"
              className="about-photo-large"
            />

            <h3>Asmitha Chandini</h3>
            <p className="about-role">Frontend & Full Stack Developer</p>
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div className="about-right">
            {/* BIO */}
            <p className="about-bio">
              Frontend Developer with 3+ years of experience building scalable
              enterprise dashboards and forecasting platforms. Specialized in
              React, Angular, and data visualization with strong backend
              understanding in Java and microservices architecture.
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="about-highlights">
              <div className="highlight-card">
                <h4>Experience</h4>
                <p>3+ Years building enterprise web applications</p>
              </div>

              <div className="highlight-card">
                <h4>Specialization</h4>
                <p>Forecasting & Data Visualization Platforms</p>
              </div>

              <div className="highlight-card">
                <h4>Tech Stack</h4>
                <p>React • Angular • TypeScript • Java</p>
              </div>

              <div className="highlight-card">
                <h4>Collaboration</h4>
                <p>Cross-functional product development</p>
              </div>
            </div>

            {/* TECH BADGES */}
            <div className="about-tech">
              {/* <span>React</span>
        <span>Angular</span>
        <span>TypeScript</span>
        <span>D3.js</span>
        <span>Java</span>
        <span>Spring Boot</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER SECTION */}
      <section id="experience" className="career-section">
        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === "experience" ? "tab active" : "tab"}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={activeTab === "education" ? "tab active" : "tab"}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="timeline">
            <div
              className="timeline-item"
              onClick={() => window.open("https://www.quenext.com/", "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h4>Quenext Decision Science Technology Pvt Ltd</h4>
              <p className="role">Frontend Developer / Team Lead</p>

              <p className="meta">
                <FaCalendarAlt /> Nov 2024 – Present
              </p>
              <p className="meta">
                <TiLocation /> Bangalore, India
              </p>

              <p className="desc">
                Sole frontend developer for a Karnataka Government–backed
                weather forecasting platform, building the complete React
                application from authentication and role-based access to
                client-facing dashboards.
              </p>

              <p className="desc">
                Developed high-performance D3.js visualizations, map-based
                views, and responsive data tables to present large-scale
                weather, load, and prediction datasets effectively.
              </p>

              <p className="desc">
                Collaborated closely with backend and domain teams for API
                integration, data rendering, performance optimization, and
                end-to-end delivery of energy forecasting insights.
              </p>
              <div className="exp-skills">
                <span>React</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>D3.js</span>
                <span>Angular</span>
                <span>GitHub</span>
                <span>Java</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div
              className="timeline-item"
              onClick={() =>
                window.open("https://www.creativeos.com/", "_blank")
              }
              style={{ cursor: "pointer" }}
            >
              <h4>CreativeOS</h4>
              <p className="role">Frontend Developer</p>

              <p className="meta">
                <FaCalendarAlt /> Jan 2024 – Oct 2024
              </p>
              <p className="meta">
                <TiLocation /> Bangalore, India
              </p>

              <p className="desc">
                Led end-to-end frontend development for two major startup
                products, Zollab and Stella, managing the UI team while
                delivering scalable, user-centric web features aligned with
                business goals.
              </p>

              <p className="desc">
                Built and integrated advanced functionalities including
                real-time chat, video playback, content formatting, and secure
                Stripe payment systems, improving engagement and transaction
                efficiency.
              </p>

              <p className="desc">
                Specialized in API integrations, production issue resolution,
                and cross-functional collaboration to ensure high performance,
                stability, and seamless user experience across applications.
              </p>

              <div className="exp-skills">
                <span>Angular</span>
                <span>Vue.js</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Stripe</span>
                <span>Angular Material</span>
                <span>GitHub</span>
              </div>
            </div>

            <div
              className="timeline-item"
              onClick={() => window.open("https://www.profit.co/", "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h4>Profit.co</h4>
              <p className="role">Full stack Developer</p>

              <p className="meta">
                <FaCalendarAlt /> Jul 2022 – Dec 2023
              </p>
              <p className="meta">
                <TiLocation /> Madurai, India
              </p>

              <p className="desc">
                Developed and maintained scalable Java-based cloud applications
                supporting OKR products at Profit.co, focusing on performance
                optimization and high user scalability.
              </p>

              <p className="desc">
                Built automation solutions and object-oriented frameworks to
                improve operational efficiency, streamline support processes,
                and enhance system responsiveness through code optimization and
                unit testing.
              </p>
              <p className="desc">
                Collaborated with product owners, IT, and cross-functional teams
                to deliver backend solutions aligned with business goals,
                improving application functionality and user experience.
              </p>

              <div className="exp-skills">
                <span>Angular</span>
                <span>Java</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Elasticsearch</span>
                <span>MySQL</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div id="education" className="timeline">
            <div
              className="timeline-item"
              onClick={() => window.open("https://www.klnce.edu/", "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h4>KLN College of Engineering</h4>
              <p className="role">
                Master of Engineering (Computer Science and Engineering)
              </p>

              <p className="meta">
                <FaCalendarAlt /> 2020 – 2022
              </p>
              <p className="meta">
                <TiLocation /> Madurai, Tamil Nadu, India
              </p>

              <p className="desc">
                Specialized in distributed systems & networking.
              </p>

              <p className="desc">
                Published research in MANET simulation models.
              </p>

              <p className="desc">
                Research Paper:{" "}
                <b>
                  "Multi-Radio Mobile Node Simulation Model in MANET using AODV
                  Protocol"{" "}
                </b>
                Published in International Journal of Scientific Development and
                Research <b>(IJSDR)</b>, May 2022{" "}
                <a
                  onClick={() =>
                    window.open(
                      "https://www.ijsdr.org/papers/IJSDR2205118.pdf",
                      "_blank",
                    )
                  }
                  className="publication-link"
                >
                  Publication link
                </a>
              </p>
            </div>

            <div
              className="timeline-item"
              onClick={() => window.open("https://www.klnce.edu/", "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h4>KLN College of Engineering</h4>
              <p className="role">
                Bachelor of Technology (Information Technology)
              </p>

              <p className="meta">
                <FaCalendarAlt /> 2011 – 2015
              </p>
              <p className="meta">
                <TiLocation /> Madurai, Tamil Nadu, India
              </p>

              <p className="desc">
                Focused on software engineering fundamentals.
              </p>

              <p className="desc">Built academic full-stack web projects.</p>
            </div>
          </div>
        )}
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="React Official Docs"
          >
            <FaReact className="icon react" />
            <h3>React.js</h3>
          </a>

          <a
            href="https://angular.io"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Angular Framework"
          >
            <FaAngular className="icon angular" />
            <h3>Angular</h3>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="JavaScript MDN Docs"
          >
            <FaJs className="icon js" />
            <h3>JavaScript</h3>
          </a>

          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="TypeScript Language"
          >
            <SiTypescript className="icon typescript" />
            <h3>TypeScript</h3>
          </a>

          <a
            href="https://www.java.com"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Java Platform"
          >
            <FaJava className="icon java" />
            <h3>Java</h3>
          </a>

          <a
            href="https://spring.io/projects/spring-boot"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Spring Boot Framework"
          >
            <SiSpringboot className="icon spring" />
            <h3>Spring Boot</h3>
          </a>

          <a
            href="https://microservices.io"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Microservices Architecture"
          >
            <SiSpringboot className="icon spring" />
            <h3>Microservices</h3>
          </a>

          <a
            href="https://www.elastic.co/elasticsearch"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Elastic Search Engine"
          >
            <SiElastic className="icon elastic" />
            <h3>Elasticsearch</h3>
          </a>

          <a
            href="https://getbootstrap.com"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Bootstrap CSS"
          >
            <FaBootstrap className="icon bootstrap" />
            <h3>Bootstrap</h3>
          </a>

          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Tailwind Utility CSS"
          >
            <SiTailwindcss className="icon tailwind" />
            <h3>Tailwind</h3>
          </a>

          <a
            href="https://github.com/asmithachandinitg"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="Git Version Control"
          >
            <FaGitAlt className="icon git" />
            <h3>Git / GitHub</h3>
          </a>

          <a
            href="https://www.postman.com"
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            data-tooltip="API Testing Tool"
          >
            <SiPostman className="icon postman" />
            <h3>Postman</h3>
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact ME!</h2>
        <div className="contact-card">
          <img src="/profile.png" className="contact-photo" alt="profile" />

          <h2>Asmitha Chandini</h2>
          <p className="contact-roles">Frontend Developer</p>

          <p className="email">
            Email me at:
            <a href="mailto:asmithachandinitg@gmail.com">
              asmithachandinitg@gmail.com
            </a>
          </p>

          <div className="contact-icons">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/asmitha-chandini-tg"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/asmithachandinitg"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 Asmitha Chandini. All Rights Reserved.
        </footer>
      </section>
    </div>
  );
}

export default App;