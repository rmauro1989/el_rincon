import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import BrushLabel from './BrushLabel'
import { brand } from '../theme'

export default function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 420, md: 520 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(/assets/banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: { xs: '62% center', md: 'center' },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(90deg, rgba(30,30,30,0.92) 0%, rgba(30,30,30,0.7) 45%, rgba(30,30,30,0.1) 100%)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', py: 6 }}>
        <Box sx={{ maxWidth: 520 }}>
          <BrushLabel variant="red" sx={{ fontSize: { xs: 22, md: 28 }, mb: 2 }}>
            ¡Promociones!
          </BrushLabel>
          <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 }, mb: 2, textShadow: '0 3px 12px rgba(0,0,0,.5)' }}>
            Sabor de barrio,{' '}
            <Box component="span" sx={{ color: brand.gold }}>
              hecho al momento
            </Box>
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 18 }, mb: 3.5, color: 'text.secondary' }}>
            Hamburguesas, completos, italianos, as y churrascos tradicionales. Arma tu pedido y envíalo directo por
            WhatsApp.
          </Typography>
          <Button
            href="#promociones"
            size="large"
            variant="contained"
            color="warning"
            sx={{ fontSize: 20, px: 4 }}
          >
            Ver la carta
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
