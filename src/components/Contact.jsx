import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ďakujeme za vašu správu! Ozveme sa vám čo najskôr.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="kontakt" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Máte otázku o našich produktoch alebo chcete väčšiu objednávku? Napíšte nám a radi vám poradíme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="fade-in space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Meno a priezvisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ján Novák"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mailová adresa
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="jan.novak@email.sk"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Predmet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Otázka k objednávke"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Správa
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Vaša správa..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Odoslať správu
            </button>
          </form>

          <div className="fade-in space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné údaje</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm text-gray-400">E-mail</p>
                    <p className="text-gray-100">info@babkinemarmelady.sk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-400">Telefón</p>
                    <p className="text-gray-100">+421 907 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-400">Adresa</p>
                    <p className="text-gray-100">Záhradná 15</p>
                    <p className="text-gray-100">034 01 Ružomberok</p>
                    <p className="text-gray-100">Slovensko</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-sm text-gray-400">Otváracie hodiny dielne</p>
                    <p className="text-gray-100">Pondelok – Piatok: 8:00 – 16:00</p>
                    <p className="text-gray-100">Sobota: 9:00 – 12:00</p>
                    <p className="text-gray-400 text-sm mt-1">Osobný odber po dohode</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 border border-blue-500/20 rounded-xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                💡 <strong className="text-white">Tip:</strong> Ak máte záujem o väčšiu objednávku
                na svadbu, oslavu alebo firemný darček, napíšte nám — pripravíme vám individuálnu
                ponuku s personalizovanými etiketami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
