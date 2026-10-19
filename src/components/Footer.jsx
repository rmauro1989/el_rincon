import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { ADDRESS, INSTAGRAM_USER, MAP_PLACE_URL, WHATSAPP_NUMBER } from '../data/products'
import { brand } from '../theme'

const linkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  color: brand.white,
  fontWeight: 600,
  fontSize: 18,
  textDecoration: 'none',
  '&:hover': { color: brand.gold },
}

export default function Footer() {
  return (
    <Box id="contacto" component="footer" sx={{ bgcolor: brand.red, borderTop: `6px solid ${brand.gold}`, mt: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box component="img" src="/assets/logo.png" alt="El Rincón Sandwichería" sx={{ height: 90 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 5 }, alignItems: 'center' }}>
          <Link href={MAP_PLACE_URL} target="_blank" rel="noopener" sx={linkSx}>
            <PlaceRoundedIcon /> {ADDRESS}
          </Link>
          <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener" sx={linkSx}>
            <WhatsAppIcon /> +56 9 5146 6739
          </Link>
          <Link href={`https://www.instagram.com/${INSTAGRAM_USER}/`} target="_blank" rel="noopener" sx={linkSx}>
            <InstagramIcon /> @{INSTAGRAM_USER}
          </Link>
        </Box>
      </Container>
      <Typography variant="body2" sx={{ textAlign: 'center', pb: { xs: 13, md: 4 }, color: 'rgba(255,255,255,.7)' }}>
        © {new Date().getFullYear()} El Rincón Sandwichería
      </Typography>
    </Box>
  )
}
