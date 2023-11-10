import React, { useEffect, useState } from "react";
import "../styles/welcome.css";

function Welcome() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const originalText = "Hi, I'm Mounir Gaoui";
    let index = 0;
    let intervalId;

    const startLoop = () => {
      intervalId = setInterval(() => {
        if (index <= originalText.length) {
          setDisplayedText(originalText.substring(0, index));
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setDisplayedText("");
            index = 0;
            startLoop();
          }, 1000);
        }
      }, 100);
    };

    startLoop();

    // Nettoie l'intervalle lors du démontage du composant
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="welcome">
      <h1>{displayedText}</h1>
      <h2>A Front-End Developer</h2>
      <p>I'm passionate about creating beautiful and user-friendly websites.</p>
    </div>
  );
}

export default Welcome;
