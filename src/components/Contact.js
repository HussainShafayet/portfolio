import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook,
  CheckCircle, AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = form) => {
    const temp = { ...errors };
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
    setForm((prev) => ({ ...prev, [name]: value }));
    validate({ [name]: value });
  };

  const handleFocus = (e) => {
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await fetch("https://formspree.io/f/xwpbqdvk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setIsSubmitting(false);
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      }
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-12 text-indigo-800 dark:text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 text-indigo-900 dark:text-indigo-200"
        >
          <p className="text-lg leading-relaxed">
            Feel free to reach out via the form or connect with me on social media.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: <Mail className="text-indigo-600" />,
                label: "Email",
                value: (
                  <a href="mailto:shafayetsec09@gmail.com" className="hover:underline">
                    shafayetsec09@gmail.com
                  </a>
                ),
              },
              {
                icon: <Phone className="text-indigo-600" />,
                label: "Phone",
                value: (
                  <a href="tel:+8801925890091" className="hover:underline">
                    +8801925890091
                  </a>
                ),
              },
              {
                icon: <MapPin className="text-indigo-600" />,
                label: "Location",
                value: "Dhaka, Bangladesh",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
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
              { href: "https://www.linkedin.com/in/hussainshafayet/", icon: <Linkedin size={26} />, label: "LinkedIn" },
              { href: "https://x.com/imShafayet09", icon: <Twitter size={26} />, label: "Twitter" },
              { href: "https://github.com/HussainShafayet", icon: <Github size={26} />, label: "GitHub" },
              { href: "https://www.facebook.com/Shafayet91/", icon: <Facebook size={26} />, label: "Facebook" },
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

        {/* Right Column - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          noValidate
        >
          {["name", "email"].map((field) => (
            <div key={field} className="relative mb-6">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={form[field]}
                onChange={handleChange}
                onFocus={handleFocus}
                disabled={isSubmitting}
                className={`peer w-full p-3 border-b-2 bg-transparent outline-none transition-colors ${
                  errors[field]
                    ? "border-red-500 focus:border-red-600"
                    : "border-indigo-300 focus:border-indigo-600"
                }`}
                aria-invalid={!!errors[field]}
                aria-describedby={`${field}-error`}
              />
              {errors[field] ? (
                <p id={`${field}-error`} className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors[field]}
                </p>
              ) : (
                form[field] && (
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
          ))}

          {/* Message Field */}
          <div className="relative mb-6">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              disabled={isSubmitting}
              className={`peer w-full p-3 border-b-2 resize-none bg-transparent outline-none transition-colors ${
                errors.message
                  ? "border-red-500 focus:border-red-600"
                  : "border-indigo-300 focus:border-indigo-600"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message ? (
              <p id="message-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

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
