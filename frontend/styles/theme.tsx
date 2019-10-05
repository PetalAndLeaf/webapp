import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const styles = {
  palette: {
    primary: {
      main: '#F2673B'
    },
    secondary: {
      main: '#8ADCBA'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    divider: '#D6D3C9',
    text: {
      primary: '#201F1E',
      secondary: '#5F5F5F'
    }
  },
  typography: {
    fontFamily: 'Lato, Helvetica, Arial, sans-serif',
    h3: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600
    },
    h4: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600
    },
    body2: {
      fontWeight: 400
    },
    button: {
      fontWeight: 700
    }
  }
}
// Create a theme instance.
const theme = createMuiTheme(styles)

export default theme
