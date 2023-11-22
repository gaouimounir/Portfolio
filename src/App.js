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
      <RouterProvider router={router} />
      <Welcome />
      <RenderFooter />
    </>
  );
}

export default App;
