import React from 'react';

const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" {...props}>
        <defs>
            <path id="a1" d="M12.718 3.282a.964.964 0 0 0-1.363 0L8 6.637 4.645 3.282a.964.964 0 1 0-1.363 1.363L6.637 8l-3.355 3.355a.964.964 0 1 0 1.363 1.363L8 9.363l3.355 3.355a.964.964 0 1 0 1.363-1.363L9.363 8l3.355-3.355a.964.964 0 0 0 0-1.363z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b1" fill="#fff">
                <use xlinkHref="#a1" />
            </mask>
            <use fill="#FFF" fillRule="nonzero" xlinkHref="#a1" />
            <g fill="#b3bac5" mask="url(#b1)">
                <path d="M0 0h16v16H0z" />
            </g>
        </g>
    </svg>
)

export default CloseIcon;