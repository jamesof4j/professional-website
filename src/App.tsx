import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import NavigationPart from "./components/NavigationPart.tsx";
import HeroPart from "./components/HomePart.tsx";
import AboutPart from "./components/AboutPart.tsx";
import PortfolioPart from "./components/PortfolioPart.tsx";
import FooterPart from "./components/FooterPart.tsx";

function App() {
  return (
    <div className="body" id="page-top">
      <NavigationPart />
      <HeroPart />
      <AboutPart />
      <PortfolioPart />
      <FooterPart />
      <ScrollToTop />
    </div>
  );
}

export default App;
