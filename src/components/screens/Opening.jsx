import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Opening({ onNext }) {
  return (
    <motion.section
      className="screen opening-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
    >
      <div className="opening-grain" />

      <div className="opening-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A SMALL BIRTHDAY EXPERIMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Hey <span>Mithu</span>.
        </motion.h1>

        <motion.div
          className="opening-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
        >
          <p>So... apparently it's your birthday.</p>

          <p>
            I was going to send you a normal birthday message like a normal
            person.
          </p>

          <p className="opening-punchline">
            But that sounded boring.
          </p>
        </motion.div>

        <motion.button
          className="primary-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          So I made something instead
          <ArrowRight size={17} strokeWidth={1.8} />
        </motion.button>
      </div>

      <motion.div
        className="opening-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        probably a questionable use of my time
      </motion.div>
    </motion.section>
  );
}

export default Opening;