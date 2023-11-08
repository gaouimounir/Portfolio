import "./App.css";
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
      <header>
        <nav></nav>
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
        path: ":category",
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
