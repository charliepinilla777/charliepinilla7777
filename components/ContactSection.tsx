import React from 'react';

interface ContactLink {
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const contactLinks: ContactLink[] = [
  {
    title: 'Correo / Email',
    description: 'charliepinilla29@gmail.com',
    url: 'mailto:charliepinilla29@gmail.com',
    icon: '✉️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'GitHub',
    description: 'Ver perfil / View profile',
    url: 'https://github.com/charliepinilla777',
    icon: '🐙',
    color: 'from-gray-600 to-gray-800',
  },
  {
    title: 'LinkedIn',
    description: 'Conecta con nosotros / Connect with us',
    url: 'https://linkedin.com/in/charliepinilla',
    icon: '💼',
    color: 'from-blue-600 to-blue-400',
  },
  {
    title: 'WhatsApp',
    description: 'Chat directo / Direct chat: +57 302 815 2276',
    url: 'https://wa.me/573028152276',
    icon: '💬',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Portafolio / Portfolio',
    description: 'Ver catálogo / View catalog',
    url: 'https://charliepinilla.dev',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Conectemos / Let's Connect
          </h2>
          <p className="text-xl text-gray-300">
            Disponibles para alianzas y pedidos especiales / Open to collaborations and special orders
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 p-8"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{link.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{link.description}</p>
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${link.color} text-white text-sm font-semibold`}>
                  Conectar / Connect
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${link.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-12 rounded-xl bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 border border-purple-500 border-opacity-30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listos para una pieza única? / Ready for something amazing?
          </h3>
          <p className="text-gray-200 mb-8 text-lg">
            Estamos listos para crear contigo piezas especiales. / We are ready to craft something special with you.
          </p>
          <a
            href="mailto:charliepinilla29@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Inicia una conversación / Start a Conversation
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="mb-2">
            © 2024 Radiant Gold Gems. All rights reserved.
          </p>
          <p className="text-sm">
            Joyería fina | Oro y gemas preciosas | Diseños exclusivos
          </p>
        </div>
      </div>
    </section>
  );
}
