import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const credits = [
  ["BIRTHDAY GIRL", "Mithu Sri"],
  ["DEVELOPER", "Sai"],
  ["PROFESSIONAL TIME WASTER", "Sai"],
  ["CHILDHOOD LORE CONSULTANT", "Also Sai"],
  ["FINANCIAL SPONSOR", "Unfortunately, nobody."],
  ["QUALITY ASSURANCE", "Barely performed."],
  ["SPECIAL EFFECTS BUDGET", "₹0"],
];

function Credits() {
  const [finished, setFinished] = useState(false);

  return (
    <motion.section
      className="screen credits-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div
            key="credits"
            className="credits-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="credits-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              END CREDITS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Apparently this needed credits.
            </motion.h2>

            <div className="credits-list">
              {credits.map(([role, name], index) => (
                <motion.div
                  className="credit-row"
                  key={role}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.75 + index * 0.16,
                    duration: 0.45,
                  }}
                >
                  <span>{role}</span>
                  <strong>{name}</strong>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="credits-made-with"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.05 }}
            >
              <span>MADE WITH</span>

              <p>
                Code, questionable decisions,
                <br />
                and way too much free time.
              </p>
            </motion.div>

            <motion.button
              className="credits-finish-button"
              onClick={() => setFinished(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.35 }}
            >
              Finish the movie
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="final"
            className="final-ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
            >
              Some people disappear from our lives completely.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.35,
                duration: 0.8,
              }}
            >
              Somehow, you came back.
            </motion.p>

            <motion.div
              className="final-ending-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 2.15,
                duration: 0.7,
              }}
            />

            <motion.h2
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.65,
                duration: 0.9,
              }}
            >
              Happy Birthday. :)
            </motion.h2>

            <motion.span
              className="final-go-enjoy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 3.7,
                duration: 0.8,
              }}
            >
              Now seriously, go enjoy your birthday.
            </motion.span>

            <motion.span
              className="final-fin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 4.5,
                duration: 1,
              }}
            >
              FIN
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Credits;