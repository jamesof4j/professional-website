import d10svg from "../assets/img/d10.svg";

interface Props {
  dicecolor?: string;
  dicenumber: number;
}

const D10Dice = ({ dicecolor = "dice-white", dicenumber }: Props) => {
  return (
    <>
      <img src={d10svg} className={dicecolor} />
      <p className="dice-number">{dicenumber}</p>
    </>
  );
};
export default D10Dice;
