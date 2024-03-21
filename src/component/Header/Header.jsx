import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-10">
            <h1 className="text-5xl font-semibold">Meals</h1>
                <ul className="text-xl font-normal space-x-6">
                    <NavLink className='pb-1 a' to='/'>Home</NavLink>
                    <NavLink className='pb-1 a' to='/foods'>Foods</NavLink>
                    <NavLink className='pb-1 a' to='/about'>About</NavLink>
                    <NavLink className='pb-1 a' to='/contract'>Contract</NavLink>
                </ul>
                <button className="text-2xl font-medium py-3 bg-sky-500 hover:bg-sky-700 transition-all duration-500 px-8 rounded-xl  text-white">Sign Up</button>
            </nav>
        </header>
    );
};

export default Header;