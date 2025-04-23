import "./App.css";
import HBNavPart from "./components/HBNavPart.tsx";
import HBHeroPart from "./components/HBHeroPart.tsx";
import FooterPart from "./components/FooterPart.tsx";

function HellBent() {
  return (
    <div className="body" id="page-top">
      <HBHeroPart />
      <FooterPart />
    </div>
  );
}

export default HellBent;
