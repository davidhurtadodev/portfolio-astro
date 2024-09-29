import eskilImage from '../assets/images/skill-homepage.png';
import ponteImage from '../assets/images/ponte-homepage.png';
import guidoImage from '../assets/images/guidohurtadog-homepage.png';

const projectsData = [
  {
    title: 'Eskil',
    info: `Web platform that acts as an intermediary between for finding craftsmen  . The platform manages contacts, searches, and payments, providing a streamlined experience. Made with Next.JS 13 with server components, Tailwind CSS,  and Supabase.`,
    img: eskilImage,
    repoUrl: 'https://github.com/davidhurtadodev/eskil',
    demoUrl: null,
  },
  {
    title: 'Ponte',
    info: `Website for a coworking space with multiple pages, a modern design, and animations created with CSS and JavaScript. The site is built on WordPress, uses custom PHP code, and is optimized with GenerateBlocks to create a performance-focused and SEO-friendly frontend.`,
    img: ponteImage,
    repoUrl: null,
    demoUrl: 'https://pontehub.pt',
  },
  {
    title: 'Guido Hurtado UI UX Design',
    info: `Portfolio of a web UI/UX designer. It has rich and interactive scroll animations developed with Framer Motion. Developed with Next.js, Tailwind CSS and Framer Motion.`,
    img: guidoImage,
    repoUrl: 'https://github.com/davidhurtadodev/guido-portfolio',
    demoUrl: 'https://www.guidohurtado.com',
  },
];

export default projectsData;
