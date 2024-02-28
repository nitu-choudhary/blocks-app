import React from 'react';

// TODO: Add icon
function Header (props) {
    return (
        props.title === "ChainView"? <h1>{props.title}</h1>: <h2>{props.title}</h2>
    );
}

export default Header;