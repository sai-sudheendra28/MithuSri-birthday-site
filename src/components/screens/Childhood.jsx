import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "../../data";

function Childhood({ onNext }) {
  return (
    <motion.section
      className="screen childhood-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="childhood-page">
        <motion.div
          className="childhood-intro"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="childhood-year">{siteData.childhoodStart}</p>
          <p className="childhood-kicker">A VERY LONG TIME AGO...</p>

          <h2>Once upon a time...</h2>

          <p className="childhood-lead">
            Two kids lived right opposite each other.
          </p>
        </motion.div>

        <motion.div
          className="lane-scene"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          <div className="house house-left">
            <div className="roof" />
            <div className="house-body">
              <div className="window" />
              <div className="door" />
            </div>
          </div>

          <div className="kid kid-left">
            <div className="kid-head" />
            <div className="kid-body" />
            <div className="kid-arm kid-arm-left" />
            <div className="kid-arm kid-arm-right" />
            <div className="kid-leg kid-leg-left" />
            <div className="kid-leg kid-leg-right" />
          </div>

          <div className="lane">
            <span>the lane</span>
          </div>

          <div className="kid kid-right">
            <div className="kid-head" />
            <div className="kid-body" />
            <div className="kid-arm kid-arm-left" />
            <div className="kid-arm kid-arm-right" />
            <div className="kid-leg kid-leg-left" />
            <div className="kid-leg kid-leg-right" />
          </div>

          <div className="house house-right">
            <div className="roof" />
            <div className="house-body">
              <div className="window" />
              <div className="door" />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="childhood-explanation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Which, naturally, meant a ridiculous amount of playing outside.
        </motion.p>

        <motion.div
          className="childhood-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          <span>No responsibilities.</span>
          <span>No assignments.</span>
          <span>No career problems.</span>
          <span>Probably not much intelligence either.</span>
        </motion.div>

        <motion.p
          className="life-was-good"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.6 }}
        >
          Life was good.
        </motion.p>

        <motion.button
          className="childhood-button"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          whileTap={{ scale: 0.98 }}
        >
          Continue the lore
          <ArrowRight size={16} />
        </motion.button>
      </div>

      <div className="childhood-doodle doodle-one">✦</div>
      <div className="childhood-doodle doodle-two">~</div>
    </motion.section>
  );
}

export default Childhood;