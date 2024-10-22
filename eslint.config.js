import react from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json", // <-- Point to your project's "tsconfig.json" or create a new one.
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  react.configs.debug, // <-- Requires type information
];
