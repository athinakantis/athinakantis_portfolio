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
  const navRef = useRef<HTMLUListElement>(null)


  useEffect(() => {
    const navSize = navRef.current!.getBoundingClientRect()
    const children = (navRef.current!.children) as HTMLCollectionOf<HTMLLIElement>
    for (const el of children) {
      // Adjust position

    }
    // NavSize
    /* {x: 453, y: 66, width: 280, height: 28, top: 66, …} */
  }, [])

  return (
    <nav >
      <ul ref={navRef}>
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

