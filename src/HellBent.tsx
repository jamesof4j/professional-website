import "./App.css";
import HBHeroPart from "./components/HBHeroPart.tsx";
import FooterPart from "./components/FooterPart.tsx";
import ScrollToTop from "./components/ScrollToTop";

function HellBent() {
  return (
    <div className="body" id="page-top">
      <HBHeroPart />
      <FooterPart />
      <ScrollToTop />
    </div>
  );
}

export default HellBent;
