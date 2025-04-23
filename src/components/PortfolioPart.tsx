import PortItemPart from "./PortItemPart.tsx";
import ProjImage01 from "../assets/img/project-01.jpg";
import ProjImage02 from "../assets/img/project-02.jpg";
import ProjImage03 from "../assets/img/project-03.jpg";
import PortImage01 from "../assets/img/portfolio-01.png";
import PortImage02 from "../assets/img/portfolio-02.png";
import PortImage03 from "../assets/img/portfolio-03.png";
import PortImage04 from "../assets/img/portfolio-04.png";
import PortImage05 from "../assets/img/portfolio-05.png";
import PortImage06 from "../assets/img/portfolio-06.png";
import PortImage07 from "../assets/img/portfolio-07.png";
import PortImage08 from "../assets/img/portfolio-08.png";
import { Link } from "react-router-dom";

function PortfolioPart() {
  return (
    <section className="signup-section projects-section" id="signup projects">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5" id="projects">
          <div className="text-center">
            <i className="fa fa-gamepad fa-2x mb-2 mx-2 text-white"></i>
            <i className="fa fa-plus fa-2x mb-2 mx-2 text-white"></i>
            <i className="fa fa-dice fa-2x mb-2 mx-2 text-white"></i>
            <h2 className="text-white mb-5">Projects</h2>
          </div>
        </div>
        <PortItemPart
          side="left"
          image={ProjImage01}
          title="PatientSpot"
          link="https://www.patientspot.org"
        >
          Developed from scratch, this Grade One medical device for mobile
          patient information documentation and medical survey participation is
          GHLF’s popular 50,000-strong patient registry and community support
          smartphone app. Research studies are integrated into the web-based
          registration component of PatientSpot, using dynamic responsiveness
          and conditional logic to alter the user experience to specific needs.
        </PortItemPart>

        <PortItemPart side="right" image={ProjImage02} title="HellBent">
          <Link to="/hellbent" className="NoUnderline mb-0 text-white-50">
            HellBent is a modern take on the ten-sided tabletop roleplaying
            game, infusing new and unique elements into a system that has been
            around for decades. Set in a contemporary setting, players and Game
            Masters alike get the rare chance to incorporate present-day
            elements into their fantasy. Choose from a variety of character
            classes that combine modern battle tactics with occult magic, and
            explore a world that is both familiar and strange.
          </Link>
        </PortItemPart>

        <PortItemPart
          side="left"
          image={ProjImage03}
          title="Dungeons & Diagnoses"
          link="https://ghlf.org/dungeons-and-diagnoses/"
        >
          As part of the Global Healthy Living Foundation's Podcast Network,
          this full-fantasy roleplaying campaign takes three unlikely heroes on
          a sprawling adventure inside the mythical world of Gaedia. There, they
          combat the dangerous Nihil, a mysterious force that threatens to
          destroy the world. Along the way, they encounter a variety of
          creatures while overcoming vast obstacles, both internal and external.
        </PortItemPart>

        <div className="row gx-4 gx-lg-5 pt-5" id="portfolio">
          <div className="text-center">
            <i className="fa fa-code fa-2x mb-2 mx-2 text-white"></i>
            <i className="fa fa-plus fa-2x mb-2 mx-2 text-white"></i>
            <i className="fa fa-window-maximize fa-2x mb-2 mx-2 text-white"></i>
            <h2 className="text-white mb-5">Professional Work</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="https://www.ghlf.org" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage01} />
          </a>
          <a href="https://www.painspot.org" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage02} />
          </a>
          <a
            href="https://www.narscosmetics.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-fluid" src={PortImage03} />
          </a>
          <a href="https://www.inc.com" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage04} />
          </a>
          <a href="https://www.grubhub.com" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage05} />
          </a>
          <a href="https://www.seamless.com" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage06} />
          </a>
          <a
            href="https://www.doctorsinternet.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-fluid" src={PortImage07} />
          </a>
          <a href="https://www.gteckids.com" target="_blank" rel="noreferrer">
            <img className="img-fluid" src={PortImage08} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPart;
