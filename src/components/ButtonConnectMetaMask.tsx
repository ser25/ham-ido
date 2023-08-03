import { formatAddress } from "../utils";
import { useMetaMask } from "../hooks/useMetaMask.tsx";

const ButtonConnectMetaMask = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  return (
    <div className="custom-button gradient-button">
      {!hasProvider && (
        <a href="https://metamask.io" target="_blank">
          Install MetaMask
        </a>
      )}
      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <button disabled={isConnecting} onClick={connectMetaMask}>
          Connect MetaMask
        </button>
      )}
      {hasProvider && wallet.accounts.length > 0 && (
        <>
          <a
            className="text_link tooltip-bottom"
            href={`https://etherscan.io/address/${wallet}`}
            target="_blank"
            data-tooltip="Open in Block Explorer"
          >
            {formatAddress(wallet.accounts[0])}
          </a>
          {/*<div>Balance: {wallet.balance}</div>*/}
        </>
      )}
    </div>
  );
};

export default ButtonConnectMetaMask;
