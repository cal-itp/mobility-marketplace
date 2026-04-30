// this convoluted plugins syntax is needed to ensure availability in the pre-commit context specifically
// if the shopify plugin was ESM compatible, we could use await import() instead
// we also tried swapping in import.meta.url(). that works fine locally, but causes inexplicable behavior on pre-commit.ci
// https://stackoverflow.com/questions/69099763/referenceerror-require-is-not-defined-in-es-module-scope-you-can-use-import-in
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Allow Prettier in .pre-commit-config.yaml to find plugins.
// https://stackoverflow.com/questions/78708497/prettier-plugins-not-found-with-pre-commit
// https://github.com/prettier/prettier/issues/15085
const config = {
  plugins: [require.resolve("@shopify/prettier-plugin-liquid")],
  printWidth: 130,
};

export default config;
