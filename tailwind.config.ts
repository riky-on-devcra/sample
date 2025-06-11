import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "devcra-primary": "#E9A374",
      },
      fontFamily: {
        pretendardStd: [
          "var(--pretendard-std)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Malgun Gothic",
          "맑은 고딕",
          "helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
