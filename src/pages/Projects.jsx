import { LazyLoadImage } from "react-lazy-load-image-component";

import MapaEmiliano from "../assets/projects/mapaemiliano2.webp";
import Restaurant from "../assets/projects/resto.webp";
import Quiz from "../assets/projects/quiz.webp";
import Scoreboard from "../assets/projects/scoreboard.webp";
import BMI from "../assets/projects/bmi.webp";
import Template from "../assets/projects/template1.webp";
import WatchShop from "../assets/projects/watchShop.webp";
import TodoList from "../assets/projects/todo.webp";

const placeholder = (text) =>
  `https://placehold.co/600x400/1F1F1F/DCFFC2?text=${encodeURIComponent(
    text
  )}`;

function Projects() {
  const projects = [
    {
      name: "Mapa-Emiliano",
      image:
        MapaEmiliano ||
        placeholder("Mapa-Emiliano"),
      preview: "https://mapaemiliano.github.io/",
      sourceCode:
        "https://github.com/MapaEmiliano/mapaemiliano.github.io",
      technologies:
        "JavaScript, HTML, CSS, Bootstrap, Firebase",
      description:
        "Interactive school map with 2D, 3D and 360 panoramic views.",
    },

    {
      name: "Restaurant Reservation Template",
      image:
        Restaurant ||
        placeholder("Restaurant Template"),
      preview: "https://j-maica.github.io/restaurant/",
      sourceCode:
        "https://github.com/J-Maica/restaurant",
      technologies:
        "HTML, CSS, Tailwind and ReactJS",
      description:
        "Restaurant template showcasing menu and reservation form.",
    },

    {
      name: "Quiz",
      image:
        Quiz || placeholder("Quiz App"),
      preview: "https://j-maica.github.io/quiz-app/",
      sourceCode:
        "https://github.com/J-Maica/quiz-app",
      technologies:
        "HTML, CSS, Bootstrap and JavaScript",
      description:
        "Simple quiz application project.",
    },

    {
      name: "Scoreboard",
      image:
        Scoreboard ||
        placeholder("Scoreboard"),
      preview:
        "https://j-maica.github.io/scoreboard/",
      sourceCode:
        "https://github.com/J-Maica/scoreboard",
      technologies:
        "HTML, CSS and JavaScript",
      description:
        "Simple JavaScript scoreboard project.",
    },

    {
      name: "Calculator",
      image:
        placeholder("Calculator"),
      preview:
        "https://j-maica.github.io/basic-calculator/",
      sourceCode:
        "https://github.com/J-Maica/basic-calculator",
      technologies:
        "HTML, CSS, JavaScript and mathjs",
      description:
        "Basic calculator web application using JavaScript.",
    },

    {
      name: "BMI Calculator",
      image:
        BMI ||
        placeholder("BMI Calculator"),
      preview:
        "https://j-maica.github.io/bmi-calculator/",
      sourceCode:
        "https://github.com/J-Maica/bmi-calculator",
      technologies:
        "HTML, CSS, Bootstrap and JavaScript",
      description:
        "BMI calculator with color-coded results.",
    },

    {
      name: "Bootstrap Template",
      image:
        Template ||
        placeholder("Bootstrap Template"),
      preview:
        "https://j-maica.github.io/bootstrap-template/",
      sourceCode:
        "https://github.com/J-Maica/bootstrap-template",
      technologies:
        "HTML, CSS, Bootstrap and JavaScript",
      description:
        "Responsive Bootstrap template project.",
    },

    {
      name: "WatchShop",
      image:
        WatchShop ||
        placeholder("WatchShop"),
      preview:
        "https://j-maica.github.io/watchShop/",
      sourceCode:
        "https://github.com/J-Maica/watchShop",
      technologies:
        "HTML, Bootstrap and ReactJS",
      description:
        "ReactJS practice e-commerce watch shop project.",
    },

    {
      name: "TodoList",
      image:
        TodoList ||
        placeholder("Todo List"),
      preview:
        "https://j-maica.github.io/React-TodoList/",
      sourceCode:
        "https://github.com/J-Maica/React-TodoList",
      technologies:
        "ReactJS, HTML, CSS and Bootstrap",
      description:
        "Simple React Todo List application.",
    },

    {
      name:
        "Analyzing the Operating Performance for Ecommerce Company",
      image:
        placeholder("Ecommerce BI"),
      preview:
        "https://github.com/J-Maica/Power-BI-Ecommerce",
      sourceCode:
        "https://github.com/J-Maica/Power-BI-Ecommerce",
      technologies: "MS Power BI",
      description:
        "Complete ecommerce operating performance analysis dashboard.",
    },

    {
      name: 'Power BI: "HR Dashboard"',
      image:
        placeholder("HR Dashboard"),
      preview:
        "https://github.com/J-Maica/Power-BI-HR-Dashboard",
      sourceCode:
        "https://github.com/J-Maica/Power-BI-HR-Dashboard",
      technologies: "MS Power BI",
      description:
        "Employee data visualization dashboard using Power BI.",
    },

    {
      name: "Power BI: Sales Report",
      image:
        placeholder("Sales Report"),
      preview:
        "https://github.com/J-Maica/Power-BI-SALES-REPORT",
      sourceCode:
        "https://github.com/J-Maica/Power-BI-SALES-REPORT",
      technologies: "MS Power BI",
      description:
        "Interactive sales report dashboard using Power BI.",
    },
  ];

  return (
    <section className="grid gap-6" id="projects">
      <h1 className="text-[#DCFFC2] text-2xl md:text-3xl">
        Activity / Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, key) => (
          <div
            key={key}
            className="bg-[#1F1F1F] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#DCFFC2] transition duration-300 flex flex-col h-full"
          >
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="w-full h-[220px] overflow-hidden">
                <LazyLoadImage
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  effect="blur"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full min-w-full object-cover hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.target.src = placeholder(
                      project.name
                    );
                  }}
                />
              </div>
            </a>

            <div className="p-5 grid gap-3 flex-1">
              <h2 className="tracking-wide font-semibold text-lg text-white">
                {project.name}
              </h2>

              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">
                  Technologies:
                </span>{" "}
                {project.technologies}
              </p>

              <p className="text-sm text-gray-400 line-clamp-3">
                <span className="text-white font-medium">
                  Description:
                </span>{" "}
                {project.description}
              </p>

              <div className="flex gap-4 pt-2 mt-auto">
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#DCFFC2] hover:text-white transition duration-300"
                >
                  <i className="fa-solid fa-eye me-2"></i>
                  Preview
                </a>

                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#DCFFC2] hover:text-white transition duration-300"
                >
                  <i className="fa-brands fa-github me-2"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;