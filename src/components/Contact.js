import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = form) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Please enter your name.";
    if ("email" in fieldValues)
      temp.email = /^\S+@\S+\.\S+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "Message cannot be empty.";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate({ [name]: value });
  };

  // Clear error on input focus
  const handleFocus = (e) => {
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 2000));
      setIsSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  // Auto-hide success message after 3s
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="mx-auto p-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 shadow-xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-12 text-indigo-800 dark:text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 text-indigo-900 dark:text-indigo-200"
        >
          <p className="text-lg">
            Feel free to reach out via the form or connect on social media.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: <Mail className="text-indigo-600" />,
                label: "Email",
                value: (
                  <a
                    href="mailto:youremail@example.com"
                    className="hover:underline"
                  >
                    youremail@example.com
                  </a>
                ),
              },
              {
                icon: <Phone className="text-indigo-600" />,
                label: "Phone",
                value: (
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-890
                  </a>
                ),
              },
              {
                icon: <MapPin className="text-indigo-600" />,
                label: "Location",
                value: "New York, USA",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                {icon}
                <div>
                  <h4 className="font-semibold">{label}</h4>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 text-indigo-600 dark:text-indigo-300">
            {[
              {
                href: "https://linkedin.com/in/yourprofile",
                icon: <Linkedin size={28} />,
                label: "LinkedIn",
              },
              {
                href: "https://twitter.com/yourprofile",
                icon: <Twitter size={28} />,
                label: "Twitter",
              },
              {
                href: "https://github.com/yourprofile",
                icon: <Github size={28} />,
                label: "GitHub",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-indigo-800 dark:hover:text-indigo-400 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          noValidate
        >
          {/* Name */}
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              disabled={isSubmitting}
              className={`peer w-full p-3 border-b-2 outline-none transition-colors ${
                errors.name
                  ? "border-red-500 focus:border-red-600"
                  : "border-indigo-300 focus:border-indigo-600"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name ? (
              <p
                id="name-error"
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4 text-red-600" />
                {errors.name}
              </p>
            ) : (
              form.name && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute right-2 top-3 text-green-500"
                >
                  <CheckCircle size={20} />
                </motion.div>
              )
            )}
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              disabled={isSubmitting}
              className={`peer w-full p-3 border-b-2 outline-none transition-colors ${
                errors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-indigo-300 focus:border-indigo-600"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email ? (
              <p
                id="email-error"
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4 text-red-600" />
                {errors.email}
              </p>
            ) : (
              form.email && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute right-2 top-3 text-green-500"
                >
                  <CheckCircle size={20} />
                </motion.div>
              )
            )}
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              disabled={isSubmitting}
              className={`peer w-full p-3 border-b-2 resize-none outline-none transition-colors ${
                errors.message
                  ? "border-red-500 focus:border-red-600"
                  : "border-indigo-300 focus:border-indigo-600"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message ? (
              <p
                id="message-error"
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4 text-red-600" />
                {errors.message}
              </p>
            ) : (
              form.message && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute right-2 top-3 text-green-500"
                >
                  <CheckCircle size={20} />
                </motion.div>
              )
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          <AnimatePresence>
            {success && (
              <motion.div
                className="mt-6 text-green-600 font-semibold text-center flex items-center justify-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                role="alert"
                aria-live="assertive"
              >
                <CheckCircle />
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
