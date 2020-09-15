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

module.exports = {
  async onPreBuild() {
    const csvFilePath = path.join(".", "data", "providers.csv");
    await csv()
      .fromFile(csvFilePath)
      .then((data) => {
        const jsonFilePath = csvFilePath.replace(".csv", ".json");
        fs.writeFile(jsonFilePath, JSON.stringify(data), (e) => {
          console.log(`Error writing provider JSON file: ${e.message}`);
        });
      });
  }
}