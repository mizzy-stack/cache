import { existsSync } from "node:fs";
import { join } from "node:path";

const logoCandidates = [
  "logo.png",
  "logo lb relief.png",
  "logo.svg",
  "lbrelief-logo.png",
  "lbrelief-logo.svg",
];

export const getLogoPath = () => {
  for (const candidate of logoCandidates) {
    if (existsSync(join(process.cwd(), "public", candidate))) {
      return `/${candidate}`;
    }
  }
  return null;
};
