import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility layer for using legacy ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname, // Specify the base directory for ESLint
});

const eslintConfig = [
  // Use the Next.js recommended config for core web vitals
  ...compat.extends("next/core-web-vitals"),

  // Add your custom ESLint rules here
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match all JavaScript/TypeScript files
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 support
      sourceType: "module", // Use ES modules
    },
    rules: {
      // Example custom rules
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // React is always in scope with Next.js
      "react/prop-types": "off", // Turn off prop-types checks (if using TypeScript)
    },
  },
];

export default eslintConfig;

