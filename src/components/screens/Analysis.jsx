import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";

function Analysis({ onNext }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing analysis...");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timers = [];

    const update = (delay, value, text) => {
      timers.push(
        setTimeout(() => {
          setProgress(value);
          setStatus(text);
        }, delay)
      );
    };

    update(400, 14, "Reading conversations...");
    update(850, 37, "Detecting questionable jokes...");
    update(1300, 61, "Measuring conversation survival rate...");
    update(1750, 82, "Consulting highly scientific algorithms...");
    update(2200, 97, "Almost done...");
    update(3000, 97, "Still 97%...");
    update(3700, 97, "Yeah, that's probably enough data.");

    timers.push(
      setTimeout(() => {
        setProgress(100);
        setStatus("Analysis complete.");
        setComplete(true);
      }, 4400)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const findings = [
    {
      label: "Childhood friend",
      result: "confirmed",
      type: "yes",
    },
    {
      label: "Still remembers me",
      result: "surprisingly",
      type: "yes",
    },
    {
      label: "Conversation survived longer than 3 days",
      result: "confirmed",
      type: "yes",
    },
    {
      label: "Still slightly annoying",
      result: "data inconclusive",
      type: "maybe",
    },
    {
      label: "Worth making a birthday website for",
      result: "apparently",
      type: "yes",
    },
  ];

  return (
    <motion.section
      className="screen analysis-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="analysis-window"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
      >
        <div className="window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>

          <span>conversation_analysis.exe</span>

          <div className="window-spacer" />
        </div>

        <div className="analysis-body">
          <div className="analysis-header">
            <p>VERY SERIOUS RESEARCH DEPARTMENT</p>
            <h2>Three-week analysis</h2>

            <span>
              Analyzing approximately 3 weeks of conversations...
            </span>
          </div>

          <div className="progress-area">
            <div className="progress-meta">
              <span>{status}</span>
              <strong>{progress}%</strong>
            </div>

            <div className="progress-track">
              <motion.div
                className="progress-fill"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
          </div>

          {!complete && (
            <div className="analysis-waiting">
              <span className="blink-cursor">_</span>
              Please do not interrupt the extremely advanced science.
            </div>
          )}

          {complete && (
            <motion.div
              className="analysis-results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="results-title">
                <span>ANALYSIS COMPLETE</span>
                <strong>Findings</strong>
              </div>

              <div className="findings-list">
                {findings.map((item, index) => (
                  <motion.div
                    className="finding-row"
                    key={item.label}
                    initial={{ opacity: 0, x: -7 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.35,
                    }}
                  >
                    <div className="finding-status">
                      {item.type === "yes" ? (
                        <Check size={13} />
                      ) : (
                        <Minus size={13} />
                      )}
                    </div>

                    <div className="finding-copy">
                      <span>{item.label}</span>
                      <small>{item.result}</small>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="analysis-button"
                onClick={onNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                whileTap={{ scale: 0.98 }}
              >
                Very scientific. Continue
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <span className="analysis-version">
        definitely-real-science v3.0
      </span>
    </motion.section>
  );
}

export default Analysis;