import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function EmotionalExit({ onNext }) {
  return (
    <motion.section
      className="screen emotional-exit-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65 }}
    >
      <motion.div
        className="emotional-exit-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <p className="emotional-exit-kicker">
          ALRIGHT.
        </p>

        <h2>
          Okay, enough
          <br />
          emotional content.
        </h2>

        <motion.p
          className="emotional-danger"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          This is getting dangerous.
        </motion.p>

        <motion.button
          className="emotional-exit-button"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          whileTap={{ scale: 0.98 }}
        >
          Agreed. Get me out of here.
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>

      <span className="emotional-exit-note">
        emotional vulnerability successfully terminated
      </span>
    </motion.section>
  );
}

export default EmotionalExit;