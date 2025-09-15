import Navbar from "../composants/Navbar";
import { motion } from "framer-motion";
import "./landingpage.css";
import img3 from "../assets/image3.png";
import i1 from "../assets/w.png";
import i2 from "../assets/i1.png";
import i3 from "../assets/i3.png";
import Pricing from "../composants/Pricing";
import CoachingSection from "../composants/CoachingForm";
import HowItWorks from "../composants/HowitWorks";
import Footer from "../composants/Footer";

export default function LandingPage() {

    return (
        <div className="flex flex-col bg-black">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-6 md:p-12 lg:p-24 bg-black">
                {/* Image à gauche */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={img3}
                        alt="Fitness"
                        className="w-3/4 h-auto object-contain"
                    />
                </motion.div>

                {/* Texte à droite */}
                <motion.div
                    className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white leading-snug"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Achieve your goals with daily instructions and advice.
                    </motion.h1>

                    <motion.h3
                        className="text-lg md:text-xl font-semibold text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Health, Fitness, Nutrition, and Mental Well-being.
                    </motion.h3>
                    <a href="#formulaire" >
                        <motion.button
                            className="px-6 py-3 bg-white text-black font-semibold rounded-2xl shadow-md hover:bg-gray-200 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}

                        >
                            Get Started
                        </motion.button>
                    </a>
                </motion.div>
            </div>

            <HowItWorks />

            {/* Features Section */}
            <motion.div
                className="px-6 md:px-12 lg:px-24 py-12 bg-gray-400"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 },
                    },
                }}
            >
                <motion.h1
                    className="text-3xl font-bold text-white mb-8 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Features
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[{ img: i1, title: "Training Tips", text: "We adapt training programs to your level, goal and time." },
                    { img: i2, title: "Nutrition", text: "Adapting macro and micro nutrients, with healthy and tasty recipes." },
                    { img: i3, title: "Motivation", text: "Daily motivation that helps you enjoy your process journey." }
                    ].map((f, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.img
                                src={f.img}
                                alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition duration-500"
                            />
                            <h3 className="text-xl font-bold mb-2 relative z-10">{f.title}</h3>
                            <p className="text-gray-600 relative z-10">{f.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Section Texte */}
            <motion.section
                className="py-20 bg-gray-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex justify-center text-center md:text-center">
                    <div>
                        <motion.h2
                            className="text-3xl font-bold text-blue-500 mt-4 px-80"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Train smart like never
                        </motion.h2>
                        <a href="#plans">
                            <motion.button
                                className=" bg-cyan-500 text-white font-semibold rounded-2xl h-12 mt-4 text-lg shadow-md 
             hover:bg-cyan-400 transition px-10 relative justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Choose your plan
                            </motion.button>
                        </a>
                    </div>
                </div>
            </motion.section>

          {/* Testimonials Section */}
<motion.section
  className="text-center py-10 bg-gray-400"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }}
>
  <motion.h5
    className="text-4xl text-white font-bold"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    What clients say about us
  </motion.h5>

  {/* Grid container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
    {[
      {
        name: "Jack Grenwood",
        text: "It was awesome to work with them daily motivation and professional tracking until I achieved my goal",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "John Doe",
        text: "Very nice work",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Marc Ben",
        text: "Great working team!!!",
        img: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    ].map((c, idx) => (
      <motion.div
        key={idx}
        className="bg-gradient-to-br from-slate-500 to-purple-500 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: idx * 0.3 }}
      >
        <img
          src={c.img}
          alt={c.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white mb-4"
        />
        <h4 className="text-2xl font-bold">{c.name}</h4>
        <p className="font-semibold mt-2 text-white">{c.text}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

            <section id="plans" className="bg-gradient-to-b from-gray-400 to-black py-20">
                <h1 className="flex justify-center text-4xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-700 bg-clip-text text-transparent">Our Packs</h1>
                <Pricing />

            </section>
            <section id="formulaire" className="bg-gradient-to-b from-black to-gray-400 py-20">
                <CoachingSection />

            </section>

            <Footer />


        </div>
    );
}

