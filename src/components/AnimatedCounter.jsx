import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

function SingleCounter({ toStr }) {
  const ref = useRef(null);
  const [toVal, setToVal] = useState(0);
  
  useEffect(() => {
    setToVal(parseInt(toStr, 10));
  }, [toStr]);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    restDelta: 0.001
  });

  useEffect(() => {
    motionValue.set(toVal);
  }, [toVal, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        let currentNum = Math.floor(latest);
        let displayStr = currentNum.toString();
        // Keep leading zero if original had it
        if (toStr.startsWith("0") && toStr.length > 1 && currentNum < 10 && currentNum >= 0) {
          displayStr = "0" + currentNum;
        }
        ref.current.textContent = displayStr;
      }
    });
  }, [springValue, toStr]);

  return <span ref={ref}>0</span>;
}

export default function AnimatedText({ text }) {
  if (typeof text !== 'string') return <>{text}</>;
  
  // Split the text into an array of strings and numbers
  // e.g. "48 listings / 12 ready" -> ["", "48", " listings / ", "12", " ready"]
  const parts = text.split(/(\d+)/);

  return (
    <>
      {parts.map((part, i) => {
        if (/\d+/.test(part)) {
          return <SingleCounter key={i} toStr={part} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
