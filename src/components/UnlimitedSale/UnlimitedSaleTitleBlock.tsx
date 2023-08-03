import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const UnlimitedSaleTitleBlock = () => {
  return (
    <div
      className={"d-flex justify-content-between align-items-center gap-3 mb-3"}
    >
      <div className={"unlimited-sale__title"}>Unlimited Sale</div>
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={
          <Tooltip id={`tooltip-${"bottom"}`}>
            No limits on the amount you can commit. Additional fee applies when
            claiming.
          </Tooltip>
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="unlimited-sale__svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          ></path>
        </svg>
      </OverlayTrigger>
    </div>
  );
};

export default UnlimitedSaleTitleBlock;
