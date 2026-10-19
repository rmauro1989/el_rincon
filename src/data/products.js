export const WHATSAPP_NUMBER = '56951466739'
export const INSTAGRAM_USER = 'elriconsandwicheria'

export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'hamburguesas', label: 'Hamburguesas' },
  { id: 'completos', label: 'Completos e Italianos' },
  { id: 'as', label: 'As' },
  { id: 'churrascos', label: 'Churrascos' },
  { id: 'chorrillanas', label: 'Chorrillanas' },
  { id: 'acompanamientos', label: 'Papas y bebidas' },
]

export const sections = [
  { id: 'promo', label: 'Promociones' },
  { id: 'unitario', label: 'Precio unitario' },
]

const HAMBURGUESAS = ['Hamburguesa Bacon', 'Hamburguesa Skill', 'Hamburguesa American']
const CHURRASCOS = ['Churrasco Italiano', 'Churrasco Chacarero', 'Churrasco Barro Luco']
const AS = ['As Italiano', 'As Queso', 'As Chacarero']
const COMPLETO = ['Pan frica', 'Vienesa', 'Americana', 'Chucrut', 'Tomate', 'Mayo casera']
const ITALIANO = ['Pan frica', 'Vienesa', 'Tomate', 'Palta', 'Mayo casera']

// Productos con tamaños: cada tamaño tiene su precio y su foto
const img = (name) => `/assets/productos/${name}.webp`
const sizes = (base, normal, grande) => [
  { label: 'Normal', price: normal, image: img(`${base}-normal`) },
  { label: 'Grande', price: grande, image: img(`${base}-grande`) },
]

export const products = [
  {
    id: '2-hamburguesas',
    picks: 2,
    kind: 'promo',
    category: 'hamburguesas',
    title: '2 Hamburguesas a elección',
    includes: ['2 hamburguesas a elección'],
    options: HAMBURGUESAS,
    price: 13000,
    image: '/assets/promos/2-hamburguesas.webp',
  },
  {
    id: 'combo-hamburguesa',
    kind: 'promo',
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
    kind: 'promo',
    category: 'hamburguesas',
    title: '2 Hamburguesas + papas + 2 bebidas',
    includes: ['2 hamburguesas a elección', 'Papas fritas chicas', '2 bebidas en lata'],
    options: HAMBURGUESAS,
    price: 18000,
    image: '/assets/promos/combo-2-hamburguesas.webp',
  },
  {
    id: '2-completos',
    kind: 'promo',
    category: 'completos',
    title: '2 Completos grandes',
    includes: ['2 completos grandes'],
    price: 4500,
    image: '/assets/promos/2-completos.webp',
  },
  {
    id: '2-italianos',
    kind: 'promo',
    category: 'completos',
    title: '2 Italianos grandes',
    includes: ['2 italianos grandes'],
    price: 6000,
    image: '/assets/promos/2-italianos.webp',
  },
  {
    id: '3-italianos',
    kind: 'promo',
    category: 'completos',
    title: '3 Italianos normales',
    includes: ['3 italianos tamaño normal'],
    price: 6500,
    image: '/assets/promos/3-italianos.webp',
  },
  {
    id: 'combo-italiano',
    kind: 'promo',
    category: 'completos',
    title: 'Italiano grande + papas + bebida',
    includes: ['1 italiano o completo grande', 'Papas fritas chicas', 'Bebida en lata'],
    options: ['Italiano', 'Completo'],
    price: 7000,
    image: '/assets/promos/combo-italiano.webp',
  },
  {
    id: 'combo-2-italianos',
    kind: 'promo',
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
    kind: 'promo',
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
    kind: 'promo',
    category: 'churrascos',
    title: '2 Churrascos tradicionales',
    includes: ['2 churrascos tradicionales a elección'],
    options: CHURRASCOS,
    price: 9000,
    image: '/assets/promos/2-churrascos.webp',
  },
  {
    id: 'combo-churrasco',
    kind: 'promo',
    category: 'churrascos',
    title: 'Churrasco + papas + bebida',
    includes: ['1 churrasco tradicional a elección', 'Papas fritas pequeñas', 'Bebida en lata'],
    options: CHURRASCOS,
    price: 8500,
    image: '/assets/promos/combo-churrasco.webp',
  },
  {
    id: 'hamburguesa',
    kind: 'unitario',
    category: 'hamburguesas',
    title: 'Hamburguesa',
    includes: ['1 hamburguesa a elección'],
    options: HAMBURGUESAS,
    price: 7000,
    image: img('hamburguesa'),
  },
  {
    id: 'completo',
    kind: 'unitario',
    category: 'completos',
    title: 'Completo',
    includes: ['1 completo, tamaño normal o grande'],
    ingredients: COMPLETO,
    sizes: sizes('completo', 2100, 2500),
    image: img('completo-grande'),
  },
  {
    id: 'completo-tomate',
    kind: 'unitario',
    category: 'completos',
    title: 'Completo tomate',
    includes: ['1 completo tomate, tamaño normal o grande'],
    ingredients: COMPLETO,
    sizes: sizes('completo-tomate', 1700, 1900),
    image: img('completo-tomate-grande'),
  },
  {
    id: 'italiano',
    kind: 'unitario',
    category: 'completos',
    title: 'Italiano',
    includes: ['1 italiano, tamaño normal o grande'],
    ingredients: ITALIANO,
    sizes: sizes('italiano', 2300, 3200),
    image: img('italiano-grande'),
  },
  {
    id: 'dinamico',
    kind: 'unitario',
    category: 'completos',
    title: 'Dinámico',
    includes: ['1 dinámico, tamaño normal o grande'],
    ingredients: ['Pan frica', 'Vienesa', 'Chucrut', 'Americana', 'Tomate', 'Palta', 'Mayo casera'],
    sizes: sizes('dinamico', 2500, 3000),
    image: img('dinamico-grande'),
  },
  {
    id: 'chaparrita',
    kind: 'unitario',
    category: 'completos',
    title: 'Chaparrita',
    includes: ['1 chaparrita, tamaño normal o grande'],
    ingredients: ['Pan frica', 'Vienesa', 'Queso mozzarella'],
    sizes: sizes('chaparrita', 2300, 2900),
    image: img('chaparrita-grande'),
  },
  {
    id: 'as',
    kind: 'unitario',
    category: 'as',
    title: 'As',
    includes: ['1 as a elección, tamaño normal o grande'],
    options: AS,
    sizes: sizes('as', 3700, 4700),
    image: img('as-grande'),
  },
  {
    id: 'churrasco',
    kind: 'unitario',
    category: 'churrascos',
    title: 'Churrasco',
    includes: ['1 churrasco a elección'],
    options: ['Churrasco Barro Luco', 'Churrasco Italiano', 'Churrasco Chacarero'],
    price: 4700,
    image: img('churrasco'),
  },
  {
    id: 'chorrillana-grande',
    kind: 'promo',
    category: 'chorrillanas',
    title: 'Chorrillana grande para 4 personas',
    includes: ['Chorrillana grande para 4 personas'],
    ingredients: ['Carne', 'Champiñón', 'Cebolla caramelizada', 'Vienesas', 'Papas fritas', 'Huevos'],
    price: 13000,
    image: img('chorrillana'),
  },
  {
    id: 'papas-fritas',
    kind: 'unitario',
    category: 'acompanamientos',
    title: 'Papas fritas',
    includes: ['Papas fritas chica, media o grande'],
    sizes: [
      { label: 'Chica', price: 3000 },
      { label: 'Media', price: 5000 },
      { label: 'Grande', price: 7000 },
    ],
    image: img('papas-fritas'),
  },
  {
    id: 'lata-bebida',
    kind: 'promo',
    category: 'acompanamientos',
    title: 'Lata de bebida',
    includes: ['1 lata de bebida a elección'],
    options: ['Sprite', 'Kem', 'Coca-Cola normal', 'Coca-Cola Zero', 'Pap', 'Bilz', 'Fanta'],
    price: 1400,
    image: img('lata-bebida'),
  },
  {
    id: 'cafe-te',
    kind: 'unitario',
    category: 'acompanamientos',
    title: 'Café o té',
    includes: ['1 bebida caliente a elección'],
    options: ['Café', 'Té'],
    price: 1000,
    image: img('cafe-te'),
  },
]

const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
export const formatPrice = (value) => clp.format(value)

export const ADDRESS = 'Embalse La Palma 5976, Peñalolén'
const mapsQuery = encodeURIComponent('Embalse La Palma 5976, 7930966 Peñalolén, Región Metropolitana')
// Ficha del local en Google Maps
export const MAP_PLACE_URL =
  'https://www.google.com/maps/place/Embalse+La+Palma+5976,+7930966+Pe%C3%B1alol%C3%A9n,+Regi%C3%B3n+Metropolitana/data=!4m2!3m1!1s0x9662d04f1dea6041:0x5847b1626f90a83b'
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

export const ABOUT = {
  title: 'Rincón Sandwichería',
  paragraphs: [
    'En Rincón Sandwichería creemos que la comida rápida es mucho más que una comida: es una experiencia llena de sabor, buenos momentos y tradición.',
    'Ubicados en el corazón de Embalse La Palma 5976, en Peñalolén, llevamos más de una década perfeccionando el arte del buen sabor.',
    'Para nosotros, la calidad es innegociable. Creemos que comer bien va más allá de saciar el hambre: se trata de disfrutar cada bocado, de la frescura de nuestros ingredientes y de esa sazón que nos hace únicos.',
    'Gracias por permitirnos ser parte de tu historia y por elegir nuestro local para vivir una verdadera experiencia de sabor.',
  ],
  closing: '¡Bienvenidos a nuestra casa, bienvenidos al sabor de siempre!',
  quote: 'Peñalolén sabe que la calidad tiene historia',
  tagline: 'Y los favoritos de Embalse La Palma.',
}
