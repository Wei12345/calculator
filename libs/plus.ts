import minus from "./minus";
import { pad } from "./pad";
import trimZero from "./trimZero";

export default function plus(v1: string, v2: string): string {
  if (v1[0] === "-" && v2[0] === "-") {
    return `-${plus(v1.slice(1), v2.slice(1))}`;
  }

  if (v1[0] === "-") {
    return minus(v2, v1.slice(1));
  }

  if (v2[0] === "-") {
    return minus(v1, v2.slice(1));
  }

  const [paddedV1, paddedV2, decLength] = pad(v1, v2);

  if (paddedV1.length !== paddedV2.length) {
    throw new Error("value must have same length");
  }

  const decIndex = -decLength - 1;
  if (
    decLength > 0 &&
    paddedV1.at(decIndex) !== "." &&
    paddedV2.at(decIndex) !== "."
  ) {
    throw new Error("dec must have same length");
  }

  const tmpSums: number[] = [];
  for (let i = paddedV1.length - 1; i >= 0; i--) {
    if (paddedV1[i] === "." && paddedV2[i] === ".") {
      continue;
    }

    const sum = Number(paddedV1[i]) + Number(paddedV2[i]);

    const lastIndex = tmpSums.length - 1;
    if (tmpSums[lastIndex] > 9) {
      tmpSums[lastIndex] -= 10;
      tmpSums.push(sum + 1);
      continue;
    }

    tmpSums.push(sum);
  }

  const result = tmpSums
    .reverse()
    .map((n) => n.toString())
    .join("");

  if (decLength === 0) {
    return trimZero(result);
  }

  return trimZero(`${result.slice(0, -decLength)}.${result.slice(-decLength)}`);
}
