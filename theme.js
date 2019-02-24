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
      fontSize: '6rem',
      fontFamily: titleFont,
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
    } 
  },
  heading: {
    textTransform: 'inherit',
  },
  colors: {
    text: '#333',
    background: '#fafafa',
    link: '#1c7cc2',
  },
  p: {
    fontFamily: bodyFont,
    fontSize: '1.5em',
    lineHeight: '1.4',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.6rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  transitionDuration: 0, // disable transitions
}