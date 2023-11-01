import "./App.css";
import Projects from "./components/Projets";
import RenderFooter from "./components/footer";
import RenderHeader from "./components/header";

function App() {
  return (
    <>
      <RenderHeader />
      <Projects />
      <RenderFooter />
    </>
  );
}

export default App;
