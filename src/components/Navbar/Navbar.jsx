import React from 'react';

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
        <nav>
            <div>
                <ul>
                    {
                        routes.map(routes => (
                            <li
                                key={id}
                                component={component}></li>
                        ))
                    }
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;