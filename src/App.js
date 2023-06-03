import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosec from "./components/Herosec";
import TheFirmNav from "./components/TheFirmNav";
import Reasontochoose from "./components/Reasontochoose";
import PerfectSolution from "./components/PerfectSolution";
import OurPartners from "./components/OurPartners";
import OurBlogs from "./components/OurBlogs";
import TheFirmFooter from "./components/TheFirmFooter";
import FrustrationOfClients from "./components/FrustrationOfClients";
import GetInTouch from "./components/GetInTouch";
import OurReasearch from "./components/OurReasearch";
import Testimonial from "./components/Testimonial";
import TheFrimHeader from "./components/TheFrimHeader";

function App() {
  return (
    <>
      <TheFrimHeader />
      <OurPartners />
      <PerfectSolution />
      <FrustrationOfClients />
      <Reasontochoose />
      <OurReasearch />
      <OurBlogs />
      <Testimonial />
      <GetInTouch />
      <TheFirmFooter />
    </>
  );
}

export default App;
