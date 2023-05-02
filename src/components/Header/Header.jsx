import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' bg-slate-400 p-3 mx-auto'>
            <div className=' container '>
                <Link to={'#'}>Home</Link>
                <Link to={'services'}>Services</Link>
                <Link to={'#'}>Contact</Link>

            </div>
        </nav>
    );
};

export default Header;