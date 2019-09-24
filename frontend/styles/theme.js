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
      primary: '#201F1E'
    }
  },
  typography: {
    fontFamily: 'Lato, Helvetica, Arial, sans-serif',
    h3: {
      fontFamily: "'Oswald', Helvetica, Arial, sans-serif"
      // fontWeight: 400
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
