import React from 'react';

function Header (props) {
    return (
        <header>
            {props.title === "ChainView"? <h1>{props.title}</h1>: <h2>{props.title}</h2>}
        </header>
    );
}

export default Header;