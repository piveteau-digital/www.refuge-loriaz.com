import twAnimate from "tailwindcss-animate";
import twTypography from "@tailwindcss/typography";
import svgToDataUri from "mini-svg-data-uri";

const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("tailwindcss/lib/util/flattenColorPalette");

export const plugins = [
  twAnimate,
  twTypography,
  addVariablesForColors,
  function ({
    matchUtilities,
    theme,
  }: {
    matchUtilities: Function;
    theme: Function;
  }) {
    matchUtilities(
      {
        "bg-dot-thick": (value: string) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
    );
  },
];

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: Function;
  theme: Function;
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
