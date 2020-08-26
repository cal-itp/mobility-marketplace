/**
 * netlify-plugin-lunr-index
 *
 * [Netlify Build plugin][0] to create a [lunrjs][1] search index
 * from JSON documents of content generated during site build.
 *
 * [0]: https://docs.netlify.com/configure-builds/build-plugins/
 * [1]: https://lunrjs.com/
 */

const lunr = require("lunr");

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = {
  async onPostBuild({ constants: { PUBLISH_DIR }}) {
    const sourceDir = path.join(PUBLISH_DIR, "data");
    const sourceFile = path.join(sourceDir, "content.json");
    const rawDocs = await readFile(sourceFile);

    const docs = JSON.parse(rawDocs);
    const searchIndex = makeIndex(docs);
    const serializedIndex = JSON.stringify(searchIndex);

    const targetFile = path.join(sourceDir, "index.json");
    await writeFile(targetFile, serializedIndex);

    console.log(`Lunr search index generated at: ${targetFile}`);
  }
}

function makeIndex(docs) {
  return lunr(function() {
    this.ref("id");
    this.field("body");
    this.field("title");

    docs.forEach(function (doc) { this.add(doc) }, this);
  });
}