export function pad(v1: string, v2: string): [string, string, number] {
  const [v1Int, v1Dec] = v1.split(".");
  const [v2Int, v2Dec] = v2.split(".");

  const [paddedV1Int, paddedV2Int] = intPad(v1Int, v2Int);

  if (!v1Dec && !v2Dec) {
    return [paddedV1Int, paddedV2Int, 0];
  }

  const [paddedV1Dec, paddedV2Dec, decLength] = decPad(v1Dec, v2Dec);
  return [
    `${paddedV1Int}.${paddedV1Dec}`,
    `${paddedV2Int}.${paddedV2Dec}`,
    decLength,
  ];
}

export function intPad(v1: string, v2: string): [string, string, number] {
  if (v1.length > v2.length) {
    return [v1, v2.padStart(v1.length, "0"), v1.length];
  }

  return [v1.padStart(v2.length, "0"), v2, v2.length];
}

export function decPad(v1?: string, v2?: string): [string, string, number] {
  if (v1 && v2) {
    return v1.length > v2.length
      ? [v1, v2.padEnd(v1.length, "0"), v1.length]
      : [v1.padEnd(v2.length, "0"), v2, v2.length];
  }

  if (v1) {
    return [v1, "".padEnd(v1.length, "0"), v1.length];
  }

  if (v2) {
    return ["".padEnd(v2.length, "0"), v2, v2.length];
  }

  return ["", "", 0];
}

export function divPad(v1: string, v2: string): [string, string] {
  const [intV1, decV1] = v1.split(".");
  const [intV2, decV2] = v2.split(".");

  if (decV1 && decV2) {
    const maxDecLength = Math.max(decV1.length, decV2.length);
    return [
      `${intV1}${decV1.padEnd(maxDecLength, "0")}`,
      `${intV2}${decV2.padEnd(maxDecLength, "0")}`,
    ];
  }

  if (decV1) {
    return [`${intV1}${decV1}`, `${intV2}${"".padEnd(decV1.length, "0")}`];
  }

  if (decV2) {
    return [`${intV1}${"".padEnd(decV2.length, "0")}`, `${intV2}${decV2}`];
  }

  return [intV1, intV2];
}
