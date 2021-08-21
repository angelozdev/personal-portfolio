/* Local Types */
type Options = {
  attribute: string;
  hasDarkMode?: boolean;
  hover?: boolean;
  isImportant?: boolean;
  name: string;
};

function classesGenerator(object: {}, options: Options): string {
  const {
    attribute,
    hasDarkMode = false,
    hover = false,
    isImportant = false,
    name,
  } = options;

  let string = "";

  for (const color in object) {
    if (typeof object[color] === "string") {
      const value = object[color];

      string += `.${name}-${color}{${attribute}: ${value} ${
        isImportant ? "!important" : ""
      };}`;

      if (hasDarkMode) {
        string += `[data-theme="dark-theme"] .dark-${name}-${color}{${attribute}: ${value} !important;}`;
      }

      if (hover) {
        string += `.hover\\:${name}-${color}:hover {${attribute}: ${value} !important;}`;
      }

      continue;
    }

    for (const variant in object[color]) {
      const value = object[color][variant];
      string += `.${name}-${color}-${variant}{${attribute}: ${value} ${
        isImportant ? "!important" : ""
      };}`;

      if (hasDarkMode) {
        string += `[data-theme="dark-theme"] .dark-${name}-${color}-${variant}{${attribute}: ${value} !important;}`;
      }

      if (hover) {
        string += `.hover\\:${name}-${color}-${variant}:hover {${attribute}: ${value} !important;}`;
      }
    }
  }

  return string;
}

export default classesGenerator;
