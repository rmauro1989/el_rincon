import Box from '@mui/material/Box'
import { brand, fonts } from '../theme'

// Trazo de pincel con bordes irregulares, como en los flyers
const jagged =
  'polygon(1% 12%, 6% 4%, 14% 9%, 22% 2%, 31% 8%, 40% 1%, 50% 7%, 59% 0%, 68% 6%, 77% 1%, 86% 8%, 94% 3%, 99% 10%, 97% 30%, 100% 52%, 97% 74%, 99% 92%, 92% 97%, 83% 92%, 74% 99%, 64% 93%, 54% 100%, 44% 94%, 34% 99%, 24% 93%, 14% 98%, 5% 94%, 0% 86%, 3% 66%, 0% 45%, 3% 26%)'

const variants = {
  cream: { bg: brand.cream, color: brand.brown },
  red: { bg: brand.red, color: brand.cream },
  orange: { bg: brand.orange, color: brand.white },
}

export default function BrushLabel({ children, variant = 'cream', component = 'span', sx }) {
  const v = variants[variant]
  return (
    <Box
      component={component}
      sx={{
        display: 'inline-block',
        bgcolor: v.bg,
        color: v.color,
        fontFamily: fonts.display,
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        lineHeight: 1.1,
        px: 3,
        py: 1.25,
        m: 0,
        clipPath: jagged,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
