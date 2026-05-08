/**
 * 🎱 MAGIC 8-BALL — BACKUP IMPLEMENTATION
 *
 * This file is always live at `/2026/demo/backup`.
 * It's the manual safety net if the live AI demo at `/2026/demo` fails.
 *
 * To use the fallback during the presentation:
 *   Navigate to /2026/demo/backup in the browser.
 *   No git operations or AI tooling required.
 */

import { motion } from "motion/react";
import { useState } from "react";

const ANSWERS = [
  "Definitely!",
  "Ask your teacher!",
  "Yes!!!",
  "Without a doubt!",
  "Maybe try again",
  "Of course!",
  "Try later!",
  "100%!",
];

export default function Magic8Ball() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const ask = () => {
    if (shaking) return;
    setShaking(true);
    setAnswer(null);
    setShakeKey((k) => k + 1);
    window.setTimeout(() => {
      const next = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
      setAnswer(next);
      setShaking(false);
    }, 900);
  };

  return (
    <main className="min-h-screen grid place-content-center gap-12 p-8 bg-white text-center">
      <a
        href="/2026/#ai-demo"
        className="absolute top-6 left-6 text-[#f6821f] font-bold text-xl no-underline"
      >
        ← back
      </a>

      <h1 className="text-6xl font-extrabold m-0 text-[#f6821f]">🎱 Magic 8-Ball</h1>

      <div className="grid place-items-center">
        <motion.div
          key={shakeKey}
          className="w-96 h-96 rounded-full grid place-content-center cursor-pointer select-none relative bg-[radial-gradient(circle_at_35%_30%,_#4a4a4a_0%,_#1a1a1a_60%,_#000_100%)] shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.5),_0_10px_40px_rgba(0,0,0,0.4)]"
          onClick={ask}
          animate={
            shaking
              ? {
                  x: [0, -20, 22, -18, 16, -12, 8, 0],
                  y: [0, 10, -10, 12, -8, 6, -4, 0],
                  rotate: [0, -8, 8, -6, 6, -3, 0],
                }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {answer ? (
            <div className="w-40 h-40 rounded-full bg-[#001a4d] grid place-content-center text-center p-4 text-white font-bold text-xl leading-tight">
              {answer}
            </div>
          ) : (
            <div className="w-40 h-40 rounded-full bg-white text-black grid place-content-center text-[5rem] font-black font-serif">
              8
            </div>
          )}
        </motion.div>
      </div>

      <button
        onClick={ask}
        disabled={shaking}
        className={`text-3xl font-extrabold px-12 py-4 rounded-xl bg-black text-white border-none ${shaking ? "cursor-wait opacity-60" : "cursor-pointer opacity-100"}`}
      >
        {answer ? "Ask again!" : "Click to ask!"}
      </button>

      <p className="text-xl opacity-60 m-0">Tip: click the ball or the button.</p>
    </main>
  );
}
