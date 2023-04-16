import React from 'react';

const Link = ({ routes }) => {
    return (
        <li className='mr-5'>
            <a href={routes.path}>{routes.component}</a>
        </li>
    );
};

export default Link;