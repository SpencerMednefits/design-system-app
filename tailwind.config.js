/** @type {import('tailwindcss').Config} */
import kebabcase from "lodash.kebabcase";
import { tokens } from "./tokens/colors";

const colors = Object.fromEntries(
  Object.values(tokens.color).map(({ attributes, value }) => [
    kebabcase(attributes.type),
    value,
  ])
);

console.log(colors);

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
