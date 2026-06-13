export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-purple-400">
          Get In Touch
        </p>

        <h2
          className="
          text-5xl
          font-bold
          mt-2"
        >
          Let's Build Something
        </h2>

        <p
          className="
          mt-6
          text-slate-400
          max-w-2xl"
        >
          Interested in machine
          learning, open source,
          internships, or collaboration?
          I'd love to connect.
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          mt-12"
        >
          <a
            href="https://github.com/shellsri"
            target="_blank"
            className="
            glass
            rounded-3xl
            p-8"
          >
            <h3 className="font-bold">
              GitHub
            </h3>

            <p className="mt-3 text-slate-400">
              github.com/shellsri
            </p>
          </a>

          <a
            href="https://linkedin.com/in/shelly-srivastava-"
            target="_blank"
            className="
            glass
            rounded-3xl
            p-8"
          >
            <h3 className="font-bold">
              LinkedIn
            </h3>

            <p className="mt-3 text-slate-400">
              Connect with me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}