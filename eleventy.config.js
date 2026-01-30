export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/latest.css");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
}
