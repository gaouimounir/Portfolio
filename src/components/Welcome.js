import React, { useEffect, useState } from "react";
import "../styles/welcome.css";

function Welcome() {
  // State pour stocker le texte à afficher
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Texte original à dérouler
    const originalText = "Hi, I'm Mounir Gaoui";
    let index = 0;
    let intervalId; // Variable pour stocker l'ID de l'intervalle

    // Fonction pour démarrer la boucle de défilement
    const startLoop = () => {
      intervalId = setInterval(() => {
        if (index <= originalText.length) {
          // Met à jour le texte affiché à chaque itération
          setDisplayedText(originalText.substring(0, index));
          index++;
        } else {
          clearInterval(intervalId); // Arrête l'intervalle lorsque tout le texte est affiché

          // Défini un délai avant de réinitialiser le texte et redémarrer la boucle
          setTimeout(() => {
            setDisplayedText(""); // Réinitialise le texte
            index = 0; // Réinitialise l'index
            startLoop(); // Redémarre la boucle
          }, 1000); // Délai avant la prochaine itération (ajustez au besoin)
        }
      }, 100); // Ajustez la durée de l'intervalle ici
    };

    startLoop(); // Appelle la fonction pour démarrer la boucle au montage du composant

    // Nettoie l'intervalle lors du démontage du composant
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Le tableau vide [] assure que useEffect s'exécute une seule fois après le montage du composant

  // Rendu du composant avec le texte en cours de défilement
  return (
    <>
      <div className="welcome">
        <div className="text">
          <p>{displayedText}</p>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
