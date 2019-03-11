import { future as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/ghcolors'
import scss from 'react-syntax-highlighter/languages/prism/scss'

const bodyFont = 'Martel, serif'
const titleFont = 'Kavoon, serif'
const mainColor = '#f06c17'

export default {
  ...theme,
  monospace: bodyFont,
  font: titleFont,
  prism: {
    style,
    languages: {
      scss,
    },
  },
  css: {
    ...theme.css,
    textAlign: 'left',
    blockquote: {
      fontSize: '4rem',
      fontFamily: titleFont,
    },
    a: {
      fontSize: '0.6em'
    },
    li: {
      fontFamily: bodyFont,
      fontSize: '1.4em',
      paddingBottom: '1.2em',
    },
    pre: {
      borderRadius: '8px',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
    },
    strong: {
      fontWeight: 900,
      color: mainColor,
    },
    'blockquote span': {
      color: 'green',
      letterSpacing: '-0.3rem',
      fontSize: '0.6em'
    },
  },
  heading: {
    textTransform: 'inherit',
  },
  colors: {
    text: '#333',
    background: '#fafafa',
  },
  p: {
    fontFamily: bodyFont,
    fontSize: '1.5em',
    lineHeight: '1.4',
  },
  transitionDuration: 0, // disable transitions
}