import markdownIt from "markdown-it";
import sitemap from "@quasibit/eleventy-plugin-sitemap";

import site from "./src/_data/site.js";

const md = markdownIt();

export default async function (eleventyConfig) {
  // Add markdown filter for rendering description content
  eleventyConfig.addFilter("markdown", (content) => md.render(content));

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy("src/uploads/resources/");

  eleventyConfig.addPlugin(sitemap, { sitemap: { hostname: site.url } });
}
