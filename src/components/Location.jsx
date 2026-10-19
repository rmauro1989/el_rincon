import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import BrushLabel from './BrushLabel'
import { ADDRESS, MAP_DIRECTIONS_URL, MAP_EMBED_URL } from '../data/products'
import { brand } from '../theme'

export default function Location() {
  return (
    <Container id="ubicacion" component="section" maxWidth="lg" sx={{ pt: { xs: 8, md: 10 }, scrollMarginTop: 72 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <BrushLabel variant="cream" component="h2" sx={{ fontSize: { xs: 28, md: 40 }, px: { xs: 3, md: 5 } }}>
          Dónde estamos
        </BrushLabel>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
          borderRadius: 3,
          overflow: 'hidden',
          border: `3px solid ${brand.gold}`,
          bgcolor: brand.boardDark,
        }}
      >
        <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', bgcolor: brand.red }}>
          <PlaceRoundedIcon sx={{ fontSize: 48, color: brand.gold }} />
          <Typography variant="h4" component="p" sx={{ fontSize: { xs: 26, md: 30 }, lineHeight: 1.15 }}>
            {ADDRESS}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.8)' }}>Región Metropolitana, Chile</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            startIcon={<DirectionsRoundedIcon />}
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener"
            sx={{ alignSelf: 'flex-start', fontSize: 18, mt: 1 }}
          >
            Cómo llegar
          </Button>
        </Box>
        <Box
          component="iframe"
          title={`Mapa: ${ADDRESS}`}
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          sx={{ border: 0, width: '100%', height: { xs: 300, md: 400 }, display: 'block' }}
        />
      </Box>
    </Container>
  )
}
