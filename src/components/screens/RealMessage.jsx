import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteData } from "../../data";

function RealMessage({ onNext }) {
  return (
    <motion.section
      className="screen real-message-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.article
        className="real-message-letter"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p className="letter-kicker">OKAY. JOKES ASIDE.</p>

        <h2>A small serious part.</h2>

        <div className="letter-body">
          <p>
            It's genuinely kind of crazy that we used to play
            together as kids, then went years without really being
            part of each other's lives, and somehow ended up talking
            again.
          </p>

          <p>
            We haven't been talking again for very long, but it's
            been nice getting to know the person that childhood
            friend grew up to become.
          </p>

          <p>
            And since you keep asking whether I actually miss you
            when we don't talk for a few days...
          </p>

          <p className="letter-emphasis">
            Yes, I do.
          </p>

          <p>
            I know I've already admitted that once, but in case you
            thought I was just saying it — I wasn't. When we don't
            talk for a while, I genuinely notice it.
          </p>

          <p>
            There's something else I've never really told you. I
            really like listening to you talk. I don't know if it's
            your voice, your tone, or simply the way you speak, but
            there's something strangely calming about it.
          </p>

          <p>
            On days when I'm tired or completely out of energy,
            talking to you somehow makes things feel a little
            lighter — like I got some of that energy back.
          </p>

          <p>
            So I wanted to make you something a little different
            instead of sending another normal "Happy Birthday 🎂"
            message.
          </p>

          <div className="letter-birthday">
            <p>
              And today, please actually enjoy your day.
            </p>

            <p>
              Eat something good. Laugh a lot. Forget about whatever
              can wait until tomorrow, and make the day worth
              remembering.
            </p>

            <p>
              You only get this birthday once.
              <br />
              Enjoy it properly.
            </p>
          </div>

          <p className="letter-ending">
            Happy Birthday, {siteData.herName}. :)
          </p>

          <p className="letter-final-line">
            I'm genuinely glad we started talking again.
          </p>
        </div>

        <motion.button
          className="letter-heart"
          onClick={onNext}
          whileTap={{ scale: 0.92 }}
          aria-label="Continue"
        >
          <Heart size={20} strokeWidth={1.5} />
        </motion.button>

        <span className="letter-signature">
          — Kittu
        </span>
      </motion.article>
    </motion.section>
  );
}

export default RealMessage;