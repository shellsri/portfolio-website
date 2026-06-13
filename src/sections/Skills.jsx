import SectionTitle from "../components/SectionTitle";

const skillGroups = {
  "Programming Languages": [
    "C++",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
  ],

  "Machine Learning & Data": [
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Feature Engineering",
    "Data Cleaning",
    "EDA",
    "Regression",
    "Classification",
    "NLP",
    "VADER Sentiment Analysis",
  ],

  "Frontend Development": [
    "React",
    "Vite",
    "Tailwind CSS",
    "Responsive Design",
    "Framer Motion",
    "Streamlit",
  ],

  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JSON",
  ],

  Databases: [
    "MongoDB",
    "MySQL",
  ],

  "Cloud & Deployment": [
    "AWS S3",
    "AWS CloudFront",
    "GitHub Pages",
    "Vercel",
    "Streamlit Cloud",
  ],

  "Developer Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "npm",
  ],

  "Core CS": [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Problem Solving",
    "Debugging",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Technologies I've Used To Build Real Projects"
          title="Skills & Technologies"
        />

        <div
          className="
          grid
          md:grid-cols-2
          gap-8"
        >
          {Object.entries(skillGroups).map(
            ([title, skills]) => (
              <div
                key={title}
                className="
                glass
                rounded-3xl
                p-8
                hover:-translate-y-1
                transition-all"
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-6"
                >
                  {title}
                </h3>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3"
                >
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-purple-700/80
                      hover:bg-purple-600
                      transition-all
                      text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}