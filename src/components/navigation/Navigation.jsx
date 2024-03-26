import { AppBar, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import Header from "../header/Header";
import './Navigation.css';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar className="nav-bar">
                <Header title="ChainView"/>
                <div className="nav-bar-links">
                    <Link to="/" className="nav-bar-item">
                        Home
                    </Link>
                    <Link to="/transactions" className="nav-bar-item">
                        Transactions
                    </Link>
                    <Link to="/transfer" className="nav-bar-item">
                        Transfer
                    </Link>
                    <Link to="/blocks" className="nav-bar-item">
                        Blocks
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation