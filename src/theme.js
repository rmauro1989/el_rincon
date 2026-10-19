import { createTheme } from '@mui/material/styles'

// Paleta de marca
export const brand = {
  red: '#941318',
  orange: '#FF601C',
  gold: '#E8A800',
  white: '#FFFFFF',
  // Apoyo tomado de los flyers: pizarra y crema de los trazos de pincel
  board: '#2A2A2A',
  boardDark: '#1E1E1E',
  cream: '#F7E1B5',
  brown: '#3B1A10',
}

export const fonts = {
  display: '"Lilita One", "Poppins", sans-serif',
  price: '"Bebas Neue", "Poppins", sans-serif',
  body: '"Poppins", system-ui, sans-serif',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: brand.orange, contrastText: brand.white },
    secondary: { main: brand.red, contrastText: brand.white },
    warning: { main: brand.gold, contrastText: brand.brown },
    background: { default: brand.board, paper: brand.boardDark },
    text: { primary: brand.white, secondary: 'rgba(255,255,255,0.72)' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: fonts.body,
    h1: { fontFamily: fonts.display, fontWeight: 400, lineHeight: 1.05 },
    h2: { fontFamily: fonts.display, fontWeight: 400 },
    h3: { fontFamily: fonts.display, fontWeight: 400 },
    h4: { fontFamily: fonts.display, fontWeight: 400 },
    h5: { fontFamily: fonts.display, fontWeight: 400 },
    h6: { fontFamily: fonts.display, fontWeight: 400 },
    button: { fontFamily: fonts.display, fontWeight: 400, textTransform: 'none', letterSpacing: 0.3 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          // Textura sutil de pizarra
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)',
          backgroundSize: '22px 22px, 31px 31px',
          backgroundPosition: '0 0, 11px 7px',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 22 } },
    },
    MuiChip: {
      styleOverrides: { root: { fontFamily: fonts.display, fontSize: 15 } },
    },
  },
})

export default theme
