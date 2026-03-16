import { useFadeIn } from '../hooks/useFadeIn'

export default function Hero() {
  const ref = useFadeIn()

  return (
    <section
      id="domov"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://loremflickr.com/1200/800/jam,homemade,fruit?random=1"
          alt="Domáce marmelády a čerstvé ovocie na drevenom stole"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="fade-in">
          <span className="inline-block text-6xl mb-6">🍯</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Domáce marmelády a džemy
            <br />
            <span className="text-blue-400">s láskou pripravené</span>
          </h1>
        </div>

        <div className="fade-in">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tradičné slovenské recepty, čerstvé ovocie z našich sadov a ručná výroba bez umelých prísad.
            Každý pohár je kúsok domova.
          </p>
        </div>

        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#produkty"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Prezrieť produkty
          </a>
          <a
            href="#o-nas"
            className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Náš príbeh
          </a>
        </div>

        <div className="fade-in mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">12+</p>
            <p className="text-sm text-gray-400">príchutí</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-gray-400">prírodné</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">5★</p>
            <p className="text-sm text-gray-400">hodnotenie</p>
          </div>
        </div>
      </div>
    </section>
  )
}
