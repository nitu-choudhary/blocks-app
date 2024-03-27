/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function Header({ title, icon}) {
    const navigate = useNavigate();

    function handleTitleClick() {
        // Redirect to homepage
        navigate('/');
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            { icon && <div style={{ marginRight: '8px', fontSize: 40}}>{icon}</div> }
            {
            title === 'ChainView' ?
            <h1 style={{ cursor: 'pointer' }} onClick={handleTitleClick}>{title}</h1>
            : <h2 style={{ margin: 0 }}>{title}</h2>
            }
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
};


export default Header