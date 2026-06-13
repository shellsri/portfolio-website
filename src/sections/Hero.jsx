import { motion } from "framer-motion";
import photo from "../assets/shelly.jpeg";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      grid-bg
      flex
      items-center
      pt-20"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-20
        items-center"
      >
        {/* LEFT SIDE */}

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
            text-purple-400
            text-lg
            font-medium"
          >
            Machine Learning Developer
          </motion.p>

          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mt-4"
          >
            Shelly
          </motion.h1>

          <motion.h2
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
            text-4xl
            md:text-6xl
            font-black
            gradient-text"
          >
            Srivastava
          </motion.h2>

          <p
            className="
            mt-8
            text-slate-400
            text-lg
            max-w-xl
            leading-relaxed"
          >
            B.Tech student at NIT Manipur
            building machine learning systems,
            AI-powered applications,
            sustainability tools and scalable
            web products.
          </p>

          {/* TECH BADGES */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-8"
          >
            {[
            ].map((item) => (
              <span
                key={item}
                className="
                px-4
                py-2
                rounded-full
                glass
                text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
            flex
            gap-4
            mt-10
            flex-wrap"
          >
            <a
              href="#projects"
              className="
              px-6
              py-3
              rounded-xl
              bg-purple-700
              hover:bg-purple-600
              transition
              glow"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
              px-6
              py-3
              rounded-xl
              glass"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
          relative
          h-137.5
          hidden
          lg:flex
          items-center
          justify-center"
        >
          <motion.img
            src={photo}
            alt="Shelly Srivastava"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            w-90
            h-115
            object-cover
            rounded-4xl
            border
            border-white/10
            shadow-2xl"
          />

          {/* FLOATING CARDS */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
            absolute
            top-4
            left-0
            glass
            px-5
            py-3
            rounded-2xl"
          >
            Python
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
            absolute
            top-24
            right-0
            glass
            px-5
            py-3
            rounded-2xl"
          >
            Machine Learning
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            absolute
            bottom-24
            left-5
            glass
            px-5
            py-3
            rounded-2xl"
          >
            NLP
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
            }}
            className="
            absolute
            bottom-6
            right-5
            glass
            px-5
            py-3
            rounded-2xl"
          >
            React
          </motion.div>
        </div>
      </div>
    </section>
  );
}