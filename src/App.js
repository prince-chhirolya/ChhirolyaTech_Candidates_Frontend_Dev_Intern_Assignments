import "./App.css";
import NavBar from "./components/navBar";
import MainContent from "./components/mainContent";
import {
  ShortDescriptionFive,
  ShortDescriptionFour,
  ShortDescriptionone,
  ShortDescriptionSix,
  ShortDescriptionThree,
  ShortDescriptionTwo,
} from "./components/shortDescription";
import CardSlider from "./components/cardslider";
import ABout from "./components/about";
import RHFL from "./components/rhfl";
import GenerativeAI from "./components/data-engine/generativeAi";
import CaseSutides from "./components/caseStudies";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <ShortDescriptionone />
      <CardSlider />
      <ShortDescriptionTwo />
      <ABout />
      <ShortDescriptionThree />
      <RHFL />
      <ShortDescriptionFour />
      <GenerativeAI />
      <ShortDescriptionFive />
      {/* <CaseSutides/> */}
      <ShortDescriptionSix />

      <Footer />
    </div>
  );
}

export default App;
