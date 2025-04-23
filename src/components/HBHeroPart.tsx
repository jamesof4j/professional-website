import { useState } from "react";
import HBbook1 from "../assets/hellbent_1_03.pdf";
import HBbook2 from "../assets/hellbent_2_01.pdf";
import HBbook3 from "../assets/hellbent_3_01.pdf";

function HBHeroPart() {
  const [HB1visible, setHB1Visible] = useState(false);
  const [HB2visible, setHB2Visible] = useState(false);
  const [HB3visible, setHB3Visible] = useState(true);
  window.scrollTo(0, 0);
  const Click1 = () => {
    setHB1Visible(true);
    setHB2Visible(false);
    setHB3Visible(false);
  };
  const Click2 = () => {
    setHB1Visible(false);
    setHB2Visible(true);
    setHB3Visible(false);
  };
  const Click3 = () => {
    setHB1Visible(false);
    setHB2Visible(false);
    setHB3Visible(true);
  };
  return (
    <section className="hellbent-section projects-section" id="signup projects">
      <div className="container HBcontainer px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="text-center">
            <h1>HellBent</h1>
            <h2 className="text-red mx-auto mt-2 mb-3">
              A Modern Occult D10 Roleplaying Game
            </h2>
          </div>
        </div>
        <div className="row gx-0 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <p>Select your version below:</p>
              <a
                className={HB3visible ? "btn btn-danger" : "btn btn-dark"}
                onClick={Click3}
              >
                V3.1
              </a>
              <a
                className={HB2visible ? "btn btn-danger" : "btn btn-dark"}
                onClick={Click2}
              >
                V2.1
              </a>
              <a
                className={HB1visible ? "btn btn-danger" : "btn btn-dark"}
                onClick={Click1}
              >
                V1.3
              </a>
              {HB3visible && (
                <object
                  data={HBbook3}
                  type="application/pdf"
                  width="100%"
                  height="1000px"
                >
                  <p>
                    Your browser doesn't support PDFs. Please download the PDF:{" "}
                    <a href={HBbook3}>Download PDF</a>
                  </p>
                </object>
              )}
              {HB2visible && (
                <object
                  data={HBbook2}
                  type="application/pdf"
                  width="100%"
                  height="1000px"
                >
                  <p>
                    Your browser doesn't support PDFs. Please download the PDF:{" "}
                    <a href={HBbook3}>Download PDF</a>
                  </p>
                </object>
              )}
              {HB1visible && (
                <object
                  data={HBbook1}
                  type="application/pdf"
                  width="100%"
                  height="1000px"
                >
                  <p>
                    Your browser doesn't support PDFs. Please download the PDF:{" "}
                    <a href={HBbook3}>Download PDF</a>
                  </p>
                </object>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <p>TESTING</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HBHeroPart;
