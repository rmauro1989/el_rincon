import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded'
import { useCart } from '../cart'
import { brand } from '../theme'

export default function Header({ onOpenCart }) {
  const { count } = useCart()

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: brand.red, borderBottom: `4px solid ${brand.gold}` }}>
      <Toolbar sx={{ gap: 2, minHeight: { xs: 64, md: 76 } }}>
        <Box component="a" href="#inicio" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src="/assets/logo.png" alt="El Rincón Sandwichería" sx={{ height: { xs: 42, md: 54 } }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          <Button color="inherit" href="#promociones">Carta</Button>
          <Button color="inherit" href="#ubicacion">Ubicación</Button>
          <Button color="inherit" href="#quienes-somos">Quiénes somos</Button>
          <Button color="inherit" href="#contacto">Contacto</Button>
        </Box>
        <IconButton
          onClick={onOpenCart}
          aria-label={`Ver pedido (${count} productos)`}
          sx={{ bgcolor: brand.orange, color: brand.white, '&:hover': { bgcolor: '#e8540f' } }}
        >
          <Badge badgeContent={count} color="warning" max={99}>
            <ShoppingBagRoundedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
