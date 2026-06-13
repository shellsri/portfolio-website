import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Last Mile Emissions Analyzer",
    description:
      "Machine learning platform that predicts CO₂ emissions for last-mile deliveries and provides sustainability recommendations.",
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Streamlit",
    ],
    image: "/projects/emissions.png",
    github:
      "https://github.com/shellsri/last-mile-emissions-analyzer",
    live:
      "https://last-mile-emissions-analyzer-6fdeb77ibshbytjxkpgw6p.streamlit.app/",
    metric: "R² = 0.98",
  },

  {
    title: "Viral-O-Meter",
    description:
      "NLP-powered system that analyzes content virality using sentiment analysis, engagement scoring and viral keyword detection.",
    tech: [
      "Python",
      "NLP",
      "VADER",
      "Streamlit",
    ],
    image: "/projects/viral.png",
    github:
      "https://github.com/shellsri/Viral-O-Meter",
    live:
      "https://viral-o-meter-avi7zyfkxo3wjvm7eeridr.streamlit.app/",
    metric: "Real-Time NLP Analysis",
  },

  {
    title: "Heart Disease Prediction",
    description:
      "Healthcare ML application that predicts heart disease risk using patient health indicators.",
    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Streamlit",
    ],
    image: "/projects/heart.png",
    github:
      "https://github.com/shellsri/heart-disease-prediction",
    live:
      "https://heart-disease-prediction-gwges9rrnuatsmh9abxh36.streamlit.app/",
    metric: "Healthcare AI",
  },

  {
    title: "Smart Classroom & Timetable Scheduler",
    description:
      "Scheduling platform that helps optimize classroom allocation and timetable management.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: "/projects/classroom.png",
    github:
      "https://github.com/shellsri/timetable",
    live:
      "https://tinyurl.com/37acz27f",
    metric: "Scheduling System",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="mb-16">
          <p className="text-purple-400">
            Selected Work
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4">
            A collection of machine
            learning systems,
            analytics platforms and
            full-stack applications
            I've built.
          </p>
        </div>

        {/* Main Layout */}

        <div
          className="
          grid
          lg:grid-cols-[260px_1fr]
          gap-8"
        >
          {/* Sidebar */}

          <div
            className="
            glass
            rounded-3xl
            p-4
            h-fit"
          >
            <div className="mb-5">
              <h3 className="font-bold">
                PROJECTS
              </h3>
            </div>

            <div className="space-y-3">
              {projects.map(
                (
                  project,
                  index
                ) => (
                  <button
                    key={
                      project.title
                    }
                    onClick={() =>
                      setActive(
                        index
                      )
                    }
                    className={`
                      w-full
                      text-left
                      rounded-xl
                      px-4
                      py-3
                      transition-all

                      ${
                        active ===
                        index
                          ? "bg-purple-700"
                          : "hover:bg-white/5"
                      }
                    `}
                  >
                    <div className="text-xs opacity-60">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="font-medium mt-1">
                      {
                        project.title
                      }
                    </div>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Project Content */}

          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              glass
              rounded-3xl
              overflow-hidden"
            >
              <img
                src={
                  project.image
                }
                alt={
                  project.title
                }
                className="
                w-full
                h-[280px]
                object-cover"
              />

              <div className="p-8">
                <div className="text-purple-400 text-sm">
                  FEATURED
                </div>

                <h3
                  className="
                  text-4xl
                  font-bold
                  mt-2"
                >
                  {
                    project.title
                  }
                </h3>

                <p
                  className="
                  mt-5
                  text-slate-400
                  leading-relaxed"
                >
                  {
                    project.description
                  }
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-6"
                >
                  {project.tech.map(
                    (
                      tech
                    ) => (
                      <span
                        key={
                          tech
                        }
                        className="
                        px-3
                        py-2
                        rounded-full
                        bg-purple-700/70
                        text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div
                  className="
                  mt-6
                  text-purple-400
                  font-semibold"
                >
                  {
                    project.metric
                  }
                </div>

                <div
                  className="
                  flex
                  gap-4
                  mt-8
                  flex-wrap"
                >
                  <a
                    href={
                      project.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-5
                    py-3
                    rounded-xl
                    glass"
                  >
                    GitHub
                  </a>

                  <a
                    href={
                      project.live
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-5
                    py-3
                    rounded-xl
                    bg-purple-700
                    hover:bg-purple-600
                    transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}