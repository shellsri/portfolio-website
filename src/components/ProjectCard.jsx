import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  reverse,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        grid
        lg:grid-cols-2
        gap-10
        items-center
        mb-32

        ${
          reverse
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }
      `}
    >
      <div
        className="
        glass
        rounded-3xl
        overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-87.5
          object-cover"
        />
      </div>

      <div>
        <p className="text-purple-400">
          Featured Project
        </p>

        <h3 className="text-4xl font-bold mt-2">
          {project.title}
        </h3>

        <p
          className="
          mt-5
          text-slate-400"
        >
          {project.description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-6"
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-2
              rounded-full
              glass
              text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="
          mt-6
          text-purple-400
          font-semibold"
        >
          {project.metric}
        </div>

        <div
          className="
          flex
          gap-4
          mt-8"
        >
          <a
            href={project.github}
            target="_blank"
            className="
            px-5
            py-3
            rounded-xl
            glass"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="
            px-5
            py-3
            rounded-xl
            bg-purple-700"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}