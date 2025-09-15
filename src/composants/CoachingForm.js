import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CoachingSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    pack: "",
    goals: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification champs vides
    for (let key in formData) {
      if (!formData[key].trim()) {
        toast.error("Please fill in all fields ❌");
        return;
      }
    }

    // Envoi à l’admin
    emailjs
      .send("service_u17g9nw", "template_ckr28ee", formData, "lhqXmhf7j_AxGWbfZ")
      .then(
        (result) => {
          console.log("Admin email sent:", result.text);
        },
        (error) => {
          console.error("Error:", error.text);
        }
      );

    // Auto-reply au client
    emailjs
      .send("service_u17g9nw", "template_1x2aaf4", formData, "lhqXmhf7j_AxGWbfZ")
      .then(
        (result) => {
          console.log("Reply email sent:", result.text);
          toast.success("Signed up successfully ✅");
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("Sign up failed ❌");
        }
      );

    setFormData({ name: "", email: "", whatsapp: "", pack: "", goals: "" });
  };

  const faqs = [
    {
      question: "What results can I expect from coaching?",
      answer:
        "Results depend on your goals, but most of our clients notice improved discipline, weight loss, or muscle gain within the first 3 months.",
    },
    {
      question: "Is coaching suitable for beginners?",
      answer:
        "Yes, we have specific programs designed for beginners to help you progress step by step safely.",
    },
    {
      question: "How long does each session last?",
      answer:
        "A session usually lasts between 45 minutes and 1 hour, depending on your program and level.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 ">
      {/* Form */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Register for Coaching
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            value={formData.whatsapp}
            onChange={handleChange}
            name="whatsapp"
            type="tel"
            placeholder="Whatsapp Number"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            value={formData.pack}
            onChange={handleChange}
            name="pack"
            type="text"
            placeholder="Coaching pack"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            value={formData.goals}
            onChange={handleChange}
            name="goals"
            placeholder="Your goals (e.g., weight loss, muscle gain...)"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold rounded-lg py-3 hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
      </motion.div>

      {/* FAQ */}
      <motion.div
        className="bg-gray-50 shadow-lg rounded-xl p-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  -
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-600 text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Toast container */}
      <ToastContainer position="top-center" />
    </div>
  );
}
