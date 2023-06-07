import { decPad } from "./pad";
import trimZero from "./trimZero";

export default function minus(v1: string, v2: string) {
  const [intV1, decV1] = v1.split(".");
  const [intV2, decV2] = v2.split(".");
  const [paddedV1Dec, paddedV2Dec, decLength] = decPad(decV1, decV2);

  if (paddedV1Dec.length !== paddedV2Dec.length) {
    throw new Error("value must have same length");
  }

  const paddedV1 = `${intV1}${paddedV1Dec}`;
  const paddedV2 = `${intV2}${paddedV2Dec}`;

  const result = (BigInt(paddedV1) - BigInt(paddedV2))
    .toString()
    .padStart(decLength, "0");

  if (decLength === 0) {
    return result;
  }

  if (result.length === decLength) {
    return trimZero(`0.${result}`);
  }

  if (result[0] === "-" && result.length - 1 === decLength) {
    return trimZero(`-0.${result.slice(1)}`);
  }

  return trimZero(`${result.slice(0, -decLength)}.${result.slice(-decLength)}`);
}
