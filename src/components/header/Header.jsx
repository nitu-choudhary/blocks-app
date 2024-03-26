import React from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Add icon
function Header(props) {
    const navigate = useNavigate();

    function handleTitleClick() {
        // Redirect to homepage
        navigate('/');
    }

    return (
        props.title === 'ChainView' ? (
            <h1 style={{ textAlign: 'left', cursor: 'pointer' }} onClick={handleTitleClick}>{props.title}</h1>
        ) : (
            <h2 style={{ textAlign: 'left', marginLeft: '4px' }}>{props.title}</h2>
        )
    );
}

export default Header;