export default function trimZero(v: string): string {
  const [int, dec] = v.split(".");
  const trimmedInt = trimZeroInt(int);

  if (dec) {
    const trimmedDec = trimZeroDec(dec);
    return trimmedDec === "" ? trimmedInt : `${trimmedInt}.${trimmedDec}`;
  }

  return trimmedInt;
}

function trimZeroInt(v: string): string {
  return v.replace(/^0+(?=\d)/, "");
}

function trimZeroDec(v: string): string {
  return v.replace(/0+$/, "");
}
