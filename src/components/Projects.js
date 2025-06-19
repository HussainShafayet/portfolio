import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import gocart from '../assets/images/GoCart.png';
import gallery from '../assets/images/image_gallery.png';
import todo from '../assets/images/todo_app.png';

const projects = [
  {
    title: 'GoCart',
    description:
      'Built a modern e-commerce platform using React with dynamic listings, shopping cart, and seamless API integration.',
    image: gocart,
    tags: ['React', 'Tailwind'],
    github: 'https://github.com/HussainShafayet/ecom',
    demo: 'https://drive.google.com/file/d/1jOW66tm644Ccgdb7saQOlccDAQQSlNLn/view?usp=sharing',
  },
  {
    title: 'Image Gallery',
    description:
      'Simplified image management – upload, delete, and sort effortlessly for a clean and organized UI.',
    image: gallery,
    tags: ['React', 'Django', 'SQLite'],
    github: 'https://github.com/HussainShafayet/image-gallery/tree/master',
    demo: 'https://hussainshafayet.github.io/image-gallery/',
  },
  {
    title: 'Todo App',
    description:
      'Kanban-style Todo app with drag-and-drop tasks across New, Ongoing, and Done. Includes form pre-filling and context menus.',
    image: todo,
    tags: ['React', 'Tailwind'],
    github: 'https://github.com/HussainShafayet/todo-app',
    demo: 'https://hussainshafayet.github.io/todo-app/',
  },
  {
    title: 'Zerocode',
    description:
      'Accounting app with real-time updates, API integration, and modular UI using Ember.js and WebSockets.',
    image: '/project.avif', // Put this in your public folder
    tags: ['Ember.js', 'Ember Data', 'WebSockets'],
    github: 'https://github.com/user/Zerocode',
    demo: 'https://zerocode.example.com',
  },
  {
    title: 'HR System',
    description:
      'HR web app built with Ember.js, focusing on real-time updates and high-performance modular components.',
    image: '/project.avif',
    tags: ['Ember.js', 'WebSockets'],
    github: 'https://github.com/user/hr',
    demo: 'https://hr.example.com',
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-900 bg-white/30 dark:bg-gray-900/50 backdrop-blur-md rounded-xl border border-transparent hover:border-blue-500 shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-t-xl" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 shadow-sm text-sm px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition hover:scale-105"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium transition hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional View All */}
        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectShowcase;
