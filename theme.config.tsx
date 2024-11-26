import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>SOON SDK</span>,
  project: {
    link: "https://github.com/koushikjoshi/soon-sdk",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/koushikjoshi/soon-sdk",
  footer: {
    text: "SOON SDK",
  },
  primaryHue: {
    light: 349, // Primary hue for light mode (matching hsla(349, 67%, 51%))
    dark: 349,  // Primary hue for dark mode
  },
  darkMode: true, // Enable dark mode
  nextThemes: {
    defaultTheme: "dark", // Default theme is dark
  },
};

export default config;
