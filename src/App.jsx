import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Opening from "./components/screens/Opening";
import Disclaimer from "./components/screens/Disclaimer";
import Childhood from "./components/screens/Childhood";
import Timeline from "./components/screens/Timeline";
import Analysis from "./components/screens/Analysis";
import Quiz from "./components/screens/Quiz";
import RewardShop from "./components/screens/RewardShop";
import Cake from "./components/screens/Cake";
import FakeEnding from "./components/screens/FakeEnding";
import RealMessage from "./components/screens/RealMessage";
import EmotionalExit from "./components/screens/EmotionalExit";
import GiftCoupon from "./components/screens/GiftCoupon";
import Credits from "./components/screens/Credits";

import "./App.css";

function App() {
  const [screen, setScreen] = useState(0);

  const nextScreen = () => {
    setScreen((current) => current + 1);
  };

  return (
    <main className="app">
      <AnimatePresence mode="wait">
        {screen === 0 && (
          <Opening key="opening" onNext={nextScreen} />
        )}

        {screen === 1 && (
          <Disclaimer key="disclaimer" onNext={nextScreen} />
        )}

        {screen === 2 && (
          <Childhood key="childhood" onNext={nextScreen} />
        )}

        {screen === 3 && (
          <Timeline key="timeline" onNext={nextScreen} />
        )}

        {screen === 4 && (
          <Analysis key="analysis" onNext={nextScreen} />
        )}
        {screen === 5 && (
          <Quiz key="quiz" onNext={nextScreen} />
        )}

        {screen === 6 && (
          <RewardShop key="reward-shop" onNext={nextScreen} />
        )}

        {screen === 7 && (
          <Cake key="cake" onNext={nextScreen} />
        )}

        {screen === 8 && (
          <FakeEnding key="fake-ending" onNext={nextScreen} />
        )}

        {screen === 9 && (
          <RealMessage key="real-message" onNext={nextScreen} />
        )}

        {screen === 10 && (
          <EmotionalExit
            key="emotional-exit"
            onNext={nextScreen}
          />
        )}

        {screen === 11 && (
          <GiftCoupon
            key="gift-coupon"
            onNext={nextScreen}
          />
        )}

        {screen === 12 && (
          <Credits key="credits" />
        )}

      </AnimatePresence>
    </main>
  );
}

export default App;