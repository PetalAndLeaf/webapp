import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const styles = {
  palette: {
    primary: {
      // main: '#F2673B'
      main: '#FED450'
    },
    secondary: {
      main: '#F4D1C5'
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
      fontWeight: 600,
      fontSize: 24
    },
    h5: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18
    },
    h6: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14
    },
    body2: {
      fontWeight: 400
    },
    button: {
      fontFamily: "'Fira Code', 'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600
    }
  }
}
// Create a theme instance.
const theme = createMuiTheme(styles)

export default theme
