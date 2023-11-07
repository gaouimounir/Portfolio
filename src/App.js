import "./App.css";
import Welcome from "./components/Welcome";
import RenderFooter from "./components/footer";
import RenderHeader from "./components/header";

function App() {
  return (
    <>
      <RenderHeader />
      <Welcome />
      <RenderFooter />
    </>
  );
}

export default App;
