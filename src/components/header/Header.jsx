import React from 'react';

// TODO: Add icon
function Header (props) {
    return (
        props.title === "ChainView"? <h1 style={{textAlign: 'left'}}>{props.title}</h1>: <h2 style={{textAlign: 'left', marginLeft: '4px'}}>{props.title}</h2>
    );
}

export default Header;