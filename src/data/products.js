export const WHATSAPP_NUMBER = '56951466739'
export const INSTAGRAM_USER = 'elriconsandwicheria'

export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'hamburguesas', label: 'Hamburguesas' },
  { id: 'completos', label: 'Completos e Italianos' },
  { id: 'as', label: 'As' },
  { id: 'churrascos', label: 'Churrascos' },
]

const HAMBURGUESAS = ['Hamburguesa Bacon', 'Hamburguesa Skill', 'Hamburguesa American']
const CHURRASCOS = ['Churrasco Italiano', 'Churrasco Chacarero', 'Churrasco Barro Luco']

export const products = [
  {
    id: '2-hamburguesas',
    picks: 2,
    category: 'hamburguesas',
    title: '2 Hamburguesas a elección',
    includes: ['2 hamburguesas a elección'],
    options: HAMBURGUESAS,
    price: 13000,
    image: '/assets/promos/2-hamburguesas.webp',
  },
  {
    id: 'combo-hamburguesa',
    category: 'hamburguesas',
    title: 'Hamburguesa + papas + bebida',
    includes: ['1 hamburguesa a elección', 'Papas fritas chicas', 'Bebida en lata'],
    options: HAMBURGUESAS,
    price: 10800,
    image: '/assets/promos/combo-hamburguesa.webp',
  },
  {
    id: 'combo-2-hamburguesas',
    picks: 2,
    category: 'hamburguesas',
    title: '2 Hamburguesas + papas + 2 bebidas',
    includes: ['2 hamburguesas a elección', 'Papas fritas chicas', '2 bebidas en lata'],
    options: HAMBURGUESAS,
    price: 18000,
    image: '/assets/promos/combo-2-hamburguesas.webp',
  },
  {
    id: '2-completos',
    category: 'completos',
    title: '2 Completos grandes',
    includes: ['2 completos grandes'],
    price: 4500,
    image: '/assets/promos/2-completos.webp',
  },
  {
    id: '2-italianos',
    category: 'completos',
    title: '2 Italianos grandes',
    includes: ['2 italianos grandes'],
    price: 6000,
    image: '/assets/promos/2-italianos.webp',
  },
  {
    id: '3-italianos',
    category: 'completos',
    title: '3 Italianos normales',
    includes: ['3 italianos tamaño normal'],
    price: 6500,
    image: '/assets/promos/3-italianos.webp',
  },
  {
    id: 'combo-italiano',
    category: 'completos',
    title: 'Italiano grande + papas + bebida',
    includes: ['1 italiano o completo grande', 'Papas fritas chicas', 'Bebida en lata'],
    options: ['Italiano', 'Completo'],
    price: 7000,
    image: '/assets/promos/combo-italiano.webp',
  },
  {
    id: 'combo-2-italianos',
    category: 'completos',
    title: '2 Italianos grandes + papas + 2 bebidas',
    includes: ['2 italianos grandes', '1 papas fritas pequeñas', '2 bebidas en lata'],
    ingredients: ['Pan frica', 'Vienesa', 'Tomate', 'Palta', 'Mayo casera'],
    price: 9000,
    image: '/assets/promos/combo-2-italianos.webp',
  },
  {
    id: 'combo-2-as',
    picks: 2,
    category: 'as',
    title: '2 As grandes + papas + 2 bebidas',
    includes: ['2 as grandes a elección', 'Papas fritas pequeñas', '2 bebidas en lata'],
    options: ['As Italiano', 'As Completo', 'As Chacarero', 'As Queso'],
    price: 14500,
    image: '/assets/promos/combo-2-as.webp',
  },
  {
    id: '2-churrascos',
    picks: 2,
    category: 'churrascos',
    title: '2 Churrascos tradicionales',
    includes: ['2 churrascos tradicionales a elección'],
    options: CHURRASCOS,
    price: 9000,
    image: '/assets/promos/2-churrascos.webp',
  },
  {
    id: 'combo-churrasco',
    category: 'churrascos',
    title: 'Churrasco + papas + bebida',
    includes: ['1 churrasco tradicional a elección', 'Papas fritas pequeñas', 'Bebida en lata'],
    options: CHURRASCOS,
    price: 8500,
    image: '/assets/promos/combo-churrasco.webp',
  },
]

const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
export const formatPrice = (value) => clp.format(value)
