const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/_includes/");
  eleventyConfig.addPassthroughCopy("./_src/css/");

  // Islands: copy is-land and petite-vue out of node_modules into _site/js
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
    "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js",
  });

  // Three.js: bundle _src/threeScene.js into _site/js/threeScene.js before each build
  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["_src/threeScene.js"],
      bundle: true,
      minify: true,
      format: "esm",
      outdir: "_site/js",
      sourcemap: true,
    });
  });
  eleventyConfig.addWatchTarget("./_src/threeScene.js");

  // Textures/models for the scene go in _src/threed-images/
  eleventyConfig.addPassthroughCopy("./_src/threed-images/");

  // Gallery images, one folder per topic
  eleventyConfig.addPassthroughCopy("./_src/img/");

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
