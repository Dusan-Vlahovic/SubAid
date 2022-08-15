const spacings = {};
for (let i = -100; i < 500; i += 0.5) {
  spacings[i] = `${i / 4}rem`;
}

const opacities = {};
for (let i = 0; i < 100; i ++) {
  opacities[i] = (i * 0.01).toFixed(2);
}

const colors = {
  green: {
    50: '#f7fff7'
  },
  gray: {
    50: '#B5B5B5'
  }
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '550px',
        'max-xs': { max: '549px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1279px' },
      },
      colors,
      borderColors: colors,
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      spacing: spacings,
      minWidth: spacings,
      minHeight: spacings,
      maxWidth: spacings,
      maxHeight: {
        ...spacings,
        content: 'fit-content',
      },
      opacity: opacities,
      zIndex: {
        '-1': -1,
        1: 1,
        100: 100,
        max: 10000000,
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-in-out',
        'slide-in-up': 'slideInUp 150ms ease-in-out',
        'zoom-in': 'zoomIn 150ms ease-in-out',
      },
      boxShadow: {
        md: '0 3px 6px #00000029',
        'blue-md': '0 0 0.75rem #2680eb57',
        'blue-lg': '0 0.5rem 0.75rem 1px #2680eb57',
        'modal-footer': '0 -3px 10px 1px #0004',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
};
