import sitemap from "@quasibit/eleventy-plugin-sitemap";

import site from "./src/_data/site.js";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy("src/uploads/");
  eleventyConfig.addPassthroughCopy("src/uploads/resources/");

  eleventyConfig.addPlugin(sitemap, { sitemap: { hostname: site.url } });
}
