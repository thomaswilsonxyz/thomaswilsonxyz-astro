module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
      fontFamily: {
        sans: ['Inter', 'Inter V', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    }
  };
  