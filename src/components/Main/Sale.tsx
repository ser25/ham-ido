import ownerTokenIcon from "../../assets/img/dot.png";
import { ProgressBar } from "react-bootstrap";
import { useMyTokenWithPresale } from "../../hooks/useMyTokenWithPresale.tsx";
import { TOKEN_NAME } from "../../assets/data/config.ts";
import { formatPercentage } from "../../utils";

const Sale = () => {
  const { count, total, tokenLeft, tokenBalance } = useMyTokenWithPresale();
  return (
    <div className={"sale"}>
      <div className={"sale__title"}>Unlimited Sale</div>
      <div className={"d-flex align-items-center gap-3 mb-2"}>
        <div className={"sale__image"}>
          <img src={ownerTokenIcon} alt="Sui token icon" className={""} />
        </div>
        <div>
          <div className={"sale__total"}>TOTAL {TOKEN_NAME} AVAILABEL</div>
          <div className={"fw-bolder"}>
            {tokenLeft} {TOKEN_NAME}
          </div>
        </div>
      </div>
      <div className={"sale__progressbar"}>
        <ProgressBar
          now={parseFloat(count.replace(/\s+/g, ""))}
          min={0}
          max={parseFloat(total.replace(/\s+/g, ""))}
        />
        <div
          className={
            "d-flex justify-content-between align-items-center gap-3 mt-2 mb-1"
          }
        >
          <div className={"d-flex align-items-center gap-1"}>
            <div
              className={"circle"}
              style={{ backgroundColor: "#0d6efd" }}
            ></div>
            <div className={"fs-6"}>Claimed</div>
          </div>
          <div className={"fw-bolder"}>
            {count} {TOKEN_NAME} ({formatPercentage(count, total)})
          </div>
        </div>
      </div>
      <hr />
      <div className={"mt-2"}>
        {tokenBalance === "0.0" ? (
          <div>You have not participated in this sale yet!</div>
        ) : (
          <div>You have tokens: {tokenBalance}</div>
        )}
      </div>
    </div>
  );
};

export default Sale;
