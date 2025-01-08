// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,cljs}',
    './node_modules/nativewind/dist/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}
