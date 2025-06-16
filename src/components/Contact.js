//import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, CheckCircle } from "lucide-react";
import {useState} from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Fake API call
      await new Promise((r) => setTimeout(r, 2000));
      setIsSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

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
            {[{
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
            },].map(({ icon, label, value }) => (
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
            {[{
              href: "https://linkedin.com/in/yourprofile",
              icon: <Linkedin size={28} />,
              label: "LinkedIn",
            },{
              href: "https://twitter.com/yourprofile",
              icon: <Twitter size={28} />,
              label: "Twitter",
            },{
              href: "https://github.com/yourprofile",
              icon: <Github size={28} />,
              label: "GitHub",
            }].map(({ href, icon, label }) => (
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
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
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
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11v4H9v-4h2zm0 6v2H9v-2h2z" />
                </svg>
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

          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
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
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11v4H9v-4h2zm0 6v2H9v-2h2z" />
                </svg>
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

          <div className="relative mb-6">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
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
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11v4H9v-4h2zm0 6v2H9v-2h2z" />
                </svg>
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

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
              isSubmitting ? "bg-indigo-400 cursor-wait" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Send Message"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center font-medium"
                role="alert"
                onAnimationComplete={() => setTimeout(() => setSuccess(false), 3000)}
              >
                <CheckCircle className="inline mr-1" /> Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
