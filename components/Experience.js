import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const experiences = [
    {
      id: 1,
      role: 'Fundador & Lead Developer',
      company: 'Totodrilo IA',
      period: 'Septiembre 2025 – Actualidad',
      location: 'Buenos Aires, Argentina',
      description: 'Liderazgo técnico y desarrollo integral de soluciones de automatización con IA.',
      achievements: [
        'Orquestación de Backend & IA: Desarrollo de agentes conversacionales autónomos en n8n, integrando modelos multimodales (GPT-4o, Gemini Pro, Claude Sonnet, DeepSeek).',
        'Arquitectura de Datos & Caching: Implementación de Redis para gestión de colas y "Buffer de Memoria", optimizando la fragmentación de mensajes en WhatsApp.',
        'Infraestructura de Mensajería: Integración de WhatsApp Business API, Telegram Bot API y Chatwoot como CRM centralizado.',
        'Desarrollo Frontend: Creación de landing page de alta conversión con simuladores de chat interactivos.',
        'Casos de Éxito: Automatización de atención al cliente para Tienda BrossUnderwear y Tienda NNN.'
      ]
    },
    {
      id: 2,
      role: 'Fundador y CEO',
      company: 'Khaw Logística',
      period: 'Mayo 2018 – Febrero 2025',
      location: 'Buenos Aires, Argentina',
      description: 'Liderazgo de equipos y estrategia comercial en el sector logístico, aplicando hoy esa visión de negocio a la arquitectura de software.'
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experiencia <span className="text-purple-400">Profesional</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-900 top-0"></div>
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10 mt-1.5"></div>
                
                <div className="md:w-5/12 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
                  <span className="text-purple-400 text-sm font-bold tracking-wider">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                  <div className="text-gray-400 mb-4">{exp.company} | {exp.location}</div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.achievements && (
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
