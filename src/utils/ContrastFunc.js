export function relativeLuminance({ r, g, b }) {
  [r, g, b] = [r, g, b].map(c => {
    c = c / 255;

    if (c <= 0.03928) {
      return c / 12.92;
    }

    return Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function str2sixDigitHex(str) {
  const THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/;
  const THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/;
  const SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/;
  const SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/;

  str = str.trim();

  if (SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
    return str;
  }

  if (SIX_DIGIT_HEX_COLOR_REGEX.test(str)) {
    return '#' + str;
  }

  if (THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
    return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
  }

  if (THREE_DIGIT_HEX_COLOR_REGEX.test(str)) {
    return '#' + str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
  }

  return null;
}

export function str2rgb(str) {
  const sixDigitHex = str2sixDigitHex(str);

  if (sixDigitHex === null) {
    return null;
  }

  return {
    r: parseInt(sixDigitHex.slice(1, 3), 16),
    g: parseInt(sixDigitHex.slice(3, 5), 16),
    b: parseInt(sixDigitHex.slice(5, 7), 16)
  };
}

export function contrast(str1, str2) {
  const L1 = relativeLuminance(str2rgb(str1));
  const L2 = relativeLuminance(str2rgb(str2));

  if (L1 < L2) {
    return (L2 + 0.05) / (L1 + 0.05);
  }

  return (L1 + 0.05) / (L2 + 0.05);
}

export function calcContrast(color1, color2) {
  return Math.round(100000 * contrast(color1, color2)) / 100000;
}