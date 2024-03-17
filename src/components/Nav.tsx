import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuItemClick = () => {
        setShowMenu(false); // Close the menu when a menu item is clicked
    };

    return (    
        <div className="relative">
            <div className="h-screen w-64 flex flex-col border-r border-gray-500 pl-10 pt-10 md:block hidden">
            <div className="text-white text-xl font-bold pb-6">Sulfur</div>
                <div className="flex flex-col">
                    <Link to="/" className="text-white hover:text-purple-500 py-2">About</Link>
                    <Link to="/projects" className="text-white hover:text-purple-500 py-2">Projects</Link>
                    <Link to="/technologies" className="text-white hover:text-purple-500 py-2">Technologies</Link>
                    <Link to="/more" className="text-white hover:text-purple-500 py-2">More</Link>
                </div>
            </div>
            <button className="md:hidden block absolute top-0 left-0 p-4" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>}
            </button>
            {showMenu && (
                <div className="md:hidden fixed top-10 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-start items-start">
                    <div className="bg-black rounded-b-lg p-4 w-full">
                        <Link to="/" className="text-white hover:text-purple-500 py-2 block" onClick={handleMenuItemClick}>About</Link>
                        <Link to="/projects" className="text-white hover:text-purple-500 py-2 block" onClick={handleMenuItemClick}>Projects</Link>
                        <Link to="/technologies" className="text-white hover:text-purple-500 py-2 block" onClick={handleMenuItemClick}>Technologies</Link>
                        <Link to="/more" className="text-white hover:text-purple-500 py-2 block" onClick={handleMenuItemClick}>More</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
