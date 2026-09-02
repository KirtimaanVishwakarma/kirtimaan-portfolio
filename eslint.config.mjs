import js from "@eslint/js";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // Global ignores
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // Project-specific overrides
  {
    rules: {
      // Allow unused vars prefixed with _ (common TS convention)
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      // No console.log in production code
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
