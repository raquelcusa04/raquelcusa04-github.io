
import { Link, useLocation } from 'react-router-dom';

export default function TopHeader() {
const location = useLocation();


if (location.pathname === '/') {
    return null;
}

return (
    <header className="bottom-home">
    <img src="/bg-back-button.svg" alt="Background home" className="bg-home-svg"></img>
    
    <Link to="/" className="back-button">
    <img src="/back-button.svg" alt="Home" className="home-svg"></img></Link>
    </header>
);
}