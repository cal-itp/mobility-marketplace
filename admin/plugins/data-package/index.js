/**
 * netlify-plugin-data-package
 *
 * [Netlify Build plugin][0] to generate a zip package of data files for public download.
 *
 * [0]: https://docs.netlify.com/configure-builds/build-plugins/
 */

const path = require("path");

const dataFiles = ["dictionary.csv", "glossary.csv", "providers.csv", "readme.txt"];

module.exports = {
  async onPostBuild({ constants: { PUBLISH_DIR }, utils: { run } }) {
    const dataDir = path.join(PUBLISH_DIR, "data", "providers");
    const outFile = "package.zip";
    const inFiles = dataFiles.join(" ");

    await run.command(`zip ${outFile} ${inFiles}`, { cwd: dataDir });
  }
}