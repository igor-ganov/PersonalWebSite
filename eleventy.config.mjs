import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig) {
	eleventyConfig.addLayoutAlias("main", "layout/main.njk");


	eleventyConfig.setInputDirectory("src");
	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
		compile: function () {
			return async function (data) {
				let content = await this.defaultRenderer(data);
				console.log(content);
				return renderToStaticMarkup(content);
			};
		},
	});
	eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");
	eleventyConfig.addWatchTarget("**/*.ts");
	eleventyConfig.addWatchTarget("**/*.scss");
	return {
		dir: {
		  input: "src",
		  output: "dist"
		}
	  };
}