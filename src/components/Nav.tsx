import {
  House,
  Palette,
  CircleUserRound,
  MessageCircle,
  BriefcaseBusiness,
} from 'lucide-react';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';

const icons = [
  { id: 'contact', path: '/home/contact', icon: <MessageCircle /> },
  { id: 'projects', path: '/home/projects', icon: <BriefcaseBusiness /> },
  { id: 'home', path: '/', icon: <House /> },
  { id: 'art', path: '/home/gallery', icon: <Palette /> },
  { id: 'about', path: '/home/about', icon: <CircleUserRound /> },
];


export const Nav = () => {


  return (
    <nav >
      <ul>
        {icons.map(({ id, path, icon }) => {

          return (
            <motion.li
              key={id}
              initial={{ y: 0 }}
              animate={{
                transition: { ease: easeInOut, duration: 0.4 },
              }}
              onClick={() => { }}
            >
              <NavLink to={path}>{icon}</NavLink>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

