import plus from "./plus";
import { pad } from "./pad";
import trimZero from "./trimZero";

export default function minus(v1: string, v2: string): string {
  if (v1[0] === "-" && v2[0] === "-") {
    return minus(v2.slice(1), v1.slice(1));
  }

  if (v1[0] === "-") {
    return `-${plus(v2, v1.slice(1))}`;
  }

  if (v2[0] === "-") {
    return plus(v1, v2.slice(1));
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

  for (let i = 0; i < paddedV1.length; i++) {
    if (paddedV1[i] > paddedV2[i]) {
      break;
    }

    if (paddedV1[i] < paddedV2[i]) {
      return `-${minus(paddedV2, paddedV1)}`;
    }
  }

  const tmpDiff: number[] = [];
  for (let i = paddedV1.length - 1; i >= 0; i--) {
    if (paddedV1[i] === "." && paddedV2[i] === ".") {
      continue;
    }

    const diff = Number(paddedV1[i]) - Number(paddedV2[i]);

    const lastIndex = tmpDiff.length - 1;
    if (tmpDiff[lastIndex] < 0) {
      tmpDiff[lastIndex] += 10;
      tmpDiff.push(diff - 1);
      continue;
    }

    tmpDiff.push(diff);
  }

  const result = tmpDiff
    .reverse()
    .map((n) => n.toString())
    .join("");

  if (decLength === 0) {
    return trimZero(result);
  }

  return trimZero(`${result.slice(0, -decLength)}.${result.slice(-decLength)}`);
}
