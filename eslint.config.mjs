import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Import Next.js default config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Override or disable specific rules
  {
    files: ["**/*.ts", "**/*.tsx"], // Optional: apply to TS/TSX only
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "warn", // Instead of error
    },
  },
];

export default eslintConfig;
