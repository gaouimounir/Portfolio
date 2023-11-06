import React from "react";
import "../styles/footer.css";

const RenderFooter = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 Gaoui Mounir</p>
      <div className="contact">
        <a href="https://www.linkedin.com/in/am-gaoui/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:am.gaoui@protonmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/gaouimounir">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <p>Tous droits réservés</p>
    </div>
  );
};

export default RenderFooter;
