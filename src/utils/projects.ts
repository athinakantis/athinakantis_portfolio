import pancakePreview from '../assets/projects/pancakeCo_preview.png'
import countdownPreview from '../assets/projects/countdown_preview.png'
import MSFPreview from '../assets/projects/msf_preview.png'
import countriesPreview from '../assets/projects/countries_preview.png';
import illusiaPreview from '../assets/projects/illusia_preview.png'
import { Project } from '../types/types';

export const projectsData: Project[] = [
  {
    id: 4,
    title: 'Illusia Ry Storage Solutions',
    description:
      'This application was developed for Illusia Ry, with the means of allowing users to book items used for LARP events. Users can log in, view and manage their bookings. This site also uses Role-Based Access Control, email and app notifications and intuitive admin features, such as user and booking management, and a dashboard. The site currently has three language options.',
    tags: [
      'React',
      "TypeScript",
      'OAuth',
      'PostgreSQL',
      "Redux",
      'NestJS',
      'Responsive',
      'MUI',
    ],
    preview: {
      type: 'img',
      src: '',
      alt: 'Add preview here',
    },
    cardPreview: {
      src: illusiaPreview,
      alt: '',
      description: 'Item & Booking Management App with Role-Based Access Control',
    },
    features: ['React', 'OAuth'],
    technologies: ['React', 'Postgresql', 'Redux', 'i18next', 'NestJS', "TypeScript"],
    screenshots: [],
    embeddedContent: null,
    figmaDesign: 'https://www.figma.com/design/f50WOjD58oaaN2qqAP1Y1e/UI-tasks?node-id=541-2&t=mWfX8HiP2XdXvYhg-1',
    livePage: 'https://illusia.netlify.app/',
    sourceCode: 'https://github.com/illusia-ry-organization/illusia_ry',
  },
  {
    id: 0,
    title: 'PancakeCo',
    description:
      'This Vanilla JavaScript pancake shop features custom illustrations, a dynamic cart system, and real-time pricing based on toppings and quantities. Built with responsive design, it ensures smooth functionality across all devices without external frameworks.',
    tags: ['HTML', 'CSS', 'JS', 'adobe AI', 'Responsive'],
    preview: {
      width: 343,
      height: 1240,
      type: 'img',
      src: '/project_previews/pancakeCo_mobile_homepage.png',
      alt: 'Screenshot of Pancake Co web app',
    },
    cardPreview: {
      src: pancakePreview,
      alt: '',
      description: 'Vanilla JS project of a pancake parlor store-front',
    },
    features: ['Cart System', 'Dynamic Pricing', 'Responsive Design'],
    technologies: ['Vanilla JS'],
    screenshots: ['/project_previews/pancakeCo_desktop_homepage_2.png'],
    embeddedContent: {
      figma:
        'https://embed.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide-%2B-Wireframe?node-id=0-1&embed-host=share',
    },
    livePage: 'https://athinakantis.github.io/pancakeCo/',
    sourceCode: 'https://github.com/athinakantis/pancakeCo',
    figmaDesign:
      'https://www.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide-%2B-Wireframe?node-id=0-1&t=f8xE1uuoHPZ83B0l-1',
  },
  {
    id: 3,
    title: 'Countries of the World',
    description: '',
    tags: ['React', 'REST API', 'OAuth', 'Tailwind', "Dark Mode", "TypeScript"],
    preview: {
      height: 696,
      width: 394,
      alt: '',
      type: 'img',
      src: countriesPreview,
    },
    cardPreview: {
      src: countriesPreview,
      alt: '',
      description: 'Full-Stack Geographical Learning App',
    },
    features: ['React', 'REST API', 'OAuth', 'E2E Testing'],
    technologies: ['React', 'TailwindCSS', 'NestJS', "TypeScript"],
    screenshots: [],
    embeddedContent: null,
    livePage: 'https://countries-of-the-world-kantis.netlify.app/',
    sourceCode: 'https://github.com/athinakantis/full-stack-countries-app',
  },
    {
    id: 2,
    title: 'Birthday Countdown',
    description:
      'This simple countdown is done with regular CSS, JS and HTML. It features a countdown down to the second, and a display of explosive fireworks on my nieces birthday.',
    tags: ['HTML', 'CSS', 'JS', 'Responsive'],
    preview: {
      height: 696,
      width: 394,
      type: 'mov',
      src: '/project_previews/Launch_Countdown_Preview.mov',
      alt: 'Video of digital fireworks',
    },
    cardPreview: {
      src: countdownPreview,
      alt: '',
      description: 'Vanilla JS countdown',
    },
    features: ['Special effects', 'Responsive Design', 'Countdown'],
    technologies: ['React'],
    screenshots: [],
    embeddedContent: null,
    livePage:
      'https://athinakantis.github.io/Front_End_Mentor/Launch_Countdown/',
    sourceCode:
      'https://github.com/athinakantis/Front_End_Mentor/tree/main/Launch_Countdown',
  },
   {
    id: 1,
    title: 'Multi Step Form',
    description: 'A Single Page Form Application powered by React.',
    tags: ['React', 'HTML', 'CSS', 'JS', 'Responsive'],
    preview: {
      width: '100%',
      type: 'img',
      src: '/project_previews/msf_desktop.png',
      alt: 'Screenshot of Multi-Step Form',
    },
    cardPreview: {
      src: MSFPreview,
      alt: '',
      description: 'React-powered Multi-Step-Form ',
    },
    features: ['Dynamic Pricing', 'Responsive Design'],
    technologies: ['React'],
    screenshots: [],
    embeddedContent: null,
    livePage: 'https://athinakantis.github.io/MultiStepForm/',
    sourceCode:
      'https://github.com/athinakantis/Front_End_Mentor/tree/main/multiStepForm',
  },
];
