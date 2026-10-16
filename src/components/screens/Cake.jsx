import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Wind } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "../../data";

function Cake({ onNext }) {
  const [stage, setStage] = useState("wish");

  const blowCandles = () => {
    if (stage !== "wish") return;

    setStage("dark");

    setTimeout(() => {
      setStage("celebrate");

      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.65 },
        scalar: 0.85,
      });

      setTimeout(() => {
        confetti({
          particleCount: 45,
          spread: 100,
          origin: { x: 0.25, y: 0.65 },
          scalar: 0.75,
        });

        confetti({
          particleCount: 45,
          spread: 100,
          origin: { x: 0.75, y: 0.65 },
          scalar: 0.75,
        });
      }, 250);
    }, 900);
  };

  return (
    <motion.section
      className={`screen cake-screen ${
        stage === "dark" ? "cake-dark" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {stage === "wish" && (
          <motion.div
            className="cake-content"
            key="wish"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="cake-copy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p>OKAY, OKAY.</p>

              <h2>
                You deserve at least
                <br />
                one real birthday feature.
              </h2>

              <span>Make a wish.</span>
            </motion.div>

            <motion.div
              className="birthday-cake"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div className="candles">
                {[0, 1, 2].map((candle) => (
                  <div className="candle" key={candle}>
                    <motion.span
                      className="flame"
                      animate={{
                        scale: [1, 1.08, 0.96, 1],
                        rotate: [-2, 3, -3, -2],
                      }}
                      transition={{
                        duration: 0.8 + candle * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="cake-top">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="cake-layer cake-layer-top">
                <div className="icing-drip drip-one" />
                <div className="icing-drip drip-two" />
                <div className="icing-drip drip-three" />
              </div>

              <div className="cake-layer cake-layer-bottom" />

              <div className="cake-plate" />
            </motion.div>

            <motion.p
              className="wish-secret"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I'm obviously not asking what you wished for.
            </motion.p>

            <motion.button
              className="blow-button"
              onClick={blowCandles}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              whileTap={{ scale: 0.97 }}
            >
              <Wind size={17} />
              Blow out the candles
            </motion.button>
          </motion.div>
        )}

        {stage === "dark" && (
          <motion.div
            className="cake-blackout"
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>...</p>
          </motion.div>
        )}

        {stage === "celebrate" && (
          <motion.div
            className="birthday-reveal"
            key="celebrate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="reveal-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              THERE WE GO.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.65,
              }}
            >
              Happy Birthday,
              <br />
              <span>{siteData.herName}!</span>
            </motion.h2>

            <motion.div
              className="achievement-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <div className="achievement-icon">★</div>

              <div>
                <small>ACHIEVEMENT UNLOCKED</small>
                <strong>Survived another year</strong>
              </div>

              <span>+1 LEVEL</span>
            </motion.div>

            <motion.p
              className="birthday-subtext"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Officially older. Whether you're wiser is still under
              investigation.
            </motion.p>

            <motion.button
              className="cake-next"
              onClick={onNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Cake;