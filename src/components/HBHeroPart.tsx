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
              <p>Dice Roller</p>
              <div className="DiceArea"></div>
              <input
                className="form-control DiceInput"
                type="text"
                placeholder="Enter your rolling code here"
              />
              <a className="btn btn-dark">Roll Dice</a>
            </div>
            <div className="CodeExplanation">
              <p>
                Enter a code in the format of <b>"#d#"</b> with any parameters
                included after the second number.
              </p>
              <p>
                The first number is the number is the number of dice to roll.
              </p>
              <p>The second number is the difficulty set for the roll.</p>
              <p>The parameters can be any of the following:</p>
              <ul>
                <li>
                  An A will add one level of Advantage, up to three can be added
                </li>
                <li>
                  A D will add one level of Disadvantage, up to three can be
                  added
                </li>
                <li>
                  A B will add an additional Bonus Die whenever one is offered
                </li>
                <li>
                  An N will make it so 1's do not remove successes when no
                  Disadvantage is imposed
                </li>
              </ul>
              <p>
                Add extra parameters to the end of the code. Some examples are:
              </p>
              <ul>
                <li>5d7: Rolls five dice at a Difficulty of 7</li>
                <li>
                  3d10A: Rolls three dice at a Difficulty of 10 with one level
                  of Advantage
                </li>
                <li>
                  2d8D: Rolls two dice at a Difficulty of 8 with one level of
                  Disadvantage
                </li>
                <li>
                  4d6B: Rolls four dice at a Difficulty of 6. 10's will grant
                  two Bonus Dice
                </li>
                <li>
                  5d7N: Rolls five dice at a Difficulty of 7. 1's will not
                  remove Successes.
                </li>
              </ul>
              <p>(This feature is presently non-functional)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HBHeroPart;
