import ButtonConnectMetaMask from "../ButtonConnectMetaMask.tsx";
import { useMetaMask } from "../../hooks/useMetaMask.tsx";
import { useMyTokenWithPresale } from "../../hooks/useMyTokenWithPresale.tsx";
import { BLOCKCHAIN } from "../../assets/data/config.ts";

type UnlimitedSaleButtonBlockProps = {
  inputValue: string;
};

const UnlimitedSaleButtonBlock = ({
  inputValue,
}: UnlimitedSaleButtonBlockProps) => {
  const { wallet, hasProvider } = useMetaMask();
  const { handlerBuyOnPresale } = useMyTokenWithPresale();

  return (
    <div className={"d-flex justify-content-center"}>
      {hasProvider && wallet.accounts.length > 0 ? (
        <button
          className="wkit-button custom-button gradient-button commit-sui"
          // @ts-ignore
          onClick={() => handlerBuyOnPresale(inputValue)}
        >
          Commit {BLOCKCHAIN}
        </button>
      ) : (
        <ButtonConnectMetaMask />
      )}
    </div>
  );
};

export default UnlimitedSaleButtonBlock;
