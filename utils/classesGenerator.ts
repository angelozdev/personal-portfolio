/* Local Types */
type Options = {
  name: string;
  attribute: string;
  hasDarkMode?: boolean;
};

function classesGenerator(object: {}, options: Options): string {
  const { name, attribute, hasDarkMode = false } = options;

  let string = "";

  for (const color in object) {
    for (const variant in object[color]) {
      const value = object[color][variant];
      string += `.${name}-${color}-${variant}{
        ${attribute}: ${value};
      }`;

      if (hasDarkMode) {
        string += `[class="dark-theme"] .dark-${name}-${color}-${variant}{
          ${attribute}: ${value} !important;
        }`;
      }
    }
  }

  return string;
}

export default classesGenerator;
