import React from "react";
import "../styles/welcome.css";

const text = "Texte à défiler lettre par lettre.";
const container = document.getElementById("scrolling-text");

function displayText(index) {
  if (index <= text.length) {
    container.innerHTML = text.substring(0, index);
    index++;
    setTimeout(() => displayText(index), 100); // ajustez la durée ici
  }
}

displayText(0);

function Welcome() {
  return (
    <div className="welcome">
      <h1>Hi, I'm Mounir Gaoui</h1>
      <h2>A Front-End Developer</h2>
      <p>I'm passionate about creating beautiful and user-friendly websites.</p>
    </div>
  );
}

export default Welcome;
