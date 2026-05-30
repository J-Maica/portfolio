import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

import "react-vertical-timeline-component/style.min.css";

/* Skills */
import HTML from "../assets/html.webp";
import CSS from "../assets/css.webp";
import ReactLogo from "../assets/react.webp";
import JS from "../assets/js.webp";
import Mysql from "../assets/mysql.webp";
import Mongodb from "../assets/mongodb.webp";
import Bootstrap from "../assets/bootstrap.webp";
import Tailwind from "../assets/tailwind.webp";
import Figma from "../assets/figma.webp";
import Canva from "../assets/canva.webp";
import PS from "../assets/photoshop.webp";

/* Certificates */
import BasicWebDev from "../assets/certificates/Basic Web Development Workshop.webp";
import CppTutorial from "../assets/certificates/C++ Tutorial.webp";
import PowerBI from "../assets/certificates/Data Visualization with Power BI.webp";
import JavaAlgo from "../assets/certificates/Java Algorithms.webp";
import JSBasic from "../assets/certificates/javascript_basic certificate.webp";
import ReactJS from "../assets/certificates/React JS.webp";
import ReactBasic from "../assets/certificates/react_basic certificate.webp";
import SQLBasic from "../assets/certificates/sql_basic certificate.webp";

function About() {
  useEffect(() => {
    if (window.$ && window.$.fancybox) {
      window.$("[data-fancybox='certificates']").fancybox({
        buttons: [
          "zoom",
          "slideShow",
          "thumbs",
          "close",
        ],
        loop: true,
        protect: true,
      });
    }
  }, []);

  const certificates = [
    {
      name: "Basic Web Development Workshop",
      image: BasicWebDev,
      certificate:
        "Basic Web Development Workshop Certificate",
    },
    {
      name: "C++ Tutorial",
      image: CppTutorial,
      certificate: "C++ Tutorial Certificate",
    },
    {
      name: "Data Visualization with Power BI",
      image: PowerBI,
      certificate:
        "Data Visualization with Power BI Certificate",
    },
    {
      name: "Java Algorithms",
      image: JavaAlgo,
      certificate: "Java Algorithms Certificate",
    },
    {
      name: "JavaScript Basic",
      image: JSBasic,
      certificate: "JavaScript Basic Certificate",
    },
    {
      name: "React JS",
      image: ReactJS,
      certificate: "React JS Certificate",
    },
    {
      name: "React Basic",
      image: ReactBasic,
      certificate: "React Basic Certificate",
    },
    {
      name: "SQL Basic",
      image: SQLBasic,
      certificate: "SQL Basic Certificate",
    },
  ];

  const skills = [
    { src: ReactLogo, alt: "React Logo" },
    { src: JS, alt: "JavaScript Logo" },
    { src: HTML, alt: "HTML Logo" },
    { src: CSS, alt: "CSS Logo" },
    { src: Mysql, alt: "MySQL Logo" },
    { src: Mongodb, alt: "MongoDB Logo" },
    { src: Bootstrap, alt: "Bootstrap Logo" },
    { src: Tailwind, alt: "Tailwind CSS Logo" },
    { src: Figma, alt: "Figma Logo" },
    { src: Canva, alt: "Canva Logo" },
    { src: PS, alt: "Photoshop Logo" },
  ];

  const timelineIconStyle = {
    background: "#1F1F1F",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    WebkitBoxShadow:
      "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
    boxShadow:
      "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
  };

  const timelineContentStyle = {
    background: "transparent",
    border: "1px solid #374151",
  };

  return (
    <section className="grid gap-20 lg:gap-28" id="about">
      {/* Education */}
      <div className="grid gap-6">
        <div className="grid gap-4">
          <h1 className="text-[#DCFFC2] text-2xl md:text-3xl">
            About
          </h1>

          <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
            Educational Attainment
          </h2>
        </div>

        <VerticalTimeline lineColor="#9ca3af">
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-gray-400"
            date="2017 - 2019"
            iconStyle={timelineIconStyle}
            icon={
              <i className="fa-solid fa-graduation-cap"></i>
            }
            contentStyle={timelineContentStyle}
          >
            <div className="md:text-center">
              <h3 className="tracking-wide font-semibold mt-4 text-white">
                Fiat Lux Academe - Dasmariñas Cavite
              </h3>

              <p className="text-base">
                Accountancy Business & Management
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education text-gray-400"
            date="2019 - 2023"
            iconStyle={timelineIconStyle}
            icon={
              <i className="fa-solid fa-graduation-cap text-white"></i>
            }
            contentStyle={timelineContentStyle}
          >
            <div className="md:text-center">
              <h3 className="tracking-wide font-semibold text-white mt-4">
                Emilio Aguinaldo College - Cavite
              </h3>

              <p>
                Bachelor of Science in Computer Science
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Skills */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Skills
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-6 place-items-center gap-6">
          {skills.map((skill, index) => (
            <LazyLoadImage
              key={index}
              src={skill.src}
              alt={skill.alt}
              width="45px"
              height="45px"
              loading="lazy"
              placeholderSrc={skill.src}
              effect="blur"
              className="hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Experience
        </h2>

        <VerticalTimeline lineColor="#374151">
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-gray-400"
            date="January 2019"
            iconStyle={timelineIconStyle}
            icon={<i className="fa-solid fa-briefcase"></i>}
            contentStyle={timelineContentStyle}
          >
            <div className="md:text-center">
              <h3 className="tracking-wide font-semibold mt-4 text-white">
                Social Worker
              </h3>

              <p className="text-white">Internship</p>

              <p className="text-gray-400">
                Municipal Social Welfare Development
                (MSWD) Department in Municipal Government
                of Silang, Cavite
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education text-gray-400"
            date="June 2022 - August 2022"
            iconStyle={timelineIconStyle}
            icon={<i className="fa-solid fa-briefcase"></i>}
            contentStyle={timelineContentStyle}
          >
            <div className="md:text-center">
              <h3 className="tracking-wide font-semibold mt-4 text-white">
                Front-end Developer and UI/UX Designer
              </h3>

              <p className="text-white">Internship</p>

              <p className="text-gray-400">
                Phosclay Chemical Manufacturing -
                Dasmariñas, Cavite
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education text-gray-400"
            date="March 2024 - August 2024"
            iconStyle={timelineIconStyle}
            icon={<i className="fa-solid fa-briefcase"></i>}
            contentStyle={timelineContentStyle}
          >
            <div className="md:text-center">
              <h3 className="tracking-wide font-semibold mt-4 text-white">
                Associate Technical Support Engineer
              </h3>

              <p className="text-gray-400">
                Oracle NetSuite
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Certificates */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, key) => (
            <a
              key={key}
              href={cert.image}
              data-fancybox="certificates"
              data-caption={cert.name}
              className="group flex flex-col w-full overflow-hidden rounded-2xl border border-gray-700 hover:border-[#DCFFC2] transition duration-300 bg-[#1F1F1F]"
            >
              <div className="w-full flex overflow-hidden">
                <LazyLoadImage
                  src={cert.image}
                  alt={cert.name}
                  loading="lazy"
                  effect="blur"
                  wrapperClassName="w-full flex"
                  className="w-full h-[220px] object-cover block hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <p className="text-sm text-white font-medium">
                  {cert.certificate}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;