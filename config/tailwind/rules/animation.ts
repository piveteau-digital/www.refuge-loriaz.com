export const keyframes = {
  heart: {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.13)" },
    "90%": { transform: "scale(.91)" },
    "100%": { transform: "scale(1)" },
  },
  ["heart-light"]: {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.01)" },
    "56%": { transform: "scale(.98)" },
    "100%": { transform: "scale(1)" },
  },
  opacity: {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.37 },
    "100%": { opacity: 1 },
  },
  "accordion-down": {
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
  },
  marquee: {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(calc(-100% - var(--gap)))" },
  },
  "marquee-vertical": {
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(calc(-100% - var(--gap)))" },
  },
  "horizontal-bounce": {
    "0%, 100%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(4px)",
    },
  },
  "vertical-bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(4px)",
    },
  },
  "fade-in-left": {
    "0%": {
      opacity: "0",
      transform: "translateX(20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateX(0)",
    },
  },
  "fade-in-up": {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  aurora: {
    from: {
      backgroundPosition: "50% 50%, 50% 50%",
    },
    to: {
      backgroundPosition: "350% 50%, 350% 50%",
    },
  },
};

export const animation = {
  aurora: "aurora 60s linear infinite",
  heart: "opacity 2s linear infinite, heart 2s linear infinite",
  ["heart-light"]: "opacity 1s linear infinite, heart-light 2s linear infinite",
  "opacity-breath": "opacity 2.2s ease-in-out infinite",
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  marquee: "marquee var(--duration) linear infinite",
  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
  "horizontal-bounce": "horizontal-bounce 0.8s ease-in-out infinite",
  "vertical-bounce": "vertical-bounce 0.8s ease-in-out infinite",
  "fade-in-left": "fade-in-left 0.6s ease-in-out",
  "fade-in-up": "fade-in-up 0.6s ease-in-out",
};
