#!/usr/bin/env node

/**
 * build-search-index
 *
 * Creates a [lunrjs][1] search index from JSON documents read via stdin.
 * Sends JSON-serialized index to stdout.
 *
 * USAGE:
 *
 * (With simple inline data)
 *
 *     echo '[{ "id": 0, "title": "Foo", "body": "Bar" }]' | build-search-index > index.json
 *
 * (With data from a file)
 *
 *     cat content.json | build-search-index > index.json
 *
 * [1]: https://lunrjs.com/
 */

const lunr = require("lunr"),
      stdin = process.stdin,
      stdout = process.stdout,
      buffer = []

stdin.resume()
stdin.setEncoding("utf8")

stdin.on("data", function (data) {
    buffer.push(data)
})

stdin.on("end", function () {
    const documents = JSON.parse(buffer.join(""))

    var idx = lunr(function () {
        this.ref("id")
        this.field("title")
        this.field("body")

        documents.forEach(function (doc) {
            this.add(doc)
        }, this)
    })

    stdout.write(JSON.stringify(idx))
})
