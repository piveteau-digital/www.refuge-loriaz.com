/** @type {import('tailwindcss').Config} */

import { screens } from "./rules/screens";
// import { colors } from "./rules/colors";
import { fontFamily } from "./rules/fontFamily";
import { animation, keyframes } from "./rules/animation";
import { plugins } from "./plugins";

const bgLogoSizes = {
  default: "24px",
  light: "24px",
};
const bgLogoColors = {
  default: "hsl(var(--foreground))",
  light: "hsl(var(--background))",
};
const bgLogoUrls = {
  default: "url('/images/logo-light.svg')",
  light: "url('/images/logo.svg')",
};

const twConfig = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    height: {
      header: "var(--header-height)",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens,
      // colors,
      fontFamily,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor: {
        logo: bgLogoColors.default,
        "logo-light": bgLogoColors.default,

        "background-logo": bgLogoColors.light,
        "foreground-logo": bgLogoColors.default,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        logo: bgLogoUrls.default,
        "logo-light": bgLogoUrls.default,

        "background-logo": bgLogoUrls.light,
        "foreground-logo": bgLogoUrls.default,
      },
      backgroundSize: {
        logo: bgLogoSizes.default,
        "logo-light": bgLogoSizes.default,
        "foreground-logo": bgLogoSizes.default,
        "background-logo": bgLogoSizes.default,
      },
      minHeight: {
        "safe-screen": "calc(100dvh - var(--header-height))",
      },
      height: {
        "safe-screen": "calc(100dvh - var(--header-height))",
      },
      margin: {
        header: "var(--header-height)",
      },
      padding: {
        header: "var(--header-height)",
      },

      keyframes,
      animation,
    },
  },
  presets: [require("../../tailwind.config")],
  plugins,
};

const config = {
  ...twConfig,
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  presets: [require("../../tailwind.config")],
};

export default config;
