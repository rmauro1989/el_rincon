import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import BrushLabel from './BrushLabel'
import { ABOUT } from '../data/products'
import { brand, fonts } from '../theme'

export default function About() {
  return (
    <Container id="quienes-somos" component="section" maxWidth="md" sx={{ pt: { xs: 8, md: 10 }, scrollMarginTop: 72, textAlign: 'center' }}>
      <BrushLabel variant="cream" component="h2" sx={{ fontSize: { xs: 28, md: 40 }, px: { xs: 3, md: 5 }, mb: 4 }}>
        Quiénes somos
      </BrushLabel>

      <Box
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          bgcolor: brand.boardDark,
          borderTop: `6px solid ${brand.orange}`,
          display: 'grid',
          gap: 2,
        }}
      >
        <Box component="img" src="/assets/logo.png" alt="" sx={{ height: { xs: 80, md: 100 }, mx: 'auto' }} />
        <Typography variant="h4" component="h3" sx={{ fontSize: { xs: 26, md: 32 }, color: brand.gold, mb: 1 }}>
          {ABOUT.title}
        </Typography>

        {ABOUT.paragraphs.map((paragraph) => (
          <Typography key={paragraph} sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, color: 'text.secondary' }}>
            {paragraph}
          </Typography>
        ))}

        <Typography sx={{ fontFamily: fonts.display, fontSize: { xs: 22, md: 26 }, color: brand.orange, mt: 1 }}>
          {ABOUT.closing}
        </Typography>

        <Box
          component="figure"
          sx={{ m: 0, mt: 2, pt: 3, borderTop: '1px solid rgba(255,255,255,.12)', display: 'grid', gap: 1.5, justifyItems: 'center' }}
        >
          <BrushLabel variant="red" component="blockquote" sx={{ fontSize: { xs: 18, md: 24 }, px: { xs: 2.5, md: 4 }, textTransform: 'none' }}>
            “{ABOUT.quote}”
          </BrushLabel>
          <Typography component="figcaption" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            {ABOUT.tagline}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
