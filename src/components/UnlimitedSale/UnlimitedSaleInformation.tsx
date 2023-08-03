import UnlimitedSaleInformationItem from "./UnlimitedSaleInformationItem.tsx";
import {
  addTokenToMetaMask,
  formatPercentage,
  getYouWillCoin,
} from "../../utils";
import { useMyTokenWithPresale } from "../../hooks/useMyTokenWithPresale.tsx";
import {
  BLOCKCHAIN,
  MINIMUM_COMMIT,
  TOKEN_NAME,
} from "../../assets/data/config.ts";
import { FC } from "react";

type UnlimitedSaleInformationProps = {
  inputValue: string;
};

const UnlimitedSaleInformation: FC<UnlimitedSaleInformationProps> = ({
  inputValue,
}) => {
  const { price, tokenLeft, count, total } = useMyTokenWithPresale();
  const items: { title: string; data: string }[] = [
    {
      title: `Price per ${TOKEN_NAME}`,
      data: `${price} ${BLOCKCHAIN}`,
    },
    {
      title: "Minimum Commit",
      data: `${MINIMUM_COMMIT} ${BLOCKCHAIN}`,
    },
    {
      title: "Total committed",
      data: `${tokenLeft} ${TOKEN_NAME} (${formatPercentage(count, total)})`,
    },
    // {
    //   title: "Funds to raise",
    //   data: "1,000,000 SUI",
    // },
  ];
  return (
    <>
      <div className={"d-flex justify-content-between my-3 flex-wrap"}>
        <button
          className={"btn btn-outline-dark"}
          style={{ marginBottom: 10, marginTop: 10 }}
          onClick={addTokenToMetaMask}
        >
          Add token {TOKEN_NAME} to Metamask
        </button>

        <div>
          <div>You'll get approximately</div>
          <div className={"fw-bold"}>
            {getYouWillCoin(inputValue, price)} {TOKEN_NAME}
          </div>
        </div>
      </div>

      <div>
        {items.map(({ title, data }) => (
          <UnlimitedSaleInformationItem key={title} title={title} data={data} />
        ))}
      </div>
    </>
  );
};

export default UnlimitedSaleInformation;
