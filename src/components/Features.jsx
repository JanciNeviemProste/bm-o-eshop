import { useFadeIn } from '../hooks/useFadeIn'

const PRODUCTS = [
  {
    name: 'Jahodová marmeláda',
    description: 'Sladké jahody z podhorských lúk, jemne dochutené citrónom a vanilkou. Ideálna na raňajkové pečivo.',
    price: '4,90 €',
    image: 'https://loremflickr.com/800/600/strawberry,jam?random=2',
    alt: 'Pohár domácej jahodovej marmelády',
    badge: 'Najpredávanejšia',
  },
  {
    name: 'Marhuľový džem',
    description: 'Slnkom vyzreté marhule z južného Slovenska. Plná ovocná chuť bez umelých farbív a konzervantov.',
    price: '5,20 €',
    image: 'https://loremflickr.com/800/600/apricot,jam?random=3',
    alt: 'Pohár domáceho marhuľového džemu',
    badge: null,
  },
  {
    name: 'Čučoriedkový džem',
    description: 'Ručne zbierané čučoriedky z lesov Nízkych Tatier. Bohatá, sýta chuť s jemnou kyslosťou.',
    price: '5,90 €',
    image: 'https://loremflickr.com/800/600/blueberry,jam?random=4',
    alt: 'Pohár domáceho čučoriedkového džemu',
    badge: 'Novinka',
  },
  {
    name: 'Slivkový lekvár',
    description: 'Tradičný slivkový lekvár varený podľa receptu našej starej mamy. Hustý, tmavý a voňavý.',
    price: '4,50 €',
    image: 'https://loremflickr.com/800/600/plum,preserve?random=5',
    alt: 'Pohár domáceho slivkového lekváru',
    badge: null,
  },
  {
    name: 'Malinová marmeláda',
    description: 'Aromatické maliny zo záhrady, varené s minimom cukru. Svieža chuť, ktorá vám pripomenie leto.',
    price: '5,50 €',
    image: 'https://loremflickr.com/800/600/raspberry,jam?random=6',
    alt: 'Pohár domácej malinovej marmelády',
    badge: null,
  },
  {
    name: 'Ríbezľový džem',
    description: 'Červené ríbezle s nádychom škorice a klinčekov. Výrazná chuť vhodná aj na pečenie koláčov.',
    price: '4,70 €',
    image: 'https://loremflickr.com/800/600/currant,jam?random=7',
    alt: 'Pohár domáceho ríbezľového džemu',
    badge: 'Obľúbená',
  },
]

export default function Features() {
  const ref = useFadeIn()

  return (
    <section id="produkty" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Naše produkty
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Každý pohár je ručne plnený a pripravený z čerstvého ovocia. Vyberáme len tie najlepšie
            plody zo slovenských sadov a záhrad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.name}
              className="fade-in group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-600/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <span className="text-lg font-bold text-blue-400">{product.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Pridať do košíka
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="fade-in mt-16 bg-gradient-to-r from-blue-500/10 to-blue-400/10 border border-blue-500/20 rounded-xl p-8 text-center">
          <p className="text-2xl font-bold text-white mb-2">🎁 Pri objednávke nad 20 € — doprava zadarmo!</p>
          <p className="text-gray-400">Objednajte si balíček vašich obľúbených príchutí a ušetrite na poštovnom.</p>
        </div>
      </div>
    </section>
  )
}
