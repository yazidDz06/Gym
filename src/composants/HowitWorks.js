
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="work" className="py-16 bg-gradient-to-b from-black to-gray-400 text-center">
      <h2 className="text-5xl font-mono mb-10 text-white">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl px-6 mx-auto">
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">1. View Plans</h3>
          <p className="text-gray-600">
            Explore our tailored coaching plans and choose the one that fits your goals.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">2. Send Us a Message</h3>
          <p className="text-gray-600">
            Get in touch with us through our contact form or WhatsApp to get started.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">3. Start Achieving Results</h3>
          <p className="text-gray-600">
            Begin your journey with our coaching and see measurable progress step by step.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

