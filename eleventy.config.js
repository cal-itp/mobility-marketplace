export default async function (eleventyConfig) {
  // otherwise we need quotes around includes
  eleventyConfig.setLiquidOptions({ dynamicPartials: false });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/latest.css");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
}
