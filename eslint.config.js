import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
	{
		ignores: ["dist"],
	},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintPluginPrettier,
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			// React Hooks rules
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],

			// TypeScript specific rules
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports" },
			],

			// General code quality rules
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-debugger": "warn",
			"no-duplicate-imports": "error",
			"no-unused-expressions": "error",
			"no-var": "error",
			"prefer-const": "error",
			"spaced-comment": ["error", "always"],

			// Disable conflicting rules
			indent: "off",
			"no-tabs": "off",

			// Import rules
			"import/no-default-export": "off",
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						["parent", "sibling"],
						"index",
					],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
);
