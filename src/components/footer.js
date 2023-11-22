import React from "react";

const RenderFooter = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 Gaoui Mounir</p>
      <div className="contact">
        <a href="https://www.linkedin.com/in/am-gaoui/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:am.gaoui@protonmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/gaouimounir">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p>Tous droits réservés</p>
    </div>
  );
};

export default RenderFooter;
