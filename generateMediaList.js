import { readdirSync, writeFileSync } from "fs";
import { join, extname } from "path";
const __dirname = process.cwd();
const mediaDir = join(__dirname, "public", "prunella-img");
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
const videoExtensions = [".mp4", ".webm"];

const files = readdirSync(mediaDir);

const imageFiles = files.filter(file =>
  imageExtensions.includes(extname(file).toLowerCase())
);
const videoFiles = files.filter(file =>
  videoExtensions.includes(extname(file).toLowerCase())
);

const output = `
export const imageFiles = ${JSON.stringify(imageFiles, null, 2)};
export const videoFiles = ${JSON.stringify(videoFiles, null, 2)};
`;

writeFileSync(
  join(__dirname, "src", "components", "prunellaMediaList.ts"),
  output
);

console.log("Media list generated in src/components/prunellaMediaList.ts");