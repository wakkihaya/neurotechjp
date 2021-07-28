const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

const BUILD_ID = fs
  .readFileSync(__dirname + "/../../.next/BUILD_ID")
  .toString();

sitemap({
  baseUrl: "https://neurotechjp.com",
  pagesDirectory: __dirname + "/../../.next/server/pages",
  targetDirectory: "../../public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["[fallback]"],
});
