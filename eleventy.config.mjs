import "tsx/esm";
import { transform } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";
import * as path from "path";
import * as sass from "sass";
import * as fs from "fs";
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

      // return async (data) => {
      //   return {
      //     path: outputPath,
      //     content: result.css
      //   }
    // };
    return async (data) => result.css;
    },
  });

  const tsConfig = JSON.parse(fs.readFileSync("./tsconfig.ts.json", "utf-8"));
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async function (inputContent, inputPath) {
      if(inputPath.startsWith("_")) return;
      let result = await transform(inputContent, { loader: "ts", tsconfigRaw: tsConfig });
      this.addDependencies(inputPath, result.loadedUrls);
      return async () => result.code;
    },
  });

  //copy assets
  eleventyConfig.addPassthroughCopy("src/assets/**/*.jpg", "dist/assets");
  eleventyConfig.addPassthroughCopy("src/assets/**/*.js", "dist/assets");
  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx,scss,ts");
  
  eleventyConfig.addWatchTarget("**/*.ts");
  eleventyConfig.addWatchTarget("**/*.tsx");
  eleventyConfig.addWatchTarget("**/*.scss");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
