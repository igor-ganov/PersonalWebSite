import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import * as path from "path";
import * as sass from "sass";
export default function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("main", "layout/main.njk");

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // opt-out of Eleventy Layouts
    useLayouts: false,
    compile: async function (inputContent, inputPath) {

      let parsed = path.parse(inputPath);
      // Don’t compile file names that start with an underscore
      if (parsed.name.startsWith("_")) {
        return;
      }
      
      console.log(parsed.dir);
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
  //copy assets
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpg", "dist/assets");
  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx,scss");
  eleventyConfig.addWatchTarget("**/*.ts");
  // eleventyConfig.addWatchTarget("**/*.scss");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
