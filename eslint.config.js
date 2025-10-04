// @ts-check

import path from "node:path";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
    { ignores: ["packages/*/dist", "node_modules"] },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...pluginVue.configs["flat/recommended"],
    eslintConfigPrettier,
    {
        languageOptions: {
            globals: { ...globals.browser },
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                project: true,
                tsconfigRootDir: path.resolve("./"),
                extraFileExtensions: [".vue"],
            },
        },
        rules: {
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-non-null-assertion": 0,
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/explicit-module-boundary-types": 0,
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "require-await": "off",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/unbound-method": "error",
            "vue/html-indent": ["warn", 4],
            "vue/no-mutating-props": "off",
            "vue/max-attributes-per-line": "off",
            "vue/html-self-closing": ["warn", { html: { void: "any" } }],
            "vue/multi-word-component-names": "off",
            "vue/singleline-html-element-content-newline": "off",
        },
    },
);
