import React from 'react';

const Calender = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
        <defs>
            <path id="a" d="M5 7v12h14V7H5zm13-2h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 1 1 2 0v1h8V4a1 1 0 0 1 2 0v1zm1 4H5v2h14V9zm-5 5v3h3v-3h-3z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
            </mask>
            <use fill="#7A869A" xlinkHref="#a" />
            <g fill="#091E42" mask="url(#b)">
                <path d="M0 0h24v24H0z" />
            </g>
        </g>
    </svg>
)

export default Calender;

