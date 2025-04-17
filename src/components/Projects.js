import styles from "../assets/styles/components/Projects.module.css";

const projects = [
  {
    title: "Fintech App",
    description:
      "Designed the information architecture and UI, ensuring a seamless and modern fintech experience with enhanced usability and accessibility.",
    image: "https://via.placeholder.com/300x300", // Replace with actual image later
  },
  {
    title: "Traveling Website",
    description:
      "Designed the information architecture and UI, ensuring a seamless and modern fintech experience with enhanced usability and accessibility.",
    image: "https://via.placeholder.com/300x300",
  },
  {
    title: "Traveling Website",
    description:
      "Designed the information architecture and UI, ensuring a seamless and modern fintech experience with enhanced usability and accessibility.",
    image: "https://via.placeholder.com/300x300",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className={`mb-6 ${styles.headerText}`}>Works</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 bg-gray-300 rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className={`mb-2 ${styles.projectTitle}`}>{project.title}</h3>
              <p className={`${styles.projectDescription}`}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
