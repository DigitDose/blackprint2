/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],

  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': 'url("/images/image1.jpg")',
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: ["dark"],
      darkTheme: true,
      base: true,
      styled: true,
      utils: true,
      logs: true,
      themeRoot: ':root',
      rtl: false,
    },
  },
}
