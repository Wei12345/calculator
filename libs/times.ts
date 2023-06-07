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

  const tmpSums: number[] = [];
  for (let i = paddedV1.length - 1; i >= 0; i--) {
    if (paddedV1[i] === ".") {
      continue;
    }

    for (let j = paddedV2.length - 1; j >= 0; j--) {
      if (paddedV2[j] === ".") {
        continue;
      }

      const index = i + j;
      if (index === 0) {
        if (tmpSums[index]) {
          tmpSums[index] += Number(paddedV1[i]) * Number(paddedV2[j]);
          continue;
        }

        tmpSums[index] = Number(paddedV1[i]) * Number(paddedV2[j]);
        continue;
      }

      if (!tmpSums[index]) {
        tmpSums[index] = 0;
      }
      if (!tmpSums[index - 1]) {
        tmpSums[index - 1] = 0;
      }

      const sum = Number(paddedV1[i]) * Number(paddedV2[j]) + tmpSums[index];

      tmpSums[index] = sum % 10;
      tmpSums[index - 1] += Math.floor(sum / 10);
    }
  }

  const result = tmpSums.map((n) => n.toString()).join("");

  if (decLength === 0) {
    return trimZero(result);
  }

  return trimZero(
    `${result.slice(0, -decTimesLength)}.${result.slice(-decTimesLength)}`
  );
}
