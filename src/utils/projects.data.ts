import birthdayPreview from '../assets/projects/birthday_countdown.mp4';
import countdownPreview from '../assets/projects/countdown_preview.png';
import countriesPreview from '../assets/projects/countries_preview.png';
import illusiaPreview from '../assets/projects/illusia_preview.png';
import MSFPreview from '../assets/projects/msf_preview.png';
import pancakePreview from '../assets/projects/pancakeCo_preview.png';
import { Project } from '../types/types';

import awsSvg from '../assets/tech_stack/aws.svg';
import cssSvg from '../assets/tech_stack/css.svg';
import dockerSvg from '../assets/tech_stack/docker.svg';
import figmaSvg from '../assets/tech_stack/figma.svg';
import gitSvg from '../assets/tech_stack/git.svg';
import htmlSvg from '../assets/tech_stack/html.svg';
import adobeAISvg from '../assets/tech_stack/illustrator.svg';
import jsSvg from '../assets/tech_stack/javascript.svg';
import jenkinsSvg from '../assets/tech_stack/jenkins.svg';
import mySQLSvg from '../assets/tech_stack/mysql.svg';
import nodeSvg from '../assets/tech_stack/nodejs.svg';
import psSvg from '../assets/tech_stack/photoshop.svg';
import postmanSvg from '../assets/tech_stack/postman.svg';
import reactSvg from '../assets/tech_stack/react.svg';
import tsSvg from '../assets/tech_stack/typescript.svg';
import viteSvg from '../assets/tech_stack/vite.svg';

const previewPath = 'https://athinakantis.github.io/portfolio_assets/previews/'

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Illusia Ry Storage Solutions',
    description:
      'This application was developed for Illusia Ry, with the means of allowing users to book items used for LARP events. Users can log in, view and manage their bookings. This site also uses Role-Based Access Control, email and app notifications and intuitive admin features, such as user, item and booking management, and a dashboard. The site currently has three language options.',
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
      src: previewPath + 'illusia_home.png',
      alt: '',
      direction: 'column'
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
    id: 2,
    title: 'PancakeCo',
    description:
      'This Vanilla JavaScript pancake shop features custom illustrations, a dynamic cart system, and real-time pricing based on toppings and quantities. Built with responsive design, it ensures smooth functionality across all devices without external frameworks.',
    tags: ['HTML', 'CSS', 'JS', 'adobe AI', 'Responsive'],
    preview: {
      width: 343,
      height: 1240,
      type: 'img',
      src: (previewPath + '/pancakeCo_desktop_homepage_2.png'),
      alt: 'Screenshot of Pancake Co web app',
      direction: 'row'
    },
    cardPreview: {
      src: pancakePreview,
      alt: '',
      description: 'Vanilla JS project of a pancake parlor store-front',
    },
    features: ['Cart System', 'Dynamic Pricing', 'Responsive Design'],
    technologies: ['Vanilla JS'],
    screenshots: [previewPath + 'pancakeCo_mobile_homepage.png'],
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
    description: 'This project lets you browse the countries of the world and learn more about each country. There is a log-in option, and users can add countries to their favourites!',
    tags: ['React', 'REST API', 'OAuth', 'Tailwind', "Dark Mode", "TypeScript"],
    preview: {
      height: 696,
      width: 394,
      alt: '',
      type: 'img',
      src: previewPath + 'countries_screenshot.png',
      direction: 'column'
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
    id: 4,
    title: 'Birthday Countdown',
    description:
      'This simple countdown is done with regular CSS, JS and HTML. It features a countdown down to the second, and a display of explosive fireworks on my nieces birthday.',
    tags: ['HTML', 'CSS', 'JS', 'Responsive'],
    preview: {
      height: 696,
      width: 394,
      type: 'mov',
      src: birthdayPreview,
      alt: 'Video of digital fireworks',
      direction: 'row'
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
    id: 5,
    title: 'Multi Step Form',
    description: 'A Single Page Form Application powered by React.',
    tags: ['React', 'HTML', 'CSS', 'JS', 'Responsive'],
    preview: {
      width: '100%',
      type: 'img',
      src: previewPath + '/msf_desktop.png',
      alt: 'Screenshot of Multi-Step Form',
      direction: 'column'
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

/**
 * Tech stack data
 */
export const techStack = [
  { label: 'React', svg: reactSvg },
  { label: 'TypeScript', svg: tsSvg },
  { label: 'NodeJS', svg: nodeSvg },
  { label: 'Docker', svg: dockerSvg },
  { label: 'Git', svg: gitSvg },
  { label: 'Jenkins', svg: jenkinsSvg },
  { label: 'HTML', svg: htmlSvg },
  { label: 'CSS', svg: cssSvg },
  { label: 'JavaScript', svg: jsSvg },
  { label: 'Vite', svg: viteSvg },
  { label: 'MySQL', svg: mySQLSvg },
  { label: 'AWS', svg: awsSvg },
  { label: 'Figma', svg: figmaSvg },
  { label: 'Illustrator', svg: adobeAISvg },
  { label: 'Photoshop', svg: psSvg },
  { label: 'Postman', svg: postmanSvg },
];

