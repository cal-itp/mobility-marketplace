const PullQuote = {
  // Internal id of the component
  id: "pull-quote",
  // Visible label
  label: "Pull quote",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      label: "Quote",
      name: "quote"
    },
    {
      label: "Author",
      name: "author",
      required: false
    },
    {
      label: "Source work",
      name: "source",
      required: false
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<blockquote><p>(.+?)<\/p><footer>(.+?)(in <cite>(.+?)<\/cite>)?<\/footer><\/blockquote>$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      quote: match[1],
      author: match.length > 2 ? match[2] : null,
      source: match.length > 4 ? match[4] : null,
   },
  // Function to create a text block from an instance of this component
  toBlock: (obj) => {
    let block = [`<blockquote><p>${obj.quote}</p>`]
    if (obj.author) {
      block.push(`<footer>${obj.author}`)
      if (obj.source) {
        block.push(` in <cite>${obj.source}</cite>`)
      }
      block.push("</footer>")
    }
    block.push("</blockquote>")
    return block.join("")
  }
};

export default PullQuote;