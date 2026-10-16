import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gift,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

function GiftCoupon({ onNext }) {
  const [stage, setStage] = useState("gift");

  const acceptTerms = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 },
    });

    setStage("approved");
  };

  return (
    <motion.section
      className="screen gift-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {/* FIRST GIFT */}
        {stage === "gift" && (
          <motion.div
            key="gift"
            className="gift-stage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5 }}
          >
            <p className="gift-kicker">WAIT.</p>

            <h2>
              Almost forgot your
              <br />
              birthday gift.
            </h2>

            <motion.div
              className="gift-box"
              animate={{
                rotate: [0, -2, 2, -2, 2, 0],
              }}
              transition={{
                duration: 0.65,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 2.8,
              }}
            >
              <Gift size={76} strokeWidth={1.2} />
            </motion.div>

            <button
              className="gift-primary-button"
              onClick={() => setStage("empty")}
            >
              Open your gift
              <ArrowRight size={16} />
            </button>

            <span className="gift-tiny-note">
              definitely contains something valuable
            </span>
          </motion.div>
        )}

        {/* EMPTY GIFT */}
        {stage === "empty" && (
          <motion.div
            key="empty"
            className="gift-stage empty-gift-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="empty-box"
              initial={{ scale: 0.7, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
            >
              <span className="empty-box-lid" />

              <div className="empty-box-body">
                <span>EMPTY</span>
              </div>
            </motion.div>

            <motion.h2
              className="hahaha"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
            >
              HAHAHAHA
            </motion.h2>

            <motion.p
              className="gift-prank-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              You actually thought there was
              <br />
              something inside.
            </motion.p>

            <motion.button
              className="gift-secondary-button"
              onClick={() => setStage("apology")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 }}
            >
              Wow.
            </motion.button>
          </motion.div>
        )}

        {/* APOLOGY */}
        {stage === "apology" && (
          <motion.div
            key="apology"
            className="gift-stage apology-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="gift-apology">Okay...</p>

            <h2>That was mean.</h2>

            <motion.p
              className="gift-apology-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I do actually have something for you.
            </motion.p>

            <motion.button
              className="small-gift"
              onClick={() => setStage("coupon")}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                type: "spring",
                stiffness: 160,
                damping: 13,
              }}
              aria-label="Open the real gift"
            >
              <Gift size={43} strokeWidth={1.25} />
            </motion.button>

            <motion.span
              className="small-gift-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              this one is suspiciously smaller
            </motion.span>
          </motion.div>
        )}

        {/* COUPON PREVIEW */}
        {stage === "coupon" && (
          <motion.div
            key="coupon"
            className="coupon-reveal-stage"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="coupon-reveal-kicker">
              ACTUAL GIFT UNLOCKED
            </p>

            <p className="coupon-reveal-intro">
              Okay. This one is real.
            </p>

            <motion.div
              className="wish-coupon-preview"
              initial={{
                opacity: 0,
                scale: 0.94,
                rotate: -1.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -0.5,
              }}
              transition={{
                delay: 0.35,
                duration: 0.65,
              }}
            >
              <div className="coupon-topline">
                <span>OFFICIAL BIRTHDAY EDITION</span>
                <span>№ 001</span>
              </div>

              <div className="coupon-preview-main">
                <p>THE</p>

                <h2>
                  ONE WISH
                  <br />
                  COUPON
                </h2>

                <div className="coupon-divider">
                  <span>✦</span>
                </div>

                <p className="coupon-issued">
                  Issued exclusively to
                </p>

                <strong>MITHU SRI</strong>

                <p className="coupon-description">
                  This certificate entitles the holder to exactly
                  one actual wish from the Creator.
                </p>
              </div>

              <div className="coupon-preview-footer">
                <span>BY THOTAPALLI SAI SUDHEENDRA</span>
                <span>№ 001</span>
              </div>
            </motion.div>

            <motion.button
              className="claim-coupon-button"
              onClick={() => setStage("verify")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Claim coupon
              <ArrowRight size={16} />
            </motion.button>

            <motion.span
              className="coupon-warning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              subject to an unnecessarily serious verification process
            </motion.span>
          </motion.div>
        )}

        {/* VERIFICATION */}
        {stage === "verify" && (
          <motion.div
            key="verify"
            className="verification-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="verification-kicker">
              BIRTHDAY CLAIM SYSTEM
            </p>

            <h2>Verifying eligibility...</h2>

            <div className="verification-window">
              <motion.div
                className="verification-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <span>Verifying Birthday Girl</span>
                <strong>✓</strong>
              </motion.div>

              <motion.div
                className="verification-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span>Checking eligibility</span>
                <strong>✓</strong>
              </motion.div>

              <motion.div
                className="verification-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.45 }}
              >
                <span>Checking previous wish claims</span>
                <strong>0</strong>
              </motion.div>

              <motion.div
                className="verification-row financial-check"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <span>
                  Potentially terrible financial decision
                </span>
                <strong>?</strong>
              </motion.div>
            </div>

            <motion.div
              className="eligible-result"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.65 }}
            >
              <span>STATUS</span>
              <strong>ELIGIBLE</strong>
              <p>Somehow, you passed.</p>
            </motion.div>

            <motion.button
              className="activate-coupon-button"
              onClick={() => setStage("activation")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.1 }}
            >
              Activate Wish Coupon
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}

        {/* ACTIVATION WARNING */}
        {stage === "activation" && (
          <motion.div
            key="activation"
            className="activation-stage"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="activation-kicker">
              ACTIVATION REQUEST
            </p>

            <ShieldCheck
              className="activation-icon"
              size={43}
              strokeWidth={1.25}
            />

            <h2>
              One wish.
              <br />
              That's all you get.
            </h2>

            <p className="activation-copy">
              Once activated, this coupon grants you exactly
              one wish to request from the Developer.
            </p>

            <div className="activation-warning-box">
              <strong>IMPORTANT</strong>

              <p>
                There are Terms &amp; Conditions because apparently
                giving you unlimited legal power would be a bad idea.
              </p>
            </div>

            <div className="activation-actions">
              <button
                className="activation-yes"
                onClick={() => setStage("terms")}
              >
                Yes, activate it
                <ArrowRight size={15} />
              </button>

              <button
                className="activation-think"
                onClick={() => setStage("unclaimed")}
              >
                Let me think
              </button>
            </div>
          </motion.div>
        )}

        {/* LET ME THINK */}
        {stage === "unclaimed" && (
          <motion.div
            key="unclaimed"
            className="unclaimed-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="activation-kicker">
              CLAIM STATUS
            </p>

            <h2>UNCLAIMED</h2>

            <p>
              Fair enough.
              <br />
              Suspicion is probably healthy.
            </p>

            <button
              className="activate-coupon-button"
              onClick={() => setStage("activation")}
            >
              Okay, show me again
              <ArrowRight size={15} />
            </button>
          </motion.div>
        )}

        {/* TERMS & CONDITIONS */}
        {stage === "terms" && (
          <motion.div
            key="terms"
            className="terms-stage"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <article className="terms-paper">
              <div className="terms-header">
                <p>OFFICIAL DOCUMENT</p>

                <h2>
                  Terms &amp;
                  <br />
                  Conditions
                </h2>

                <span>
                  ONE WISH COUPON — BIRTHDAY EDITION
                </span>
              </div>

              <div className="terms-body">
                <p>
                  By activating the One Wish Coupon, the holder,
                  hereafter referred to as <strong>"Mithu Sri"</strong>,
                  agrees to the following extremely serious and
                  definitely legally questionable conditions:
                </p>

                <ol>
                  <li>
                    This coupon grants exactly <strong>one (1) wish</strong>.
                    Not two. Not three. One.
                  </li>

                  <li>
                    The wish may be reasonable, unreasonable,
                    inconvenient, ambitious, ridiculous, or something
                    the Developer immediately regrets offering.
                  </li>

                  <li>
                    Whether the wish is actually possible shall be
                    determined by the Developer based on reality,
                    feasibility, common sense, available resources,
                    and how convincingly you ask.
                  </li>

                  <li>
                    Wishes involving illegal activities, dangerous
                    activities, financial bankruptcy, or the destruction
                    of the Developer's future may be refused.
                  </li>

                  <li>
                    A refused wish may be renegotiated until both parties
                    reach a sufficiently questionable agreement.
                  </li>

                  <li>
                    Accepted methods of persuasion include good arguments,
                    food bribes, reasonable emotional blackmail,
                    saying <strong>"but it's my birthday"</strong>,
                    looking disappointed, asking nicely, and asking
                    very nicely.
                  </li>

                  <li>
                    The Developer makes absolutely no promise that he
                    will successfully resist any of the methods listed
                    above.
                  </li>

                  <li>
                    Requests for ₹1 crore, unlimited money, ownership
                    of the Developer's bank account, or equivalent
                    financial disasters are explicitly prohibited.
                  </li>

                  <li>
                    Attempts to wish for additional wishes, unlimited
                    wishes, another coupon, or any suspicious loophole
                    will be reviewed by the same person who wrote these
                    rules.
                  </li>
                </ol>

                <div className="terms-final">
                  By accepting this coupon, you confirm that you have
                  carefully read and understood absolutely none of
                  the above.
                </div>
              </div>

              <button
                className="terms-agree-button"
                onClick={acceptTerms}
              >
                I agree to these extremely serious terms
                <Check size={16} />
              </button>
            </article>
          </motion.div>
        )}

        {/* FINAL APPROVED COUPON */}
        {stage === "approved" && (
          <motion.div
            key="approved"
            className="approved-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="approved-kicker">
              ACTIVATION COMPLETE
            </p>

            <motion.div
              className="final-wish-coupon"
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: -1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
            >
              <div className="final-coupon-top">
                <span>OFFICIAL BIRTHDAY EDITION</span>
                <span>№ 001</span>
              </div>

              <div className="final-coupon-title">
                <span>THE</span>

                <h2>
                  ONE WISH
                  <br />
                  COUPON
                </h2>

                <p>
                  This document certifies one extremely powerful
                  and potentially regrettable birthday privilege.
                </p>
              </div>

              <div className="final-coupon-details">
                <div>
                  <span>OWNER</span>
                  <strong>MITHU SRI</strong>
                </div>

                <div>
                  <span>WISHES REMAINING</span>
                  <strong>1</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>ACTIVE ✓</strong>
                </div>

                <div>
                  <span>EXPIRY DATE</span>
                  <strong>Suspiciously unspecified</strong>
                </div>
              </div>

              <div className="final-coupon-issuer">
                <span>ISSUED BY</span>
                <strong>
                  THOTAPALLI SAI SUDHEENDRA
                </strong>
              </div>

              <motion.div
                className="approved-stamp"
                initial={{
                  opacity: 0,
                  scale: 1.7,
                  rotate: -18,
                }}
                animate={{
                  opacity: 0.72,
                  scale: 1,
                  rotate: -11,
                }}
                transition={{
                  delay: 0.45,
                  type: "spring",
                  stiffness: 170,
                  damping: 12,
                }}
              >
                APPROVED
              </motion.div>

              <div className="final-coupon-bottom">
                VALID FOR ONE WISH • NON-TRANSFERABLE • USE WISELY
              </div>
            </motion.div>

            <motion.div
              className="screenshot-prompt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <h3>📸 Screenshot this.</h3>

              <p>
                Before the Developer mysteriously deletes
                all evidence...
              </p>

              <span>
                No screenshot = suspiciously difficult legal proceedings.
              </span>

              <button
                onClick={() => setStage("secured")}
              >
                Evidence secured
                <Check size={15} />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* EVIDENCE SECURED */}
        {stage === "secured" && (
          <motion.div
            key="secured"
            className="evidence-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 13,
              }}
            >
              <Check size={46} strokeWidth={1.3} />
            </motion.div>

            <p className="gift-kicker">
              EVIDENCE SECURED
            </p>

            <h2>
              This may have been
              <br />
              a terrible decision.
            </h2>

            <p className="evidence-copy">
              Your One Wish Coupon is officially active.
              <br />
              Please use your newfound power irresponsibly.
            </p>

            <button
              className="gift-primary-button"
              onClick={onNext}
            >
              Continue
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default GiftCoupon;