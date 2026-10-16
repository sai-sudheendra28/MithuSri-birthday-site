import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const terms = [
  "This website has absolutely no useful purpose.",
  "No, you are not getting ₹1 crore at the end.",
  "Yes, I actually spent time making this.",
  "No, I don't know why either.",
];

function Disclaimer({ onNext }) {
  return (
    <motion.section
      className="screen disclaimer-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="disclaimer-paper"
        initial={{ opacity: 0, y: 25, rotate: -0.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.15, duration: 0.65 }}
      >
        <div className="paper-topline">
          <span>BIRTHDAY DEPARTMENT</span>
          <span>FORM 02-B</span>
        </div>

        <div className="disclaimer-heading">
          <p className="paper-label">IMPORTANT NOTICE</p>

          <h2>Before we begin...</h2>

          <p>There are a few things you should know.</p>
        </div>

        <div className="terms-list">
          {terms.map((term, index) => (
            <motion.div
              className="term-row"
              key={term}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.55 + index * 0.12,
                duration: 0.4,
              }}
            >
              <span className="term-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{term}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="paper-button"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          whileTap={{ scale: 0.98 }}
        >
          I accept these extremely serious terms
          <ArrowRight size={16} />
        </motion.button>

        <motion.p
          className="legal-joke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.45 }}
        >
          By clicking this button, you legally agree that this website is
          amazing.
        </motion.p>

        <div className="fake-signature">
          definitely a legal document
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Disclaimer;