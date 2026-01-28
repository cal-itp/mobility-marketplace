export default async function (eleventyConfig) {
  // otherwise we need quotes around includes
  eleventyConfig.setLiquidOptions({ dynamicPartials: false });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("src/styles/latest.css");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
}
