import React from 'react';

const Info = (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        width='16' height='16' viewBox='0 0 16 16' {...props}>
        <defs>
            <path id='a' d='M8 7.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm0-3A1.25 1.25 0 1 1 8 7a1.25 1.25 0 0 1 0-2.5zM8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 2A7 7 0 1 1 8 1a7 7 0 0 1 0 14z'
            />
        </defs>
        <g fill='none' fillRule='evenodd'>
            <mask id='b' fill='#fff'>
                <use xlinkHref='#a' />
            </mask>
            <use fill='#FFF' xlinkHref='#a' />
            <g fill='#b3bac5' mask='url(#b)'>
                <path d='M0 0h16v16H0z' />
            </g>
        </g>
    </svg>
)

export default Info;

