import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import BrushLabel from './BrushLabel'
import { ABOUT } from '../data/products'
import { brand } from '../theme'

export default function About() {
  return (
    <Container id="quienes-somos" component="section" maxWidth="md" sx={{ pt: { xs: 8, md: 10 }, scrollMarginTop: 72, textAlign: 'center' }}>
      <BrushLabel variant="cream" component="h2" sx={{ fontSize: { xs: 28, md: 40 }, px: { xs: 3, md: 5 }, mb: 4 }}>
        Quiénes somos
      </BrushLabel>

      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          bgcolor: brand.boardDark,
          borderTop: `6px solid ${brand.orange}`,
          display: 'grid',
          gap: 2,
        }}
      >
        <Box component="img" src="/assets/logo.png" alt="" sx={{ height: { xs: 80, md: 100 }, mx: 'auto', mb: 1 }} />
        {ABOUT.map((paragraph) => (
          <Typography key={paragraph} sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, color: 'text.secondary' }}>
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}
