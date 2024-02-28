import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import '../../../App.css';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar className="nav-bar">
                <Typography variant="h3" component="div" className="nav-bar-items">
                    ChainView
                </Typography>
                <div className="nav-bar-links">
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