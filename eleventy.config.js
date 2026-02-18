import sitemap from "@quasibit/eleventy-plugin-sitemap";

import site from "./src/_data/site.js";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/latest.css");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy("src/uploads/**/*.pdf");
  eleventyConfig.addPassthroughCopy("src/uploads/resources/*.docx");
  eleventyConfig.addPassthroughCopy("src/uploads/resources/*.pptx");
  eleventyConfig.addPassthroughCopy("src/uploads/resources/*.xlsx");
  eleventyConfig.addPassthroughCopy("src/uploads/resources/*.zip");

  eleventyConfig.addPlugin(sitemap, { sitemap: { hostname: site.url } });
}
