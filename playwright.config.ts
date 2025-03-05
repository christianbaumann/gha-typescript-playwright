import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["html", { outputFolder: "playwright-report" }],
    ["junit", { outputFile: "playwright-report/results.xml" }],
  ],
  use: {
    headless: true,
    screenshot: "on",
    video: "on",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
