import path from "path";

import markdownIt from "markdown-it";
import sass from "sass";

// Add within your config module
const md = new markdownIt({ html: true });

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.setLiquidOptions({ dynamicPartials: false });

  eleventyConfig.addPassthroughCopy("src/styles/latest.css");

  // Copy all png and svg files to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  eleventyConfig.addFilter("markdownify", (content) => md.render(content));

  // once we get rid of the sass for this site, we can get rid of the rest of this pre-processing and the 'sass' dependency
  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // opt-out of Eleventy Layouts
    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      // Don’t compile file names that start with an underscore
      if (!parsed.name.startsWith("styles")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes],
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);

      return async (data) => {
        return result.css;
      };
    },
  });
}
