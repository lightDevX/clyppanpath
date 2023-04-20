import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false);

    // const routes = [
    //     {
    //         "id": 1,
    //         "component": "Home",
    //         "path": "/home"
    //     },
    //     {
    //         "id": 2,
    //         "component": "Services",
    //         "path": "/services"
    //     },
    //     {
    //         "id": 3,
    //         "component": "Price",
    //         "path": "/price"
    //     },
    //     {
    //         "id": 4,
    //         "component": "Contact",
    //         "path": "/contact"
    //     },
    // ]
    return (
        <nav className=' mx-auto bg-slate-400'>
            <div onClick={() => setOpen(!open)} className=' md:hidden'>
                <span>
                    {
                        open == true ?
                            <XMarkIcon className="h-6 w-6 text-red-600 " />
                            : <Bars3Icon className="h-6 w-6 text-red-600 " />
                    }
                </span>
            </div>
            <div className=' mr-8 ml-8 p-4'>
                <ul className={`md:flex justify-between items-center absolute md:static bg-slate-400 ${open ? 'top-6' : '-top-36'}`}>
                    <a href="#"><img src="#" alt="" />Clyppanpath</a>
                    <div className='grid lg:flex'>
                        {/* {
                            routes.map(routes => (
                                <Link key={routes.id}
                                    routes={routes}
                                ></Link>
                            ))
                        } */}
                        <Link />
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;