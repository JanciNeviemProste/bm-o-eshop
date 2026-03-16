import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#domov', label: 'Domov' },
  { href: '#produkty', label: 'Produkty' },
  { href: '#o-nas', label: 'Prečo my' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#domov" className="flex items-center gap-2 text-white font-bold text-xl transition-all duration-300 hover:opacity-80">
            <span className="text-2xl">🍓</span>
            <span style={{ fontFamily: "'Playfair Display', serif" }}>Babkine Marmelády</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#produkty"
              className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Objednať
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            aria-label="Prepnúť menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produkty"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md"
          >
            Objednať
          </a>
        </div>
      </div>
    </nav>
  )
}
