import reactSvg from '../assets/tech_stack/react.svg'
import tsSvg from '../assets/tech_stack/typescript.svg'
import nodeSvg from '../assets/tech_stack/nodejs.svg'
import dockerSvg from '../assets/tech_stack/docker.svg'
import gitSvg from '../assets/tech_stack/git.svg'
import jenkinsSvg from '../assets/tech_stack/jenkins.svg'
import htmlSvg from '../assets/tech_stack/html.svg'
import cssSvg from '../assets/tech_stack/css.svg'
import jsSvg from '../assets/tech_stack/javascript.svg'
import viteSvg from '../assets/tech_stack/vite.svg'
import mySQLSvg from '../assets/tech_stack/mysql.svg'
import awsSvg from '../assets/tech_stack/aws.svg'
import figmaSvg from '../assets/tech_stack/figma.svg'
import adobeAISvg from '../assets/tech_stack/illustrator.svg'
import psSvg from '../assets/tech_stack/photoshop.svg'
import postmanSvg from '../assets/tech_stack/postman.svg';

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

const galleryPath = 'https://athinakantis.github.io/portfolio_assets/art/'
const portraitPath = galleryPath + '/portraits/'
const illustrationPath = galleryPath + '/illustrations/'
const landscapePath = galleryPath + '/landscapes/'

export const art = {
    portraits: [
        {src: portraitPath + '1.png', height: 300},
        {src: portraitPath +'2.png', height: 450},
        {src: portraitPath + '3.png', height: 450},
        {src: portraitPath + '4.png', height: 450},
        {src: portraitPath + '5.png', height: 450}  
    ],
    landscapes: [
        {src: landscapePath + '1.png', height: 195},
        {src: landscapePath + '2.png', height: 194},
        {src: landscapePath + '3.png', height: 497},
        {src: landscapePath + '4.png', height: 450},
        {src: landscapePath + '5.png', height: 459},
        {src: landscapePath + '6.png', height: 537},
        {src: landscapePath + '7.png', height: 490}
    ],
    illustrations: [
        {src: illustrationPath + '1.png', height: 424},
        {src: illustrationPath + '3.png', height: 400},
        {src: illustrationPath + '2.png', height: 182},
        {src: illustrationPath + '4.png', height: 300},
        {src: illustrationPath + '5.png', height: 441}
    ],
};