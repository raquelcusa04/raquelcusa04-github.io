import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bottom-nav">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        ABOUT
        </NavLink>

        <NavLink to="/work" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        WORK
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        CONTACT
        </NavLink>
    </nav>
);
}