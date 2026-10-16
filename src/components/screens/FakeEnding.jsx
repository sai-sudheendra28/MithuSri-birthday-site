import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const exitMessages = [
  "I said you CAN leave.",
  "Why are you still here?",
  "Seriously?",
  "Fine.",
];

function FakeEnding({ onNext }) {
  const [attempts, setAttempts] = useState(0);
  const finished = attempts >= exitMessages.length;

  const tryToLeave = () => {
    setAttempts((current) =>
      Math.min(current + 1, exitMessages.length)
    );
  };

  return (
    <motion.section
      className="screen fake-ending-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="fake-ending-content">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <p className="fake-ending-kicker">
            END OF WEBSITE
          </p>

          <h2>That's it.</h2>

          <p className="fake-ending-subtitle">
            You can leave now.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              className="fake-exit-area"
              key={`attempt-${attempts}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {attempts > 0 && (
                <p className="fake-response">
                  {exitMessages[attempts - 1]}
                </p>
              )}

              <button
                className="fake-exit-button"
                onClick={tryToLeave}
              >
                Exit website
              </button>

              {attempts === 0 && (
                <span className="fake-exit-note">
                  Yep. That's genuinely everything.
                </span>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="one-last-thing"
              key="last-thing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>Okay.</p>

              <button onClick={onNext}>
                One last thing
                <ArrowRight size={15} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className="fake-ending-copyright">
        definitely the end
      </span>
    </motion.section>
  );
}

export default FakeEnding;