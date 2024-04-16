import globals from "globals";
import typescript from "typescript-eslint";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": typescript.plugin,
    },

    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.browser,
      },

      parser: typescript.parser,
      parserOptions: {
        sourceType: "module",
        project: true,
        tsconfigRootDir: "./",
      },
    },

    rules: {
      "@typescript-eslint/prefer-readonly-parameter-types": [
        "warn",
        {
          allow: [
            {
              from: "lib",
              name: ["Node"],
            },
            {
              from: "package",
              package: "solid-js",
              name: ["JSX", "JSXElement", "JSX.Element", "JSX.ArrayElement"],
            },
          ],
        },
      ],
    },
  },
];
