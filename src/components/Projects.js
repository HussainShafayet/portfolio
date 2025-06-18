import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import gocart from '../assets/images/GoCart.png';
import gallery from '../assets/images/image_gallery.png';
import todo from '../assets/images/todo_app.png';



const projects = [
  {
    title: 'GoCart',
    description:
      "Built a modern and responsive e-commerce platform using React, featuring dynamic product listings, shop-ping cart functionality, and seamless user experience. Integrated with APIs for real-time data handling and optimized for performance and accessibility.",
    image: gocart,
    tags: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/HussainShafayet/ecom',
    demo: 'https://drive.google.com/file/d/1jOW66tm644Ccgdb7saQOlccDAQQSlNLn/view?usp=sharing',
  },
  {
    title: 'Image Gallery',
    description: 'Simplify image management – upload, delete, and sort effortlessly for an organized gallery.',
    image: gallery,
    tags: ['React', 'Django', 'sq3lite'],
    github: 'https://github.com/HussainShafayet/image-gallery/tree/master',
    demo: 'https://hussainshafayet.github.io/image-gallery/',
  },
   {
    title: 'Todo App',
    description:
      'A Todo List Application built with React.js featuring a Kanban-style interface with three distinct columns: New, Ongoing, and Done. The app allows users to manage tasks through different stages of completion with added functionalities like context menus, date pickers, and form pre-filling.',
    image: todo,
    tags: ['React', 'Tailwind'],
    github: 'https://github.com/HussainShafayet/todo-app',
    demo: 'https://hussainshafayet.github.io/todo-app/',
  },
  {
    title: 'Zerocode',
    description: 'Developed an accounting system to manage financial records and transactions. Utilized Ember.js for a re-sponsive and modular front-end. Integrated APIs using Ember Data for seamless data management. Managed live notifications and real-time updates with WebSockets. Focused on creating a user-friendly interface and optimized performance',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['Ember.js', 'Ember Data', 'WebSockets'],
    github: 'https://github.com/user/Zerocode',
    demo: 'https://Zerocode.example.com',
  },
  {
    title: 'HR',
    description: 'Developed an HR web app with Ember.js, utilizing Ember Data for API management. Implemented real-time updates via WebSockets. Focused on modular design, performance optimization, and Agile practices.',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['Ember.js', 'WebSockets'],
    github: 'https://github.com/user/hr',
    demo: 'https://hr.example.com',
  },
  // Add more projects as needed...
];

const ProjectShowcase = () => {
  return (
    <section
      id="projects"
      className="py-16"
    >
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
              className="bg-white/30 dark:bg-gray-900/50 backdrop-blur-md rounded-xl border border-transparent hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-300 dark:shadow-black/50 hover:dark:shadow-blue-900 overflow-hidden group"
            >
              <div className="relative rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-t-xl" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-default text-sm px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-300"
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
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
