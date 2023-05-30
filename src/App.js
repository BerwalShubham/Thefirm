import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Herosec from "./components/Herosec";
import TheFirmNav from "./components/TheFirmNav";
import Reasontochoose from "./components/Reasontochoose";

function App() {
  return (
    <>
      <TheFirmNav />
      <Herosec />
      <Reasontochoose />
    </>
  );
}

export default App;
