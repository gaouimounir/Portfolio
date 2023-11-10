import React, { useEffect, useState } from "react";
import "../styles/welcome.css";

function Welcome() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const originalText = "Hi, I'm Mounir Gaoui";
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= originalText.length) {
        setDisplayedText(originalText.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // ajustez la durée ici

    return () => clearInterval(intervalId);
  }, []); // le tableau vide [] assure que useEffect s'exécute une seule fois après le montage du composant

  return (
    <div className="welcome">
      <h1>{displayedText}</h1>
      <h2>A Front-End Developer</h2>
      <p>I'm passionate about creating beautiful and user-friendly websites.</p>
    </div>
  );
}

export default Welcome;
