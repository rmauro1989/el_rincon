import Box from '@mui/material/Box'
import { formatPrice } from '../data/products'
import { brand, fonts } from '../theme'

// Círculo rojo con borde dorado, como el "VALOR" de los flyers
export default function PriceBadge({ price, size = 96, sx }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        bgcolor: brand.red,
        border: `${Math.round(size / 16)}px solid ${brand.gold}`,
        color: brand.cream,
        display: 'grid',
        placeContent: 'center',
        textAlign: 'center',
        fontFamily: fonts.price,
        lineHeight: 0.95,
        boxShadow: '0 6px 18px rgba(0,0,0,.45)',
        ...sx,
      }}
    >
      <Box component="span" sx={{ fontSize: size * 0.2, letterSpacing: 1 }}>
        Valor
      </Box>
      <Box component="span" sx={{ fontSize: size * 0.29 }}>
        {formatPrice(price)}
      </Box>
    </Box>
  )
}
