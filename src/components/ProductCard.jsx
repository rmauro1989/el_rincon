import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PriceBadge from './PriceBadge'
import { basePrice } from '../data/products'
import { brand } from '../theme'

export default function ProductCard({ product, onSelect }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: brand.boardDark,
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'transform .2s ease, box-shadow .2s ease',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 12px 28px rgba(0,0,0,.5), 0 0 0 2px ${brand.orange}` },
      }}
    >
      <CardActionArea onClick={() => onSelect(product)} sx={{ position: 'relative' }}>
        <CardMedia component="img" image={product.image} alt={product.title} loading="lazy" sx={{ aspectRatio: '1 / 1' }} />
      </CardActionArea>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5, position: 'relative', pt: 3 }}>
        <PriceBadge price={basePrice(product)} label={product.sizes ? 'Desde' : 'Valor'} size={88} sx={{ position: 'absolute', right: 16, top: -50 }} />
        <Typography variant="h5" component="h3" sx={{ pr: 11, fontSize: 22, lineHeight: 1.15 }}>
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
          {product.includes.join(' · ')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" color="inherit" onClick={() => onSelect(product)} sx={{ flex: 1, borderColor: 'rgba(255,255,255,.3)' }}>
            Ver detalle
          </Button>
          <Button variant="contained" color="primary" startIcon={<AddRoundedIcon />} onClick={() => onSelect(product)} sx={{ flex: 1 }}>
            Agregar
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
