/* Local Types */
type Options = {
  name: string;
};

function getDesignTokens(object: {}, options: Options): string {
  const { name } = options;

  let string = "";

  for (const color in object) {
    if (typeof object[color] === "string") {
      const value = object[color];

      string += `--${name}-${color}: ${value};`;

      continue;
    }

    for (const variant in object[color]) {
      const value = object[color][variant];
      string += `--${name}-${color}-${variant}: ${value};`;
    }
  }

  return string;
}

export default getDesignTokens;
