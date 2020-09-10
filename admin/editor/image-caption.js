const ImageCaption = {
  // Internal id of the component
  id: "image-caption",
  // Visible label
  label: "Image caption",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      media_library: {
        allow_multiple: false
      }
    },
    {
      label: "Alt Text",
      name: "alt"
    },
    {
      label: "Caption",
      name: "caption"
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<figure><img src="(.+?)" alt="(.+?)"><figcaption><p>(.+?)<\/p><\/figcaption><\/figure>$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      image: match[1],
      alt: match[2],
      caption: match[3],
   },
  // Function to create a text block from an instance of this component
  toBlock: obj =>
    (
      `<figure><img src="${obj.image}" alt="${obj.alt}"><figcaption><p>${obj.caption}</p></figcaption></figure>`
    ),
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: obj =>
    (
      `<figure><img src="${obj.image}" alt="${obj.alt}"><figcaption><p>${obj.caption}</p></figcaption></figure>`
    )
};

export default ImageCaption;