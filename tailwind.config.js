const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        gray: colors.neutral,
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              maxWidth: theme('maxWidth.5xl'),
              margin: '0 auto',
              wordWrap: 'break-word',
              color: theme('colors.gray.700'),
              span: {
                width: '100%',
              },
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: `${theme('colors.primary.600')} !important`,
                },
                code: { color: theme('colors.primary.400') },
                textDecoration: 'none',
              },
              h1: {
                fontWeight: '700',
                letterSpacing: theme('letterSpacing.tight'),
                color: theme('colors.gray.900'),
                fontSize: theme('fontSize.3xl'),
              },
              h2: {
                fontWeight: '700',
                letterSpacing: theme('letterSpacing.tight'),
                color: theme('colors.gray.900'),
                fontSize: theme('fontSize.2xl'),
              },
              h3: {
                fontWeight: '600',
                color: theme('colors.gray.900'),
                fontSize: theme('fontSize.xl'),
              },
              'h4,h5,h6': {
                color: theme('colors.gray.900'),
              },
              p: {
                marginTop: '0',
                marginBottom: '0.75em',
              },
              pre: {
                backgroundColor: theme('colors.gray.800'),
                margin: '0',
                code: {
                  backgroundColor: theme('colors.transparent'),
                },
              },
              code: {
                color: theme('colors.gray.700'),
                backgroundColor: 'rgba(175,184,193,0.2)',
                padding: '.2em .4em',
                margin: '0',
                fontSize: '85%',
                borderRadius: '6px',
                fontStyle: 'normal',
              },
              'code::before': {
                content: 'none',
              },
              'code::after': {
                content: 'none',
              },
              details: {
                backgroundColor: theme('colors.gray.100'),
                paddingLeft: '4px',
                paddingRight: '4px',
                paddingTop: '2px',
                paddingBottom: '2px',
                borderRadius: '0.25rem',
                summary: {
                  cursor: 'pointer',
                },
              },
              hr: { borderColor: theme('colors.gray.200') },
              'ol li::marker': {
                fontWeight: '600',
                color: theme('colors.gray.500'),
              },
              'ul li::marker': {
                backgroundColor: theme('colors.gray.500'),
              },
              ol: {
                marginTop: '0',
                ul: {
                  marginTop: '0',
                },
              },
              ul: {
                marginTop: '0',
              },
              li: {
                margin: '0',
              },
              strong: { color: theme('colors.gray.600') },
              blockquote: {
                color: theme('colors.gray.900'),
                borderLeftColor: theme('colors.gray.200'),
                marginTop: '0',
                ol: {
                  marginTop: '0',
                },
                ul: {
                  marginTop: '0',
                },
              },
              'blockquote >p::before': {
                content: 'none',
              },
              'blockquote >p::after': {
                content: 'none',
              },
              img: {
                marginTop: '1em',
                marginBottom: '0',
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: `${theme('colors.primary.400')} !important`,
                },
                code: { color: theme('colors.primary.400') },
              },
              h1: {
                fontWeight: '700',
                letterSpacing: theme('letterSpacing.tight'),
                color: theme('colors.gray.100'),
              },
              h2: {
                fontWeight: '700',
                letterSpacing: theme('letterSpacing.tight'),
                color: theme('colors.gray.100'),
              },
              h3: {
                fontWeight: '600',
                color: theme('colors.gray.100'),
              },
              'h4,h5,h6': {
                color: theme('colors.gray.100'),
              },
              pre: {
                backgroundColor: theme('colors.gray.800'),
                code: {
                  backgroundColor: theme('colors.transparent'),
                },
              },
              code: {
                color: theme('colors.gray.300'),
                backgroundColor: 'rgba(110,118,129,0.4)',
              },
              details: {
                backgroundColor: theme('colors.gray.800'),
              },
              hr: { borderColor: theme('colors.gray.700') },
              'ol li::marker': {
                fontWeight: '600',
                color: theme('colors.gray.400'),
              },
              'ul li::marker': {
                backgroundColor: theme('colors.gray.400'),
              },
              strong: { color: theme('colors.gray.100') },
              thead: {
                th: {
                  color: theme('colors.gray.100'),
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.gray.700'),
                },
              },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.700'),
              },
            },
          },
        };
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
