import React from 'react';

const addSvg = (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
        <defs>
            <path id="a" d="M9 7h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 1 1 0-2h4V3a1 1 0 1 1 2 0v4z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
            </mask>
            <use fill="#006CC7" xlinkHref="#a" />
            <g fill={props.color} mask="url(#b)">
                <path d="M0 0h16v16H0z" />
            </g>
        </g>
    </svg>
)

addSvg.defaultProps = {
    color: "#2466EA"
}

export default addSvg
