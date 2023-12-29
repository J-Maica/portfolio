import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "../App";
import { useContext } from "react";
import React from "react";
import Profile from "../assets/me.webp";

function Home() {

  const {navigateTo} = useContext(AppContext)
  return (
    <section className="grid gap-4 lg:gap-0 lg:grid-cols-2 lg:py-44" id="home">
      <div className="p-4 grid gap-6 md:gap-12 lg:gap-8 text-center">
        <div className="flex gap-4  text-5xl md:text-8xl font-bold justify-center -tracking-wide">
          <h1 className="text-[#DCFFC2]">Jean</h1>
          <h1>Maica</h1>
        </div>

        <div>
          <p className="text-base leading-7  md:leading-9 text-gray-400 ">
            Hi, I am Jean Maica a passionate web developer. My skills focus on
            development and UI/UX design.
          </p>

          {/* social media */}
          <div className="text-gray-400 mt-2  text-base lg:text-lg flex justify-center gap-4">
            <a className="custom-color" href="https://github.com/J-Maica" aria-label="View github profile">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="custom-color" href="" aria-label="View faceboook profile">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="custom-color" href="https://www.instagram.com/maickymaics/" aria-label="View instagram profile">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="custom-color" href="https://mail.google.com/mail/?view=cm&fs=1&to=jmtdelremedio@gmail.com" aria-label="email jmtdelremedio@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a className="custom-color" href="https://www.linkedin.com/in/jean-maica-d-014146173/" aria-label="View linkedin profile">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div onClick={() => navigateTo("about")} className="flex gap-4 justify-center items-center opacity-70 font-light -tracking-tighter hover:font-normal cursor-pointer text-sm text-gray-400 custom-color">
          <i className="fa-solid fa-arrow-right"></i>
          <p>See more about me</p>
        </div>
      </div>
      <div className="grid place-content-center">
        <LazyLoadImage
          src={Profile}
          alt="profile"
          className="w-[230px] md:w-[300px] lg:w-full"
          width={"100%"}
          loading="lazy"
          placeholderSrc={Profile}
          effect="blur"
        />
      </div>
    </section>
  );
}

export default Home;
