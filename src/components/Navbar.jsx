export default function Navbar() {
  const goTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      nav-blur"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        justify-between
        items-center"
      >
        <h1
          className="
          font-black
          text-xl
          gradient-text"
        >
          SHELLY.DEV
        </h1>

        <div
          className="
          flex
          gap-8
          text-sm
          font-medium"
        >
          <button onClick={() => goTo("projects")}>
            Projects
          </button>

          <button onClick={() => goTo("skills")}>
            Skills
          </button>

          <button onClick={() => goTo("contact")}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}