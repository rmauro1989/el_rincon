import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded'
import { useCart } from '../cart'
import { brand, fonts } from '../theme'

// Botón flotante grande: abre el mismo panel de pedido que el carro
export default function OrderButton({ onClick }) {
  const { count } = useCart()

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: (t) => t.zIndex.appBar,
        bottom: { xs: 16, md: 24 },
        left: { xs: 16, md: 'auto' },
        right: { xs: 16, md: 24 },
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end' },
        pointerEvents: 'none',
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        aria-label={`Pide aquí, solo retiro en local (${count} productos)`}
        startIcon={
          <Badge badgeContent={count} color="warning" max={99}>
            <ShoppingBagRoundedIcon sx={{ fontSize: '32px !important' }} />
          </Badge>
        }
        sx={{
          pointerEvents: 'auto',
          width: { xs: '100%', sm: 'auto' },
          maxWidth: 420,
          py: 1.25,
          px: 4,
          gap: 1,
          bgcolor: brand.red,
          color: brand.white,
          border: `3px solid ${brand.gold}`,
          boxShadow: '0 10px 28px rgba(0,0,0,.55)',
          '&:hover': { bgcolor: '#7a0f13' },
        }}
      >
        <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
          <Box component="span" sx={{ fontFamily: fonts.display, fontSize: { xs: 26, md: 28 }, textTransform: 'uppercase' }}>
            Pide aquí
          </Box>
          <Box component="span" sx={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 600, color: brand.cream, mt: 0.5 }}>
            Solo retiro en local
          </Box>
        </Box>
      </Button>
    </Box>
  )
}
