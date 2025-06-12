import React, { useState } from "react";
import d10svg from "../assets/img/d10.svg";
import HBbook1 from "../assets/hellbent_1_03.pdf";
import HBbook2 from "../assets/hellbent_2_01.pdf";
import HBbook3 from "../assets/hellbent_3_01.pdf";
import HBbook3_2 from "../assets/hellbent_3_02.pdf";
document.onload = function () {
  document.title = "HellBent - A Modern Occult D10 Roleplaying Game";
};
function HBHeroPart() {
  const [HB1visible, setHB1Visible] = useState(false);
  const [HB2visible, setHB2Visible] = useState(false);
  const [HB3visible, setHB3Visible] = useState(false);
  const [HB3_2visible, setHB3_2Visible] = useState(true);
  const Click1 = () => {
    setHB1Visible(true);
    setHB2Visible(false);
    setHB3Visible(false);
    setHB3_2Visible(false);
  };
  const Click2 = () => {
    setHB1Visible(false);
    setHB2Visible(true);
    setHB3Visible(false);
    setHB3_2Visible(false);
  };
  const Click3 = () => {
    setHB1Visible(false);
    setHB2Visible(false);
    setHB3Visible(true);
    setHB3_2Visible(false);
  };
  const Click3_2 = () => {
    setHB1Visible(false);
    setHB2Visible(false);
    setHB3Visible(false);
    setHB3_2Visible(true);
  };

  const [diceRoll, setDiceRoll] = useState("");

  const [DiceArray, setDiceArray] = useState<React.ReactElement[]>([]);

  const [successesDisplay, setsuccessesDisplay] = useState("");

  let Successes = 0;
  let BonusDiceToRoll = 0;

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiceRoll(event.target.value);
  };

  const countOccurrences = <T,>(array: T[], value: T): number => {
    return array.reduce((count, element) => {
      return element === value ? count + 1 : count;
    }, 0);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDiceArray([]);
    setsuccessesDisplay("");
    await timeout(10); //for 0.01 sec delay
    console.log("------------------------");
    console.log("Input Value:", diceRoll);
    // Validate the input format (e.g., "XdY" where X and Y are numbers)
    const regex = /^\d+d\d+([ADBN]*)$/; // Regex to match the format "XdY" with optional parameters
    if (!regex.test(diceRoll)) {
      console.error(
        "Invalid input format. Please use '#d#' format and adhere to available parameters."
      );
      alert(
        "Invalid input format. Please use '#d#' format and adhere to available parameters."
      );
      setDiceRoll(""); // Clear the input field after submit
      console.log("------------------------");
      return;
    }
    // Check to see if there are any parameters after the second number
    const params = diceRoll
      .split(/d|(?=\D)/)
      .slice(2)
      .join("");
    const paramsArray = [...params];
    console.log("Parameters:", paramsArray);

    const Quantity = parseInt(diceRoll.split("d")[0]);
    const Difficulty = parseInt(diceRoll.split("d")[1].split(/A|D|B|N/)[0]);
    if (Difficulty > 10 || Difficulty < 6) {
      console.error("Difficulty must be between 6 and 10.");
      alert("Difficulty must be between 6 and 10.");
      setDiceRoll(""); // Clear the input field after submit
      console.log("------------------------");
      return;
    }
    console.log("Number of Dice to roll:", Quantity);
    console.log("Difficulty of roll:", Difficulty);
    if (Quantity > 30) {
      console.error("Maximum number of dice allowed is 30.");
      alert("Maximum number of dice allowed is 30.");
      setDiceRoll(""); // Clear the input field after submit
      console.log("------------------------");
      return;
    }
    let NumberToBonus = 10;
    let NumberToRemove = 1;
    // Check for parameters and apply them accordingly
    let AdvNumber = countOccurrences(paramsArray, "A");
    let DisNumber = countOccurrences(paramsArray, "D");
    const BonusNumber = countOccurrences(paramsArray, "B");
    const No1Number = countOccurrences(paramsArray, "N") ? true : false;
    if (AdvNumber > 3) {
      AdvNumber = 3;
    }
    if (DisNumber > 3) {
      DisNumber = 3;
    }
    console.log("Advantage Level:", AdvNumber);
    console.log("Disadvantage Level:", DisNumber);
    console.log("Extra Bonus Dice on Crit:", BonusNumber);
    console.log("No 1's when no DisAdv:", No1Number);
    // Apply Advantage and Disadvantage
    for (let i = 0; i < AdvNumber; i++) {
      NumberToBonus -= 1;
    }
    for (let i = 0; i < DisNumber; i++) {
      NumberToRemove += 1;
    }
    console.log("Number needed to score Bonus Die:", NumberToBonus);
    console.log("Number needed to remove Success:", NumberToRemove);

    RollTheDice(
      Quantity,
      Difficulty,
      NumberToBonus,
      NumberToRemove,
      BonusNumber,
      No1Number,
      false
    );
    return;
  };

  const RollTheDice = async (
    Quantity: number,
    Difficulty: number,
    NumberToBonus: number,
    NumberToRemove: number,
    BonusNumber: number,
    No1Number: boolean,
    BonusRoll: boolean
  ) => {
    BonusDiceToRoll = 0; // Reset BonusDiceToRoll for each roll
    for (let i = 0; i < Quantity; i++) {
      // Actually roll the dice
      let randomNumber: number = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      console.log(
        "Die #",
        i + 1,
        " = ",
        randomNumber,
        randomNumber >= Difficulty ? "!" : "",
        randomNumber >= NumberToBonus ? "!!!" : "",
        ((No1Number === false && randomNumber <= NumberToRemove) ||
          (No1Number === true && randomNumber <= NumberToRemove - 1)) &&
          BonusRoll === false
          ? "..."
          : ""
      );
      let dicenumbercolor = "";
      let dicefacecolor = "dice-red"; // Default color for the die face
      if (BonusRoll === true) {
        dicefacecolor = "dice-white";
      }
      if (randomNumber >= Difficulty) {
        Successes += 1;
        dicenumbercolor = "dice-success";
      }
      if (
        ((No1Number === false && randomNumber <= NumberToRemove) ||
          (No1Number === true && randomNumber <= NumberToRemove - 1)) &&
        BonusRoll === false
      ) {
        Successes -= 1;
        dicenumbercolor = "dice-failure";
      }
      if (randomNumber >= NumberToBonus) {
        BonusDiceToRoll += BonusNumber + 1;
        dicenumbercolor = "dice-crit-success";
      }
      // Add the dice to the layout
      setDiceArray((prevDiceArray) => [
        ...prevDiceArray,
        <div
          className="col-md-2 dice-col"
          key={i}
          style={{
            transform: "translateY(5%)",
            opacity: 0,
            animation: "fadeInFromBottom 0.35s ease-in forwards",
          }}
        >
          <img src={d10svg} className={"dicesvg " + dicefacecolor} />
          <div className={"dice-number " + dicenumbercolor}>{randomNumber}</div>
        </div>,
      ]);
    }
    console.log("Successes:", Successes);
    console.log("Bonus Dice to roll:", BonusDiceToRoll);
    if (BonusDiceToRoll > 0 && Successes < 51) {
      console.log("Rolling Bonus Dice...");
      await timeout(750);
      RollTheDice(
        BonusDiceToRoll,
        Difficulty,
        NumberToBonus,
        NumberToRemove,
        BonusNumber,
        No1Number,
        true
      );
    } else if (Successes >= 51) {
      await timeout(750);
      console.log("Successes capped at 50.");
      setsuccessesDisplay("Successes: 50+");
      setDiceRoll(""); // Clear the input field after submit
      console.log("------------------------");
    } else {
      await timeout(750);
      console.log("No Bonus Dice to roll.");
      console.log("=== Final Successes:", Successes, "===");
      setsuccessesDisplay("Successes: " + Successes);
      setDiceRoll(""); // Clear the input field after submit
      console.log("------------------------");
    }
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
                className={HB3_2visible ? "btn btn-danger" : "btn btn-dark"}
                onClick={Click3_2}
              >
                V3.2
              </a>
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
              {HB3_2visible && (
                <object
                  data={HBbook3_2}
                  type="application/pdf"
                  width="100%"
                  height="1000px"
                >
                  <p>
                    Your browser doesn't support PDFs. Please download the PDF:{" "}
                    <a href={HBbook3_2}>Download PDF</a>
                  </p>
                </object>
              )}
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
              <div id="DiceArea" className="DiceArea">
                <div className="row justify-content-center">
                  {DiceArray.map((dice, index) => (
                    <React.Fragment key={index}>{dice}</React.Fragment>
                  ))}
                </div>
                <div className="row justify-content-center">
                  <h2>{successesDisplay}</h2>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control DiceInput"
                  type="text"
                  placeholder="Enter your rolling code here"
                  value={diceRoll}
                  onChange={handleChange}
                />
                <button className="btn btn-dark" type="submit">
                  Roll Dice
                </button>
              </form>
            </div>
            <div className="CodeExplanation">
              <p>
                Enter a code in the format of <b>"#d#"</b> with any parameters
                included after the second number.
              </p>
              <p>
                The first number is the number of dice to roll. Must be above 1.
              </p>
              <p>
                The second number is the difficulty set for the roll. Must be
                6-10.
              </p>
              <p>The parameters can be any of the following:</p>
              <ul>
                <li>
                  An A will add one level of Advantage, which increases the
                  possibility of getting Bonus Dice. Up to three can be added.
                </li>
                <li>
                  A D will add one level of Disadvantage, which increases the
                  possibility of successes being removed from your total. Up to
                  three can be added.
                </li>
                <li>
                  A B will add an additional Bonus Die whenever one is normally
                  offered.
                </li>
                <li>
                  An N will make it so 1's do not remove successes when no
                  Disadvantage is imposed, or reduce the overall Disadvantage
                  level by one.
                </li>
              </ul>
              <p>
                Add extra parameters to the end of the code. Some examples are:
              </p>
              <ul>
                <li>5d7: Rolls five dice at a Difficulty of 7</li>
                <li>
                  3d10A: Rolls three dice at a Difficulty of 10 with Advantage
                </li>
                <li>
                  2d8DD: Rolls two dice at a Difficulty of 8 with double
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
                <li>
                  10d6AAABBN: Rolls ten dice at a Difficulty of 6 with triple
                  Advantage. 7's, 8's, 9's, and 10's will grant three Bonus
                  Dice, and 1's will not remove Successes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HBHeroPart;
