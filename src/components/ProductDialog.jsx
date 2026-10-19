import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import BrushLabel from './BrushLabel'
import { formatPrice } from '../data/products'
import { brand, fonts } from '../theme'

export default function ProductDialog({ product, onClose, onAdd }) {
  const fullScreen = useMediaQuery('(max-width:600px)')

  return (
    <Dialog
      open={Boolean(product)}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      slotProps={{ paper: { sx: { bgcolor: brand.board, backgroundImage: 'none' } } }}
    >
      {/* key reinicia el formulario al cambiar de producto */}
      {product && <ProductForm key={product.id} product={product} onClose={onClose} onAdd={onAdd} />}
    </Dialog>
  )
}

function ProductForm({ product, onClose, onAdd }) {
  const picks = product.options ? product.picks ?? 1 : 0
  const [choices, setChoices] = useState(() => Array(picks).fill(''))
  const [qty, setQty] = useState(1)
  const [touched, setTouched] = useState(false)
  // Por defecto el tamaño más grande, que es el de la foto principal
  const [sizeLabel, setSizeLabel] = useState(product.sizes?.at(-1).label)

  const size = product.sizes?.find((s) => s.label === sizeLabel)
  const price = size ? size.price : product.price
  const image = size?.image ?? product.image
  const missing = choices.some((c) => !c)

  const handleAdd = () => {
    setTouched(true)
    if (missing) return
    // Cada tamaño es una línea distinta del pedido
    const item = size
      ? { ...product, id: `${product.id}:${size.label}`, title: `${product.title} ${size.label.toLowerCase()}`, price, image }
      : product
    onAdd(item, choices.length ? choices.join(' + ') : undefined, qty)
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, position: 'relative' }}>
      <IconButton
        onClick={onClose}
        aria-label="Cerrar"
        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1, bgcolor: 'rgba(0,0,0,.55)', '&:hover': { bgcolor: 'rgba(0,0,0,.75)' } }}
      >
        <CloseRoundedIcon />
      </IconButton>

      <Box component="img" src={image} alt={product.title} sx={{ width: '100%', height: { md: '100%' }, aspectRatio: { xs: '1 / 1', md: 'auto' }, minHeight: { md: 480 }, objectFit: 'cover', display: 'block' }} />

      <Box sx={{ p: { xs: 2.5, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <BrushLabel variant="cream" component="h2" sx={{ fontSize: { xs: 22, md: 26 }, alignSelf: 'flex-start' }}>
          {product.title}
        </BrushLabel>

        <Box>
          <Typography variant="overline" sx={{ color: brand.gold, fontWeight: 700 }}>
            Incluye
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'grid', gap: 0.75 }}>
            {product.includes.map((item) => (
              <Box component="li" key={item} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <CheckRoundedIcon fontSize="small" sx={{ color: brand.orange }} />
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        {product.ingredients && (
          <Box>
            <Typography variant="overline" sx={{ color: brand.gold, fontWeight: 700 }}>
              Ingredientes
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.ingredients.map((i) => (
                <Chip key={i} label={i} size="small" sx={{ bgcolor: 'rgba(255,255,255,.08)', fontFamily: fonts.body, fontSize: 13 }} />
              ))}
            </Box>
          </Box>
        )}

        {product.sizes && (
          <Box>
            <Typography variant="overline" sx={{ color: brand.gold, fontWeight: 700 }}>
              Tamaño
            </Typography>
            <ToggleButtonGroup
              exclusive
              fullWidth
              value={sizeLabel}
              onChange={(_, value) => value && setSizeLabel(value)}
              aria-label="Tamaño"
            >
              {product.sizes.map((s) => (
                <ToggleButton
                  key={s.label}
                  value={s.label}
                  sx={{
                    flexDirection: 'column',
                    lineHeight: 1.2,
                    textTransform: 'none',
                    '&.Mui-selected, &.Mui-selected:hover': { bgcolor: brand.orange, color: brand.white },
                  }}
                >
                  <Box component="span" sx={{ fontFamily: fonts.display, fontSize: 16 }}>
                    {s.label}
                  </Box>
                  <Box component="span" sx={{ fontSize: 13 }}>
                    {formatPrice(s.price)}
                  </Box>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        )}

        {picks > 0 && (
          <Box sx={{ display: 'grid', gap: 1.5 }}>
            <Typography variant="overline" sx={{ color: brand.gold, fontWeight: 700, mb: -1 }}>
              A elección
            </Typography>
            {choices.map((value, i) => (
              <TextField
                key={i}
                select
                size="small"
                label={picks > 1 ? `Opción ${i + 1}` : 'Elige tu opción'}
                value={value}
                error={touched && !value}
                helperText={touched && !value ? 'Selecciona una opción' : ' '}
                onChange={(e) => setChoices((prev) => prev.map((c, j) => (j === i ? e.target.value : c)))}
              >
                {product.options.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>
            ))}
          </Box>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,.2)', borderRadius: 999 }}>
            <IconButton aria-label="Quitar uno" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty === 1}>
              <RemoveRoundedIcon />
            </IconButton>
            <Typography sx={{ minWidth: 28, textAlign: 'center', fontWeight: 700 }}>{qty}</Typography>
            <IconButton aria-label="Agregar uno" onClick={() => setQty((q) => q + 1)}>
              <AddRoundedIcon />
            </IconButton>
          </Box>
          <Typography sx={{ fontFamily: fonts.price, fontSize: 40, color: brand.gold, lineHeight: 1 }}>
            {formatPrice(price * qty)}
          </Typography>
        </Box>

        <Button variant="contained" size="large" onClick={handleAdd} sx={{ fontSize: 20, py: 1.25 }}>
          Agregar al pedido
        </Button>
      </Box>
    </Box>
  )
}
