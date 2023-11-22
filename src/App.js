import "./App.css";
import React from "react";
import Welcome from "./components/Welcome";
import Projects from "./components/Projets";
import RenderFooter from "./components/footer";
import RenderHeader from "./components/header";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function Root() {
  return (
    <>
      <header className="enTete">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
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
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Root />
      </div>
    ),
    children: [
      {
        path: ":project",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RenderHeader />
      <Welcome />
      <RouterProvider router={router} />
      <RenderFooter />
    </>
  );
}

export default App;
