import minus from "./minus";
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

  let decLength = 0;
  let index = Math.min(paddedV1.length, paddedV2.length);
  let partPaddedV1 = paddedV1.slice(0, index);
  const tmpQ: number[] = [];

  while (decLength <= precision) {
    let count = 0;
    while (!lessThan(partPaddedV1, paddedV2)) {
      partPaddedV1 = minus(partPaddedV1, paddedV2);
      count += 1;
    }

    tmpQ.push(count);

    if (index === paddedV1.length) {
      if (trimZero(partPaddedV1) === "0") {
        break;
      }

      if (decLength < precision) {
        partPaddedV1 = `${partPaddedV1}0`;
        decLength += 1;
        continue;
      } else {
        break;
      }
    }

    partPaddedV1 = `${partPaddedV1}${paddedV1[index]}`;
    index += 1;
  }

  const result = tmpQ
    .map((n) => n.toString())
    .join("")
    .padStart(decLength, "0");

  if (decLength === 0) {
    return trimZero(result);
  }

  return trimZero(`${result.slice(0, -decLength)}.${result.slice(-decLength)}`);
}

function lessThan(v1: string, v2: string): boolean {
  if (v1.length < v2.length) {
    return true;
  }

  if (v1.length > v2.length) {
    return false;
  }

  for (let i = 0; i < v1.length; i++) {
    if (v1[i] < v2[i]) {
      return true;
    }

    if (v1[i] > v2[i]) {
      return false;
    }
  }

  return false;
}
