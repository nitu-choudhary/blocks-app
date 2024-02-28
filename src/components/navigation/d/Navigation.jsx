import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ChainView
                </Typography>
                <div>
                    Nav Bar
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation