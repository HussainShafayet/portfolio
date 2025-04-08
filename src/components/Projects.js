// src/components/Projects.jsx
const Projects = () => (
    <section id="projects" className="min-h-screen py-1y px-4 bg-white ">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-2">Description of Project 1.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="mt-2">Description of Project 2.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project 3</h3>
          <p className="mt-2">Description of Project 3.</p>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  