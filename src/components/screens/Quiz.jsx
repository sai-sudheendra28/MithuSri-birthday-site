import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw, ArrowRight } from "lucide-react";

function Quiz({ onNext }) {
  const [answer, setAnswer] = useState(null);

  const chooseYou = () => {
    setAnswer("you");
  };

  const chooseMe = () => {
    setAnswer("me");
  };

  const resetQuiz = () => {
    setAnswer(null);
  };

  return (
    <motion.section
      className="screen quiz-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="quiz-page">
        <motion.div
          className="quiz-header"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          <p>QUESTION 01 · EXTREMELY IMPORTANT</p>

          <span>Before proceeding...</span>

          <h2>
            Who was more annoying
            <br />
            as a kid?
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {answer === null && (
            <motion.div
              key="question"
              className="quiz-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <button
                className="quiz-option"
                onClick={chooseYou}
              >
                <span className="option-letter">A</span>

                <div>
                  <strong>You</strong>
                  <small>This seems suspiciously obvious.</small>
                </div>
              </button>

              <button
                className="quiz-option"
                onClick={chooseMe}
              >
                <span className="option-letter">B</span>

                <div>
                  <strong>Me</strong>
                  <small>Think very carefully.</small>
                </div>
              </button>

              <p className="quiz-hint">
                Choose wisely. The website is definitely unbiased.
              </p>
            </motion.div>
          )}

          {answer === "you" && (
            <motion.div
              key="wrong"
              className="quiz-result wrong-answer"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="result-mark wrong-mark">
                <X size={28} strokeWidth={1.8} />
              </div>

              <p className="result-label">INCORRECT</p>

              <h3>Interesting answer.</h3>

              <p>
                Unfortunately, this website was coded by me.
              </p>

              <p>
                Therefore I control reality.
              </p>

              <button
                className="quiz-action secondary"
                onClick={resetQuiz}
              >
                <RotateCcw size={15} />
                Try again
              </button>
            </motion.div>
          )}

          {answer === "me" && (
            <motion.div
              key="correct"
              className="quiz-result correct-answer"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="result-mark correct-mark">
                <Check size={27} strokeWidth={1.8} />
              </div>

              <p className="result-label">CORRECT</p>

              <h3>Excellent choice.</h3>

              <p className="points-earned">
                +100 points
              </p>

              <p className="rigged-note">
                This quiz is definitely not rigged.
              </p>

              <button
                className="quiz-action"
                onClick={onNext}
              >
                Claim points
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="quiz-scribble">
          totally fair →
        </span>
      </div>
    </motion.section>
  );
}

export default Quiz;