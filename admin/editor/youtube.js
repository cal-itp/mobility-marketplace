const Youtube = {
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "id",
      label: "Youtube Video ID",
      hint: "e.g. oHg5SJYRHA0",
      pattern: /\S+/,
      widget: "string"
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<iframe src="https:\/\/www\.youtube\.com\/embed\/(\S+?)".*?><\/iframe>$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      id: match[1]
    },
  // Function to create a text block from an instance of this component
  toBlock: obj =>
    (
      `<iframe src="https://www.youtube.com/embed/${obj.id}" class="youtube" frameborder="0" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>`
    ),
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: obj =>
    (
      `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`
    ),
};

export default Youtube;