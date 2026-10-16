import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteData } from "../../data";

function Timeline({ onNext }) {
  const years = ["2016", "2017", "2018"];

  return (
    <motion.section
      className="screen timeline-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-content">
        <motion.div
          className="timeline-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="timeline-kicker">AND THEN...</p>

          <h2>Life happened.</h2>

          <div className="life-changes">
            <span>Different places.</span>
            <span>Different people.</span>
            <span>Different lives.</span>
          </div>

          <p className="time-passed">
            And a <em>LOT</em> of time passed.
          </p>
        </motion.div>

        <motion.div
          className="year-journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          {years.map((year, index) => (
            <div className="year-stop" key={year}>
              <span className="year-dot" />
              <span>{year}</span>

              {index < years.length - 1 && (
                <div className="year-line" />
              )}
            </div>
          ))}

          <div className="lost-years">
            <span className="lost-line" />
            <span className="lost-dots">· · · · · ·</span>
            <small>2019 — 2025</small>
            <span className="lost-line" />
          </div>

          <motion.div
            className="year-2026"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.25,
              duration: 0.5,
            }}
          >
            <span className="year-2026-dot" />
            <span>{siteData.reunionYear}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="reconnection-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.55,
            duration: 0.6,
          }}
        >
          <div className="notification-icon">
            <MessageCircle size={17} strokeWidth={1.8} />
          </div>

          <div className="notification-copy">
            <span className="notification-label">
              UNEXPECTED NOTIFICATION
            </span>

            <strong>
              {siteData.herName} has entered the chat.
            </strong>
          </div>
        </motion.div>

        <motion.div
          className="timeline-ending"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.95,
            duration: 0.7,
          }}
        >
          <p>
            And somehow... after all those years,
            <br />
            we started talking again.
          </p>

          <span>Unexpected plot twist, honestly.</span>
        </motion.div>

        <motion.button
          className="timeline-button"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25 }}
          whileTap={{ scale: 0.98 }}
        >
          Season 2
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Timeline;