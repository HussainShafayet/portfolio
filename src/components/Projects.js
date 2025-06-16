import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Fintech App',
    description:
      'Modern UI and architecture for scalable banking solution.',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/user/project',
    demo: 'https://fintech.example.com',
  },
  {
    title: 'Travel Website',
    description: 'Beautiful travel booking app with API integration.Beautiful travel booking app with API integration.Beautiful travel booking app with API integration.',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['Vue', 'Nuxt', 'Firebase'],
    github: 'https://github.com/user/travel',
    demo: 'https://travel.example.com',
  },
   {
    title: 'Fintech App',
    description:
      'Modern UI and architecture for scalable banking solution.',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/user/project',
    demo: 'https://fintech.example.com',
  },
  {
    title: 'Travel Website',
    description: 'Beautiful travel booking app with API integration.Beautiful travel booking app with API integration.Beautiful travel booking app with API integration.',
    image: 'https://support.rebrandly.com/hc/article_attachments/17480600761373',
    tags: ['Vue', 'Nuxt', 'Firebase'],
    github: 'https://github.com/user/travel',
    demo: 'https://travel.example.com',
  },
  // Add more projects as needed...
];

const ProjectShowcase = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800"
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
