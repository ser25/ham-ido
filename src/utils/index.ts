import { formatUnits } from "ethers";
import Decimal from "decimal.js";

export const formattedNumber = (num: number): string => {
  const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return formattedNumber;
};

export const formatStrToNumber = (
  countStr: string,
  totalStr: string
): { countNum: number; totalNum: number } => {
  const countNum: number = parseFloat(countStr.replace(/\s+/g, ""));
  const totalNum: number = parseFloat(totalStr.replace(/\s+/g, ""));
  return { countNum, totalNum };
};

export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr: string) => {
  return `${addr.substring(0, 8)}...`;
};

export function formatNumberWithCommas(total: bigint): string {
  const numberStr = formatUnits(total, 18n);
  const number = parseFloat(numberStr.replace(/,/g, ""));
  // const integerPart = Math.floor(number);
  const res = formattedNumber(number);
  return res;
}

export function formatSum(count: string, total: string): string {
  const { countNum, totalNum } = formatStrToNumber(count, total);
  const sum: number = totalNum - countNum;
  const res = formattedNumber(sum);
  return res;
}

export function formatPercentage(count: string, total: string) {
  if (+count === 0 && +total === 0) {
    return "0";
  }
  const { countNum, totalNum } = formatStrToNumber(count, total);
  const percentage = (countNum / totalNum) * 100;
  return `${percentage.toFixed(2)}%`;
}

export function getYouWillCoin(value: string, price: string): string {
  if (+value === 0 || +price === 0) return "0";
  const num1 = new Decimal(value);
  const num2 = new Decimal(price);

  const result = num1.div(num2);
  // const res = +value / +price;

  return result.toString();
}

export const addTokenToMetaMask = async (): Promise<void> => {
  const tokenAddress = "0x634aC43006b69dDfa64F538F4B069591e0293a19";
  const tokenSymbol = "SRGT";
  const tokenDecimals = 18;
  // const tokenImage = "http://placekitten.com/200/300";

  try {
    // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress, // The address of the token.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
          decimals: tokenDecimals, // The number of decimals in the token.
          // image: tokenImage, // A string URL of the token logo.
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  } catch (error) {
    console.log(error);
  }
};
