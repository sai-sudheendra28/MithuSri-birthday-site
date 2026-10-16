import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Candy,
  Sparkles,
  IndianRupee,
  X,
} from "lucide-react";

const rewards = [
  {
    id: "chocolate",
    icon: Candy,
    name: "Chocolate",
    description: "A premium digital chocolate.",
    cost: 20,
  },
  {
    id: "cake",
    icon: CakeSlice,
    name: "Cake",
    description: "Looks expensive. Probably isn't.",
    cost: 40,
  },
  {
    id: "unicorn",
    icon: Sparkles,
    name: "Unicorn",
    description: "Extremely practical birthday gift.",
    cost: 80,
  },
  {
    id: "crore",
    icon: IndianRupee,
    name: "₹1,00,00,000",
    description: "The financially irresponsible option.",
    cost: 100,
  },
];

function RewardShop({ onNext }) {
  const [selectedReward, setSelectedReward] = useState(null);

  const selected = rewards.find(
    (reward) => reward.id === selectedReward
  );

  const closeReceipt = () => {
    setSelectedReward(null);
  };

  const getMessage = () => {
    if (!selected) return null;

    if (selected.id === "chocolate") {
      return {
        heading: "PURCHASE SUCCESSFUL",
        title: "Chocolate acquired.",
        message:
          "Please imagine that a very expensive chocolate has been delivered to you.",
        note: "Shipping time: approximately never.",
      };
    }

    if (selected.id === "cake") {
      return {
        heading: "PURCHASE SUCCESSFUL",
        title: "Cake acquired.",
        message:
          "Please imagine an unnecessarily expensive birthday cake.",
        note: "Calories: imaginary. Taste: also imaginary.",
      };
    }

    if (selected.id === "unicorn") {
      return {
        heading: "ITEM UNAVAILABLE",
        title: "Minor supply issue.",
        message:
          "Unfortunately, unicorn delivery is currently unavailable in Tamil Nadu.",
        note: "Our logistics department has declined to comment.",
      };
    }

    return {
      heading: "TRANSACTION FAILED",
      title: "Developer is broke.",
      message:
        "Your ₹1,00,00,000 transaction could not be processed due to severe budget limitations.",
      note: "Customer support: Sai · Request status: DENIED",
    };
  };

  const receipt = getMessage();

  return (
    <motion.section
      className="screen shop-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="shop-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <header className="shop-header">
          <div>
            <p>BIRTHDAY REWARD SHOP</p>
            <h2>Spend your fortune.</h2>
          </div>

          <div className="points-wallet">
            <small>BALANCE</small>
            <strong>100</strong>
            <span>POINTS</span>
          </div>
        </header>

        <div className="shop-divider">
          <span>AVAILABLE REWARDS</span>
          <span>4 ITEMS</span>
        </div>

        <div className="reward-grid">
          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <motion.button
                className="reward-item"
                key={reward.id}
                onClick={() => setSelectedReward(reward.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25 + index * 0.08,
                  duration: 0.4,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="reward-icon">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div className="reward-info">
                  <strong>{reward.name}</strong>
                  <small>{reward.description}</small>
                </div>

                <div className="reward-price">
                  <strong>{reward.cost}</strong>
                  <span>PTS</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="shop-warning">
          All purchases are final, mostly because none of them are real.
        </p>

        <button className="shop-exit" onClick={onNext}>
          This website is a scam
          <ArrowRight size={16} />
        </button>
      </motion.div>

      <AnimatePresence>
        {selected && receipt && (
          <motion.div
            className="receipt-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`reward-receipt receipt-${selected.id}`}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="receipt-close"
                onClick={closeReceipt}
                aria-label="Close"
              >
                <X size={17} />
              </button>

              <p className="receipt-status">
                {receipt.heading}
              </p>

              <div className="receipt-icon">
                {(() => {
                  const Icon = selected.icon;
                  return <Icon size={27} strokeWidth={1.4} />;
                })()}
              </div>

              <h3>{receipt.title}</h3>

              <p className="receipt-message">
                {receipt.message}
              </p>

              <div className="receipt-line" />

              <div className="receipt-details">
                <span>ITEM</span>
                <strong>{selected.name}</strong>

                <span>COST</span>
                <strong>{selected.cost} points</strong>

                <span>REMAINING</span>
                <strong>100*</strong>
              </div>

              <p className="receipt-note">
                {receipt.note}
              </p>

              <p className="receipt-footnote">
                *The accounting department has decided not to
                actually deduct anything.
              </p>

              <button
                className="receipt-button"
                onClick={closeReceipt}
              >
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="shop-copyright">
        BIRTHDAY ECONOMY © 2026
      </span>
    </motion.section>
  );
}

export default RewardShop;