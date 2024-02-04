import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";
import Axios from "axios";
import "react-vertical-timeline-component/style.min.css";
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
function About() {
  const [certificates, setCertificates] = useState([]);

  const certURL = import.meta.env.VITE_URL_CERT;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(certURL);
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid gap-20 lg:gap-28" id="about">
      {/*Education  */}
      <div className="grid gap-6">
        <div className="grid gap-4">
          <h1 className="text-[#DCFFC2] text-2xl md:text-3xl">About</h1>
          <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
            Educational Attainment
          </h2>
        </div>
        <div>
          <VerticalTimeline lineColor="#9ca3af">
            <VerticalTimelineElement
              className="vertical-timeline-element--education text-gray-400 "
              date="2017 - 2019"
              iconStyle={{
                background: "#1F1F1F",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitBoxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                boxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={<i className="fa-solid fa-graduation-cap"></i>}
              contentStyle={{
                background: "transparent",
                border: "1px solid #374151",
              }}
            >
              <div className="md:text-center">
                <h3 className="tracking-wide font-semibold mt-4 text-white">
                  Fiat Lux Academe - Dasmariñas Cavite
                </h3>
                <p className="text-base">Accountancy Business & Management</p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education text-gray-400"
              date="2019 - 2023"
              iconStyle={{
                background: "#1F1F1F",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitBoxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                boxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={<i className="fa-solid fa-graduation-cap text-white"></i>}
              contentStyle={{
                background: "transparent",
                border: "1px solid #374151",
              }}
            >
              <div className="md:text-center">
                <h3 className="tracking-wide font-semibold text-white  mt-4">
                  Emilio Aguinaldo College - Cavite
                </h3>
                <p>Bachelor of Science in Computer Science</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      {/* Skills */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Skills
        </h2>
        <div className="grid grid-cols-4 place-items-center gap-4">
          <LazyLoadImage
            src={ReactLogo}
            alt="React Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={ReactLogo}
            effect="blur"
          />
          <LazyLoadImage
            src={JS}
            alt="JavaScript Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={JS}
            effect="blur"
          />
          <LazyLoadImage
            src={HTML}
            alt="Hypertext Markup Language Logo"
            width="35px"
            height="40px"
            loading="lazy"
            placeholderSrc={HTML}
            effect="blur"
          />
          <LazyLoadImage
            src={CSS}
            alt="Cascading Style Sheet Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={CSS}
            effect="blur"
          />

          <LazyLoadImage
            src={Mysql}
            alt="MySQL Logo"
            width="60px"
            height="40px"
            loading="lazy"
            placeholderSrc={Mysql}
            effect="blur"
          />
          <LazyLoadImage
            src={Mongodb}
            alt="MongoDB Logo"
            width="40px"
            height="50px"
            loading="lazy"
            placeholderSrc={Mongodb}
            effect="blur"
          />
          <LazyLoadImage
            src={Bootstrap}
            alt="Bootstrap Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={Bootstrap}
            effect="blur"
          />
          <LazyLoadImage
            src={Tailwind}
            alt="Tailwind CSS Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={Tailwind}
            effect="blur"
          />
          <LazyLoadImage
            src={Figma}
            alt="Figma Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={Figma}
            effect="blur"
          />
          <LazyLoadImage
            src={Canva}
            alt="Canva Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={Canva}
            effect="blur"
          />
          <LazyLoadImage
            src={PS}
            alt="Photoshop Logo"
            width="40px"
            height="40px"
            loading="lazy"
            placeholderSrc={PS}
            effect="blur"
          />
        </div>
      </div>

      {/*Education  */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Experience
        </h2>
        <div>
          <VerticalTimeline lineColor="#374151">
            <VerticalTimelineElement
              className="vertical-timeline-element--education text-gray-400"
              date="January 2019"
              iconStyle={{
                background: "#1F1F1F",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitBoxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                boxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={<i className="fa-solid fa-briefcase"></i>}
              contentStyle={{
                background: "transparent",
                border: "1px solid #374151",
              }}
            >
              <div className="md:text-center ">
                <h3 className="tracking-wide font-semibold mt-4 text-white">
                  Social Worker
                </h3>
                <p className="text-white">Internship</p>
                <p className="text-gray-400">
                  Municipal Social Welfare Development (MSWD) Department in
                  Municipal Government of Silang, Cavite
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education text-gray-400"
              date="June 2022 - August 2022"
              iconStyle={{
                background: "#1F1F1F",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitBoxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                boxShadow:
                  "0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              icon={<i className="fa-solid fa-computer "></i>}
              contentStyle={{
                background: "transparent",
                border: "1px solid #374151",
              }}
            >
              <div className="md:text-center">
                <h3 className="tracking-wide font-semibold mt-4 text-white">
                  Front-end Developer and UI/UX Designer
                </h3>
                <p className="text-white">Internship</p>
                <p>Phosclay Chemical Manufacturing - Dasmariñas, Cavite</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      {/* Certificate */}
      <div className="grid gap-6">
        <h2 className="text-start xl:text-center xl:tracking-wide font-medium text-lg md:text-xl">
          Certificates
        </h2>
        <div className="grid grid-cols-3 grid-md-cols-2 place-items-center gap-4">
          {certificates.map((cert, key) => {
            return (
              <div key={key}>
                <a
                  href={cert?.image || "preview"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImage
                    src={cert?.image || "certificate image"}
                    alt={cert?.name || "certificate image"}
                    onClick={cert?.image}
                    loading="lazy"
                    effect="blur"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
