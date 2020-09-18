/**
 * netlify-plugin-provider-json
 *
 * [Netlify Build plugin][0] to generate a JSON version of the provider.csv file
 *
 * [0]: https://docs.netlify.com/configure-builds/build-plugins/
 */

const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");

const processFile = (csvDataFile) => {
  csv()
  .fromFile(csvDataFile)
  .then((data) => {
    const jsonDataFile = csvDataFile.replace(".csv", ".json")
    fs.writeFile(jsonDataFile, JSON.stringify(data), (e) => {
      console.log(`Error writing ${jsonDataFile}: ${e.message}`);
    });
  });
}

const dataDir = path.join(".", "data", "providers");
const dataFiles = ["providers.csv", "dictionary.csv"].map((f) => path.join(dataDir, f));

module.exports = {
  async onPreBuild() {
    const jobs = dataFiles.map(processFile);
    await Promise.all(jobs);
  }
}