// postcss.config.js
const plugins = { autoprefixer: {} };

try {
  // Tailwind v4 PostCSS plugin
  require.resolve('@tailwindcss/postcss');
  plugins['@tailwindcss/postcss'] = {};
} catch {
  try {
    // Tailwind v3 PostCSS plugin
    require.resolve('tailwindcss');
    plugins['tailwindcss'] = {};
  } catch {
    // No Tailwind installed — PostCSS will still run autoprefixer.
  }
}

module.exports = { plugins };
