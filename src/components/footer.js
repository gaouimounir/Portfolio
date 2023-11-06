import React from "react";
import "../styles/footer.css";

const RenderFooter = () => {
  return (
    <div className="footer">
      <p>Tous droits réservés</p>
      <div className="contact">
        Contact :<i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <p>&copy; 2023 Gaoui Mounir</p>
    </div>
  );
};

export default RenderFooter;
