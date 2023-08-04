import { expect, describe, it } from "vitest";
import { formattedNumber, formatStrToNumber, formatSum } from "./index.ts";

describe("formattedNumber", () => {
  it("should format a number with three digits per group", () => {
    expect(formattedNumber(1234)).toEqual("1 234");
    expect(formattedNumber(1234567890)).toEqual("1 234 567 890");
  });

  it("should not format a number with less than three digits per group", () => {
    expect(formattedNumber(12)).toEqual("12");
    expect(formattedNumber(123)).toEqual("123");
  });

  it("should not format a number with a decimal point", () => {
    expect(formattedNumber(123.45)).toEqual("123.45");
  });

  it("should not format a number with a negative sign", () => {
    expect(formattedNumber(-1234567890)).toEqual("-1 234 567 890");
  });
});

describe("formatStrToNumber", () => {
  it("should get number type", function () {
    expect(formatStrToNumber("1 000", "1 000")).toEqual({
      countNum: 1000,
      totalNum: 1000,
    });
  });
});

describe("formatSum", () => {
  it("should sum total - count", function () {
    expect(formatSum("1000", "1000")).toEqual("0");
  });
});
