import {
    House,
    Palette,
    CircleUserRound,
    MessageCircle,
    BriefcaseBusiness,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const icons = [
    { id: 'contact', path: '/home/contact', icon: <MessageCircle /> },
    { id: 'projects', path: '/home/projects', icon: <BriefcaseBusiness /> },
    { id: 'home', path: '/', icon: <House /> },
    { id: 'art', path: '/home/gallery', icon: <Palette /> },
    { id: 'about', path: '/home/about', icon: <CircleUserRound /> },
];

export const Nav = () => {

    return (
        <nav>
            <ul>
                {icons.map(({ id, path, icon }) => (
                    <li key={id}>
                        <NavLink to={path}>{icon}</NavLink>
                    </li>
                )
                )}
            </ul>
        </nav>
    );
};
