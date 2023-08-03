import { ethers, formatEther, parseUnits } from "ethers";
import { ADDRESS } from "../assets/data/config.ts";
import ABI from "../assets/data/abi.json";
import { toast } from "react-toastify";
import { useMetaMask } from "./useMetaMask.tsx";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { formatNumberWithCommas, formatSum } from "../utils";

interface MyTokenWithPresaleContextData {
  handlerBuyOnPresale: Promise<void>;
  total: string;
  count: string;
  price: string;
  tokenLeft: string;
  stage: number;
  tokenBalance: string;
}

const MyTokenWithPresaleContext = createContext(
  {} as MyTokenWithPresaleContextData
);

export const MyTokenWithPresaleProvider = ({ children }: PropsWithChildren) => {
  const [total, setTotal] = useState<string>("0");
  const [count, setCount] = useState<string>("0");
  const [stage, setStage] = useState<number>(1);
  const [price, setPrice] = useState<string>("0.01");
  const [tokenLeft, setTokenLeft] = useState<string>("0");
  const [tokenBalance, setTokenBalance] = useState<string>("0.0");

  const { wallet } = useMetaMask();
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contractRead = new ethers.Contract(ADDRESS, ABI.result, provider);

  const getTokenLeft = (count: string, total: string) => {
    setTokenLeft(formatSum(count, total));
  };

  const getPresaleRound = async (): Promise<number> => {
    const stage = await contractRead.stage();
    setStage(Number(stage));
    return Number(stage);
  };

  async function checkTokenBalance() {
    try {
      const balance = await contractRead.balanceOf(wallet.accounts[0]);
      setTokenBalance(formatEther(balance));
    } catch (error) {
      setTokenBalance("0.0");
    }
  }

  const getPrice = async () => {
    const stage = await getPresaleRound();
    let price: number;
    if (stage === 1) {
      price = await contractRead.presaleCost1();
    } else if (stage === 2) {
      price = await contractRead.presaleCost2();
    } else {
      price = 0;
    }
    setPrice(formatEther(price));
  };

  const getTotalSupply = async (): Promise<void> => {
    try {
      const total: bigint = await contractRead.totalSupply();
      const res: string = formatNumberWithCommas(total);
      setCount(res);
    } catch (e) {
      console.log("err", e);
    }
  };

  const getFinalTotalSupply = async (): Promise<void> => {
    const total: bigint = await contractRead.finalTotalSupply();
    const res: string = formatNumberWithCommas(total);
    setTotal(res);
  };
  useEffect(() => {
    getFinalTotalSupply();
    getTotalSupply();
    getPresaleRound();
    getTokenLeft(count, total);
    checkTokenBalance();
    getPrice();
  }, [wallet.accounts[0], tokenBalance, count]);

  const handlerBuyOnPresale = async (sum: string): Promise<void> => {
    if (window.ethereum) {
      const balance = formatEther(
        await provider.getBalance(wallet.accounts[0])
      );

      if (Number(balance) === 0) {
        toast.error("You have 0 coin. Fill up your wallet");
        return;
      }

      if (Number(balance) <= +sum) {
        toast.error("You have not enough coin");
        return;
      }

      const signer = await provider.getSigner();
      const contractWrite = new ethers.Contract(ADDRESS, ABI.result, signer);
      const amount = parseUnits(sum, 18);
      try {
        const tx = await contractWrite.buyOnPresale({ value: amount });
        const response = await tx.wait();
        console.log("response: ", response);
        toast.success("Success");
        await getTotalSupply();
      } catch (err: any) {
        console.log("err", err);
        if (
          err.reason === "Presale has not started yet or has already ended!"
        ) {
          toast.error("Presale has not started yet or has already ended");
        } else if (err.reason === "Too little value!") {
          toast.error("Too little value!");
        } else if (err.reason === "Final supply reached!") {
          toast.error("Final supply reached!");
        } else if (err.action === "estimateGas") {
          toast.error(`You do not have enough coins to cover the GAS`);
        } else {
          toast.error("Failed");
        }
      }
    }
  };

  return (
    <MyTokenWithPresaleContext.Provider
      value={{
        handlerBuyOnPresale,
        total,
        count,
        price,
        tokenLeft,
        stage,
        tokenBalance,
      }}
    >
      {children}
    </MyTokenWithPresaleContext.Provider>
  );
};
export const useMyTokenWithPresale = () => {
  const context = useContext(MyTokenWithPresaleContext);
  return context;
};
