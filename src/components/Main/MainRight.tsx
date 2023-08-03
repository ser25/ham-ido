import Hamster from "../../assets/img/dot.png";
import UnlimitedSale from "../UnlimitedSale/UnlimitedSale.tsx";
import { useMyTokenWithPresale } from "../../hooks/useMyTokenWithPresale.tsx";
import { TOKEN_NAME } from "../../assets/data/config.ts";

const MainRight = () => {
  const { stage, count } = useMyTokenWithPresale();
  return (
    <div className={"main-right main-boarder"}>
      <div
        className={
          "mint-right-title d-flex justify-content-center align-items-center gap-3"
        }
      >
        <div className={"mint-right-title__logo"}>
          <img src={Hamster} alt="" />
        </div>
        <div className={"mint-right-title__title bg-ham"}>
          Hamster {TOKEN_NAME}
        </div>
      </div>
      <div className={"main-right__finished text-center"}>
        {stage === 1 || stage === 2 ? (
          <div>Started {count}</div>
        ) : (
          <div>Finished Presale has not started yet or has already ended!</div>
        )}
      </div>
      <UnlimitedSale />
    </div>
  );
};

export default MainRight;
