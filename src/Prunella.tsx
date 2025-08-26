import "./App.css";
import PruHomePart from "./components/PruHomePart.tsx";
import PruAboutPart from "./components/PruAboutPart.tsx";
import PruPhotoPart from "./components/PruPhotoPart.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function Prunella() {
  return (
    <div className="body" id="page-top">
      <PruHomePart />
      <PruAboutPart />
      <PruPhotoPart />
      <ScrollToTop />
    </div>
  );
}

export default Prunella;
