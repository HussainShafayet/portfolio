import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-indigo-50 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 border-t border-indigo-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Brand & Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">kinbenNaki</h2>
          <p className="text-sm leading-relaxed">
            Showcasing passion, projects, and performance. Crafted with care using React & Tailwind.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">Explore</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col justify-between space-y-6 sm:space-y-0">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">Connect</h3>
            <div className="flex gap-4">
              {[
                { href: "https://linkedin.com/in/yourprofile", icon: Linkedin },
                { href: "https://twitter.com/yourprofile", icon: Twitter },
                { href: "https://github.com/yourprofile", icon: Github },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-transform transform hover:-translate-y-1"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 sm:mt-0">
            © {year} kinbenNaki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
