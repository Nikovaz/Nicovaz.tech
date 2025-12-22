import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 0,
      title: 'Totodrilo IA - Agencia de Automatización',
      challenge: 'Desarrollar una agencia de automatización integral, desde la infraestructura técnica de agentes conversacionales hasta la identidad visual y estrategia comercial.',
      solution: 'Implementé agentes conversacionales autónomos con n8n y LLMs (GPT-4o, Gemini), sistema de "Buffer de Memoria" con Redis, y una landing page "Tech Hive" de alta conversión.',
      technologies: ['n8n', 'Redis', 'OpenAI API', 'Gemini', 'WhatsApp API', 'React', 'Tailwind CSS'],
      image: '/images/nikopage.png', // Placeholder image
      url: '#', // Placeholder URL
      github: '#' // Placeholder URL
    },
    {
      id: 1,
      title: 'Freelance: Pagina web "Corte caninos a domicilio" ',
      challenge: 'Desarrollar una página web moderna y responsive para un servicio de peluquería canina con servicio a domicilio.',
      solution: 'NICOVAZ implementó una interfaz intuitiva con sistema de reservas y gestión de citas utilizando React y un diseño completamente responsive.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: '../public/images/CorteCanino.png',
      url: 'https://nikovaz.github.io/PeluqueriaCaninaMartino/',
      github: 'https://github.com/Nikovaz/PeluqueriaCaninaMartino.git'
    },
    {
      id: 2,
      title: 'Reparacion de celulares',
      challenge: 'Desarrollar un sitio web para un servicio técnico de reparación de celulares.',
      solution: 'Diseñé y desarrollé un sitio web moderno y responsive utilizando HTML, CSS y JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Batchfile'],
      image: '../public/images/serviceCelularLogo.png',
      url: 'https://nikovaz.github.io/ServiceMobileMatias/',
      github: 'https://github.com/Nikovaz/ServiceMobileMatias.git'
    },
    {
      id: 3,
      title: 'Logistica Chamon',
      challenge: 'Desarrollar un sitio web para un servicio de mensajería especializado en envíos para vendedores de Mercado Libre Flex en CABA y AMBA (Argentina).',
      solution: 'Implementé un sistema de gestión de pedidos y seguimiento de envíos utilizando React Native, Firebase y Redux.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Express'],
      image: '../public/images/logoChamon.png',
      url: 'https://nikovaz.github.io/chamon/',
      github: 'https://github.com/Nikovaz/chamon.git'
    },
    {
      id: 4,
      title: 'Portafolio Andrea Delgado',
      challenge: 'Desarrollar un sitio web para un portafolio de una diseñadora gráfica.',
      solution: 'Diseñé y desarrollé un sitio web moderno y responsive utilizando HTML, CSS y JavaScript.',
      technologies: ['CSS', 'HTML', 'JavaScript'],
      image: '../public/images/andrea.png',
      url: 'https://nikovaz.github.io/portafolioAndreaDelgado/',
      github: 'https://github.com/Nikovaz/portafolioAndreaDelgado.git'
    },
    {
      id: 5,
      title: 'Proyecto Final Backend 2',
      challenge: 'Desarrollar una aplicación de ecommerce que incluya un sistema de gestión de usuarios con autenticación y autorización.',
      solution: 'Implementé un sistema de gestión de usuarios y pedidos utilizando Next.js, Tailwind CSS, GraphQL y PostgreSQL.',
      technologies: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'],
      image: '../public/images/Backend2.png',
      url: 'https://nikovaz.github.io/PreentregaBackend2.NicolasGV/',
      github: 'https://github.com/Nikovaz/PreentregaBackend2.NicolasGV.git'
    },
    {
      id: 6,
      title: 'Proyecto Final Backend 1',
      challenge: 'Desarrollar una aplicación de backend que permita gestionar productos y carritos de compras.',
      solution: 'Implementé un sistema de gestión de productos y carritos de compras utilizando JavaScript y Socket.IO.',
      technologies: ['JavaScript'],
      image: '../public/images/Backend1.png',
      github: 'https://github.com/Nikovaz/entregaFinalBackend1.NicolasGalarzaVazquez.git'
    },
    {
      id: 7,
      title: 'Proyecto Final React',
      challenge: 'Desarrollar un sitio web de ecommerce para la venta de boxers y medias de alta calidad.',
      solution: 'Implementé un sistema de gestión de productos y pedidos utilizando React y un diseño completamente responsive.',
      technologies: ['CSS', 'HTML', 'JavaScript'],
      image: '../public/images/React.png',
      url: 'https://proyectofinal-react-galarza-vazquez-1lrx-ptn1mr00t.vercel.app/',
      github: 'https://github.com/Nikovaz/Proyectofinal.react.GalarzaVazquez.git'
    },
    {
      id: 8,
      title: 'Proyecto Final JavaScript',
      challenge: 'Desarrollar un sitio web que permita gestionar una lista de tareas.',
      solution: 'Implementé un sistema de gestión de tareas utilizando JavaScript y un diseño completamente responsive.',
      technologies: ['CSS', 'HTML', 'JavaScript'],
      image: '../public/images/JS.png',
      github: 'https://github.com/Nikovaz/ProyentoFinal.JS.Galarza.vazquez.git'
    },
    {
      id: 9,
      title: 'Proyecto Final Coderhouse Desarrollo Web ',
      challenge: 'Desarrollar un sitio web que permita gestionar una lista de productos.',
      solution: 'Implementé un sistema de gestión de productos utilizando HTML, CSS y JavaScript.',
      technologies: ['HTML', 'SCSS'],
      image: '../public/images/gardel.png',
      url: 'https://pre-entrega3-galarza-vazquez.vercel.app/discografia.html',
      github: 'https://github.com/Nikovaz/PF.GalarzaVazquez.git'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis <span className="text-purple-400">Proyectos</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-purple-900 bg-opacity-30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                    >
                      Ver Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white border border-white px-4 py-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                    >
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 text-sm mb-2">El Reto</h4>
                    <p className="text-gray-400">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 text-sm mb-2">Mi Solución</h4>
                    <p className="text-gray-400">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-gray-700 text-purple-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && projects.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 mx-auto block px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 active:bg-violet-700"
          >
            Ver más proyectos
          </button>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="#contact" legacyBehavior>
            <a className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-purple-700 transform hover:-translate-y-1">
              ¿Tienes un proyecto en mente? Contáctame
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;