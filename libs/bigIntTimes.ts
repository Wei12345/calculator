import { intPad, decPad } from "./pad";
import trimZero from "./trimZero";

export default function times(v1: string, v2: string): string {
  if (v1[0] === "-" && v2[0] === "-") {
    return times(v1.slice(1), v2.slice(1));
  }

  if (v1[0] === "-") {
    return `-${times(v1.slice(1), v2)}`;
  }

  if (v2[0] === "-") {
    return `-${times(v1, v2.slice(1))}`;
  }

  const [intV1, decV1] = v1.split(".");
  const [intV2, decV2] = v2.split(".");
  const [paddedV1Int, paddedV2Int] = intPad(intV1, intV2);
  const [paddedV1Dec, paddedV2Dec, decLength] = decPad(decV1, decV2);
  const decTimesLength = decLength * 2;

  if (
    paddedV1Int.length !== paddedV2Int.length ||
    paddedV1Dec.length !== paddedV2Dec.length
  ) {
    throw new Error("value must have same length");
  }

  const paddedV1 = `${paddedV1Int}${paddedV1Dec}`;
  const paddedV2 = `${paddedV2Int}${paddedV2Dec}`;

  const result = (BigInt(paddedV1) * BigInt(paddedV2))
    .toString()
    .padStart(decTimesLength, "0");

  if (decLength === 0) {
    return trimZero(result);
  }

  if (result.length === decTimesLength) {
    return trimZero(`0.${result}`);
  }

  return trimZero(
    `${result.slice(0, -decTimesLength)}.${result.slice(-decTimesLength)}`
  );
}
