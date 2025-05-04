import d10svg from "../assets/img/d10.svg";

interface Props {
  dicecolor?: string;
  dicenumber?: number;
}

const d10Dice = ({ dicecolor, dicenumber }: Props) => {
  return (
    <>
      <div className="col-lg-2">
        <img src={d10svg} className={dicecolor} />
        <p className="dice-number">{dicenumber}</p>
      </div>
    </>
  );
};

export default d10Dice;
