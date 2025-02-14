import {
    House,
    Palette,
    CircleUserRound,
    MessageCircle,
    BriefcaseBusiness,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';

const icons = [
    { id: 'contact', path: '/home/contact', icon: <MessageCircle /> },
    { id: 'projects', path: '/home/projects', icon: <BriefcaseBusiness /> },
    { id: 'home', path: '/', icon: <House /> },
    { id: 'art', path: '/home/gallery', icon: <Palette /> },
    { id: 'about', path: '/home/about', icon: <CircleUserRound /> },
];

export const Nav = () => {
    const currentPath = useLocation().pathname;
    const navRef = useRef<HTMLUListElement>(null);
    const [icon1_pos, setIcon1_pos] = useState({});
    const [icon2_pos, setIcon2_pos] = useState({});
    const [icon3_pos, setIcon3_pos] = useState({});
    const [icon4_pos, setIcon4_pos] = useState({});
    const [icon5_pos, setIcon5_pos] = useState({});
    const childRef = useRef<HTMLLIElement | null>(null)

    useEffect(() => {
        const children = navRef.current?.children

        for (const el of children!) {
            // Adjust position
            (el as HTMLLIElement).style.left = '-100px'
        }

        // Positions are defined in pixels
        // min : 0
        //26.669921875 Left position
        //77.333984375  Center-left position
        //127.998046875 Center position
        //178.662109375 Center-right position
        //229.326171875 Right Position
        // max: 280

        // NavSize
        /* {x: 453, y: 66, width: 280, height: 28, top: 66, …} */
      }, []);

    return (
        <nav>
            <ul ref={navRef}>
                {icons.map(({ id, path, icon }) => {
                    return (
                        <motion.li
                            key={id}
                            initial={{ y: 0 }}
                            animate={{
                                transition: { ease: easeInOut, duration: 0.4 },
                            }}
                            onClick={() => {}}
                        >
                            <NavLink to={path}>{icon}</NavLink>
                        </motion.li>
                    );
                })}
            </ul>
        </nav>
    );
};
