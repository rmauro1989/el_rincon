import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { WHATSAPP_NUMBER, formatPrice } from './data/products'

const STORAGE_KEY = 'elrincon-cart'
const CartContext = createContext(null)

// Cada línea es un producto + la opción elegida (ej. "Hamburguesa Bacon")
const lineKey = (productId, option) => `${productId}::${option ?? ''}`

function reducer(lines, action) {
  switch (action.type) {
    case 'add': {
      const key = lineKey(action.product.id, action.option)
      const existing = lines.find((l) => l.key === key)
      if (existing) {
        return lines.map((l) => (l.key === key ? { ...l, qty: l.qty + action.qty } : l))
      }
      return [
        ...lines,
        {
          key,
          id: action.product.id,
          title: action.product.title,
          price: action.product.price,
          image: action.product.image,
          option: action.option,
          qty: action.qty,
        },
      ]
    }
    case 'setQty':
      return lines
        .map((l) => (l.key === action.key ? { ...l, qty: action.qty } : l))
        .filter((l) => l.qty > 0)
    case 'clear':
      return []
    default:
      return lines
  }
}

function loadInitial() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, loadInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // Sin almacenamiento disponible: el carrito vive solo en memoria
    }
  }, [lines])

  const value = useMemo(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
    return {
      lines,
      count,
      total,
      add: (product, option, qty = 1) => dispatch({ type: 'add', product, option, qty }),
      setQty: (key, qty) => dispatch({ type: 'setQty', key, qty }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

export function whatsappOrderUrl(lines, total) {
  const items = lines
    .map((l) => `• ${l.qty} x ${l.title}${l.option ? ` (${l.option})` : ''} — ${formatPrice(l.qty * l.price)}`)
    .join('\n')
  const text = `¡Hola El Rincón! Quiero hacer este pedido:\n\n${items}\n\nTotal: ${formatPrice(total)}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
