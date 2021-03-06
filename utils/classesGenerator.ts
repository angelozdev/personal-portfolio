/* Local Types */
type Options = {
  name: string;
  attribute: string;
  hasDarkMode?: boolean;
  isImportant?: boolean;
};

function classesGenerator(object: {}, options: Options): string {
  const { name, attribute, hasDarkMode = false, isImportant = false } = options;

  let string = "";

  for (const color in object) {
    if (typeof object[color] === "string") {
      const value = object[color];

      string += `.${name}-${color}{
        ${attribute}: ${value} ${isImportant ? "!important" : ""};
      }`;

      if (hasDarkMode) {
        string += `[data-theme="dark-theme"] .dark-${name}-${color}{
          ${attribute}: ${value} !important;
        }`;
      }

      continue;
    }

    for (const variant in object[color]) {
      const value = object[color][variant];
      string += `.${name}-${color}-${variant}{
        ${attribute}: ${value} ${isImportant ? "!important" : ""};
      }`;

      if (hasDarkMode) {
        string += `[data-theme="dark-theme"] .dark-${name}-${color}-${variant}{
          ${attribute}: ${value} !important;
        }`;
      }
    }
  }

  return string;
}

export default classesGenerator;
