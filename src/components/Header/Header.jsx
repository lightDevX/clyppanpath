import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className=' mx-auto mx-20 py-6 bg-slate-500'>
                <ul>
                    <Link to='home'>Home</Link>
                </ul>

            </nav>

        </>
    );
};

export default Header;