import React from "react";

const dropdownIcon = (props) =>
    (<svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
            <path id="a" d="M11.293 14.993L6.7 10.4A.99.99 0 0 1 8.1 9l3.9 3.9L15.9 9a.99.99 0 0 1 1.4 1.4l-4.593 4.593a1 1 0 0 1-1.414 0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
            </mask>
            <use fill="#FFF" xlinkHref="#a" />
            <g fill={props.color} mask="url(#b)">
                <path d="M0 0h24v24H0z" />
            </g>
        </g>
    </svg>)

dropdownIcon.defaultProps = {
    color: "#091E42"
}

export default dropdownIcon;