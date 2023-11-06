import React from "react";
import "../styles/footer.css";

const RenderFooter = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 Gaoui Mounir</p>
      <div className="contact">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <p>Tous droits réservés</p>
    </div>
  );
};

export default RenderFooter;
