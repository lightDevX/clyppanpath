import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {

    const routes = [
        {
            "id": 1,
            "component": "Home",
            "path": "/Home"
        },
        {
            "id": 2,
            "component": "Services",
            "path": "/Services"
        },
        {
            "id": 3,
            "component": "price",
            "path": "/price"
        },
        {
            "id": 4,
            "component": "contact",
            "path": "/contact"
        },
    ]
    return (
        <nav className=' mx-auto bg-slate-400'>
            <div className=' mr-8 ml-8 p-4'>
                <ul className='md:flex justify-between items-center'>
                    <a href="#"><img src="#" alt="" />Clyppanpath</a>
                    <div className='grid lg:flex'>
                        {
                            routes.map(routes => (
                                <Link key={routes.id}
                                    routes={routes}
                                ></Link>
                            ))
                        }
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;