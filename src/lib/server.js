const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://neurotechjp.com",
  pagesDirectory: __dirname + "/../../.next/server/pages",
  targetDirectory: "../../public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["[fallback]"],
});
