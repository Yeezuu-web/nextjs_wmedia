import plugin from 'tailwindcss/plugin';

export const shadcnPlugin = plugin(
  // 1. Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      body: {
        textTransform: 'upercase',
      },
    });
  }

  // 2. Extend the Tailwind theme with "themable" utilities
);
