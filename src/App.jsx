import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Snackbar from '@mui/material/Snackbar'
import About from './components/About'
import BrushLabel from './components/BrushLabel'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import ProductCard from './components/ProductCard'
import ProductDialog from './components/ProductDialog'
import { useCart } from './cart'
import { categories, products } from './data/products'
import { brand } from './theme'

export default function App() {
  const { add } = useCart()
  const [category, setCategory] = useState('todos')
  const [selected, setSelected] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')

  const visible = useMemo(
    () => (category === 'todos' ? products : products.filter((p) => p.category === category)),
    [category],
  )

  const handleAdd = (product, option, qty) => {
    add(product, option, qty)
    setSelected(null)
    setToast(`${qty} x ${product.title} agregado al pedido`)
  }

  return (
    <>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />

        <Container id="promociones" component="section" maxWidth="lg" sx={{ pt: { xs: 6, md: 9 }, scrollMarginTop: 72 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <BrushLabel variant="cream" component="h2" sx={{ fontSize: { xs: 28, md: 40 }, px: { xs: 3, md: 5 } }}>
              Nuestras promociones
            </BrushLabel>
          </Box>

          <Box
            role="tablist"
            aria-label="Filtrar por categoría"
            sx={{
              display: 'flex',
              gap: 1.25,
              mb: 5,
              justifyContent: { md: 'center' },
              overflowX: 'auto',
              pb: 1,
              scrollbarWidth: 'none',
            }}
          >
            {categories.map((c) => {
              const active = c.id === category
              return (
                <Chip
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  label={c.label}
                  onClick={() => setCategory(c.id)}
                  sx={{
                    flexShrink: 0,
                    height: 40,
                    px: 1,
                    bgcolor: active ? brand.orange : 'rgba(255,255,255,0.08)',
                    color: brand.white,
                    border: `2px solid ${active ? brand.gold : 'transparent'}`,
                    '&:hover': { bgcolor: active ? brand.orange : 'rgba(255,255,255,0.16)' },
                  }}
                />
              )
            })}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: { xs: 4, md: 4 },
              rowGap: { xs: 5, md: 6 },
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            }}
          >
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={setSelected} />
            ))}
          </Box>
        </Container>

        <Location />
        <About />
      </main>
      <Footer />

      <ProductDialog product={selected} onClose={() => setSelected(null)} onAdd={handleAdd} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={2500}
        onClose={() => setToast('')}
        message={toast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  )
}
