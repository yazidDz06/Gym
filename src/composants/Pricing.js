
import { motion } from "framer-motion";

export default function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-10 px-4 sm:px-6 md:px-10">
      
      {/* Card 1 */}
      <motion.div
        id="card1"
        className="relative bg-blue-950 rounded-lg shadow-lg p-6 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Effet cartes derrière */}
        <div className="absolute -top-2 -left-2 w-full h-full rounded-lg bg-black/20 blur-md -z-10"></div>
        <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-black/10 blur-md -z-20"></div>

        <h1 className="text-2xl text-green-600 font-bold text-center">Starting Pack</h1>
        <p className="text-gray-300">
          Daily contact with the coach, daily tracking of weight, calories, progression,
          assistance in the gym for beginners only to motivate them.
        </p>
        <p className="text-3xl text-white font-bold">149$ /3months</p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        id="card2"
        className="relative bg-[#E5E4E2] rounded-lg shadow-lg p-6 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Effet cartes derrière */}
        <div className="absolute -top-2 -left-2 w-full h-full rounded-lg bg-black/20 blur-md -z-10"></div>
        <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-black/10 blur-md -z-20"></div>

        <h1 className="text-2xl text-gray-800 font-bold text-center">Premium Pack</h1>
        <p className="text-gray-600">
          Daily contact with the coach, daily tracking of weight, calories, progression,
          assistance in the gym throughout the week.
        </p>
        <p className="text-3xl text-gray-600 font-bold">169$/3months</p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        id="card3"
        className="relative bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#E6B800] rounded-lg shadow-lg p-6 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Effet cartes derrière */}
        <div className="absolute -top-2 -left-2 w-full h-full rounded-lg bg-black/20 blur-md -z-10"></div>
        <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-black/10 blur-md -z-20"></div>

        <h1 className="text-2xl text-white drop-shadow-lg font-bold text-center">Elite Pack</h1>
        <p className="text-gray-600">
          Daily assistance in every part, pro training methods, preparing for competitions,
          daily checks-in pictures, for natty and enhanced athletes.
        </p>
        <p className="text-3xl text-gray-700 font-bold">899$/6months</p>
      </motion.div>
    </div>
  );
}
