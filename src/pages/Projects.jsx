import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import Axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  const projectURL = import.meta.env.VITE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(projectURL);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid gap-6" id="projects">
      <h1 className="text-[#DCFFC2] text-2xl md:text-3xl">
        Activity / Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, key) => {
          return (
            <div key={key} className="project">
              <a href={project?.preview || "preview"} target="_blank" rel="noopener noreferrer">
              <LazyLoadImage
                  className="cursor-pointer"
                  src={project?.image || "project image"}
                  alt={project?.name || "project image"}
                  loading="lazy"
                  effect="blur"
                  aria-label="Preview project"
                />
              </a>

              <div className="grid gap-2">
                <h2 className="tracking-wide font-semibold text-lg mb-2">
                  {project?.name || "project name"}
                </h2>
                <p className="text-base text-gray-400">
                  Technologies: {project?.technologies || "technologies..."}
                </p>
                <p className="text-base text-gray-400 line-clamp-3">
                  Description: {project?.description || "description..."}
                </p>
              </div>

              <a
                href={project?.sourceCode}
                target="_blank"
                aria-label="Read more about the project"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-link me-2"></i>
                Source Code
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
