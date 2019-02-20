import React from "react";

const searchIcon = (props) =>
    (<svg width="16" height="16" viewBox="0 0 16 16" {...props}>
        <defs>
            <path id="a" d="M12.115 10.678l2.587 2.587a1.016 1.016 0 0 1-1.437 1.437l-2.587-2.587a6.125 6.125 0 1 1 1.437-1.437zm-4.99.572a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
            </mask>
            <use fill="#FFF" fillRule="nonzero" xlinkHref="#a" />
            <g fill="#7A869A" mask="url(#b)">
                <path d="M0 0h16v16H0z" />
            </g>
        </g>
    </svg>

    )

searchIcon.defaultProps = {

}

export default searchIcon;