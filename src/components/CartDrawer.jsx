import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BrushLabel from './BrushLabel'
import { useCart, whatsappOrderUrl } from '../cart'
import { ADDRESS, formatPrice } from '../data/products'
import { brand, fonts } from '../theme'

export default function CartDrawer({ open, onClose }) {
  const { lines, total, setQty, clear } = useCart()
  const empty = lines.length === 0

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: '100%', sm: 420 }, bgcolor: brand.board, backgroundImage: 'none' } } }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2.5 }}>
        <BrushLabel variant="cream" component="h2" sx={{ fontSize: 24 }}>
          Tu pedido
        </BrushLabel>
        <IconButton onClick={onClose} aria-label="Cerrar pedido">
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2.5 }}>
        {empty ? (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 6 }}>Aún no agregas productos.</Typography>
        ) : (
          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 2 }}>
            {lines.map((line) => (
              <Box component="li" key={line.key} sx={{ display: 'flex', gap: 1.5 }}>
                <Box component="img" src={line.image} alt="" sx={{ width: 72, height: 72, borderRadius: 2, objectFit: 'cover', flexShrink: 0 }} />
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 600, lineHeight: 1.25 }}>{line.title}</Typography>
                  {line.option && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {line.option}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small" aria-label="Quitar uno" onClick={() => setQty(line.key, line.qty - 1)}>
                        <RemoveRoundedIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ minWidth: 24, textAlign: 'center' }}>{line.qty}</Typography>
                      <IconButton size="small" aria-label="Agregar uno" onClick={() => setQty(line.key, line.qty + 1)}>
                        <AddRoundedIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography sx={{ fontFamily: fonts.price, fontSize: 24, color: brand.gold }}>
                      {formatPrice(line.qty * line.price)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Divider />
      <Box sx={{ p: 2.5, display: 'grid', gap: 1.5 }}>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', gap: 1, color: brand.cream, fontWeight: 600, bgcolor: 'rgba(148,19,24,.45)', borderRadius: 2, px: 1.5, py: 1 }}
        >
          <StorefrontRoundedIcon fontSize="small" sx={{ color: brand.gold }} />
          Solo retiro en local: {ADDRESS}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Typography variant="h6">Total</Typography>
          <Typography sx={{ fontFamily: fonts.price, fontSize: 40, color: brand.gold, lineHeight: 1 }}>
            {formatPrice(total)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          disabled={empty}
          href={empty ? undefined : whatsappOrderUrl(lines, total)}
          target="_blank"
          rel="noopener"
          sx={{ bgcolor: '#25D366', color: '#0b3d1f', fontSize: 18, '&:hover': { bgcolor: '#1fb857' } }}
        >
          Enviar pedido por WhatsApp
        </Button>
        {!empty && (
          <Button color="inherit" onClick={clear} sx={{ color: 'text.secondary' }}>
            Vaciar pedido
          </Button>
        )}
      </Box>
    </Drawer>
  )
}
