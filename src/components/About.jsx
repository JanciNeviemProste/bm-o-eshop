import { useFadeIn } from '../hooks/useFadeIn'

const REASONS = [
  {
    icon: '🌿',
    title: 'Prírodné suroviny',
    description:
      'Používame výlučne čerstvé ovocie zo slovenských sadov a záhrad. Žiadne umelé farbivá, konzervačné látky ani arómy. Cukor pridávame v minimálnom množstve — chceme, aby ste cítili skutočnú chuť ovocia, nie sladidiel.',
  },
  {
    icon: '👵',
    title: 'Tradičné recepty',
    description:
      'Naše recepty sú dedičstvom po starých mamách z regiónu Liptova. Varenie marmelád u nás nie je priemysel — je to rodinná tradícia, ktorú si udržiavame už tri generácie. Každý recept bol rokmi zdokonaľovaný.',
  },
  {
    icon: '🤲',
    title: 'Ručná výroba',
    description:
      'Každý pohár plníme ručne v malej dielni. Ovocie umývame, krájame a varíme v malých dávkach, aby sme zachovali čo najlepšiu kvalitu. Preto vieme garantovať, že každý kúsok ovocia dostal pozornosť, ktorú si zaslúži.',
  },
]

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="o-nas" ref={ref} className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prečo naše marmelády?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nie sme fabrika. Sme malá rodinná dielňa na Liptove, kde každý pohár marmelády vzniká
            s rešpektom k tradícii a kvalitným surovinám.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className="fade-in bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-600/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-5xl mb-6 block">{reason.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-video">
            <img
              src="https://loremflickr.com/800/600/fruit,garden,harvest?random=8"
              alt="Ovocný sad s čerstvým ovocím pripravený na zber"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Náš príbeh
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Všetko sa začalo v malej kuchyni na Liptove, kde naša babička Mária každé leto varila
              marmelády z ovocia, ktoré sme nazbierali v záhrade. Jahody, maliny, čučoriedky — všetko
              šlo do veľkého medeného hrnca a celý dom voňal ovocím.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keď sme začali nosiť poháre s marmeládou ako darčeky priateľom a rodine, všetci
              hovorili to isté: „Toto by ste mali predávať." A tak sme v roku 2019 otvorili
              náš malý e-shop a začali zdieľať babkine recepty so širším svetom.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dnes varíme v malej dielni neďaleko Ružomberka. Ovocie nakupujeme od miestnych
              pestovateľov alebo zbierame v našom vlastnom sade. Každú sezónu pripravíme niekoľko
              stoviek pohárov — a každý jeden s rovnakou láskou ako ten prvý v babkinej kuchyni.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
