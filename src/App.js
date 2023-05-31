import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Herosec from "./components/Herosec";
import TheFirmNav from "./components/TheFirmNav";
import Reasontochoose from "./components/Reasontochoose";
import PerfectSolution from "./components/PerfectSolution";

function App() {
  return (
    <>
      <TheFirmNav />
      <Herosec />
      <Reasontochoose />
      <PerfectSolution />
    </>
  );
}

export default App;
