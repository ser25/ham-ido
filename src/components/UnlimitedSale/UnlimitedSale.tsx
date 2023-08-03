import TokenIcon from "../../assets/img/ethereum.png";
import HamsterIcon from "../../assets/img/dot.png";
import UnlimitedSaleInformation from "./UnlimitedSaleInformation.tsx";
import { useMetaMask } from "../../hooks/useMetaMask.tsx";
import { MyNumberInput } from "../MyNumberInput.tsx";
import { useState } from "react";
import { toast } from "react-toastify";
import ImageInformationBlock from "./ImageInformationBlock.tsx";
import UnlimitedSaleTitleBlock from "./UnlimitedSaleTitleBlock.tsx";
import UnlimitedSaleButtonBlock from "./UnlimitedSaleButtonBlock.tsx";
import { useMyTokenWithPresale } from "../../hooks/useMyTokenWithPresale.tsx";
import { BLOCKCHAIN, TOKEN_NAME } from "../../assets/data/config.ts";

const UnlimitedSale = () => {
  const [inputValue, setInputValue] = useState<string>("0.001");
  const { wallet, hasProvider } = useMetaMask();
  const { total } = useMyTokenWithPresale();
  const items: {
    image: string;
    title: string;
    total: string | JSX.Element;
    subtitle?: string;
  }[] = [
    {
      image: HamsterIcon,
      title: "ON SALE",
      total: `${total} ${TOKEN_NAME}`,
      subtitle: "100% of total sale",
    },
    {
      image: TokenIcon,
      title: `YOUR ${BLOCKCHAIN} COMMITTED`,
      total:
        hasProvider && wallet.accounts.length > 0 ? (
          <MyNumberInput
            min={0}
            initial={0.001}
            step={0.001}
            onChange={(details) => {
              setInputValue(details.value);
            }}
            onInvalid={() => toast.error("Incorrect value")}
          />
        ) : (
          "0 SUI"
        ),
      subtitle: "100% of total",
    },
  ];
  return (
    <div className={"unlimited-sale"}>
      <div className={"unlimited-sale-container"}>
        <UnlimitedSaleTitleBlock />
        <ImageInformationBlock items={items} />
        <UnlimitedSaleButtonBlock inputValue={inputValue} />
        <UnlimitedSaleInformation inputValue={inputValue} />
      </div>
    </div>
  );
};

export default UnlimitedSale;
