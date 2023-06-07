import { divPad } from "./pad";
import trimZero from "./trimZero";

export default function div(
  v1: string,
  v2: string,
  precision: number = 20
): string {
  if (v1[0] === "-" && v2[0] === "-") {
    return div(v1.slice(1), v2.slice(1));
  }

  if (v1[0] === "-") {
    return `-${div(v1.slice(1), v2)}`;
  }

  if (v2[0] === "-") {
    return `-${div(v1, v2.slice(1))}`;
  }

  const [paddedV1, paddedV2] = divPad(v1, v2);

  const result = (
    BigInt(`${paddedV1}${"".padEnd(precision, "0")}`) / BigInt(paddedV2)
  ).toString();

  if (paddedV2.length > paddedV1.length) {
    const paddedResult = result.padStart(precision, "0");
    return trimZero(`0.${paddedResult}`);
  }

  if (result.length === precision) {
    return trimZero(`0.${result}`);
  }

  return trimZero(`${result.slice(0, -precision)}.${result.slice(-precision)}`);
}
