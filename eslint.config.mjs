import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "detect" } },
  },
  {
    ignores: ["node_modules", "dist", "**/*.config.js"],
  },
];
