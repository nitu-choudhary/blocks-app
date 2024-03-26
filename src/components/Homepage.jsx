import React from "react";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";

// Define your styled components here
const StyledDiv = styled('div')(({ theme }) => ({
    // styles for your root div
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    // styles for your h1 Typography
    marginBottom: '20px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    // styles for your Button
    marginTop: '20px',
}));

// Homepage component with styled components
const Homepage = () => {
    return (
      <StyledDiv>
        <StyledTypography variant="h1">
          Welcome to Chain View
        </StyledTypography>
        <StyledButton variant="contained" color="primary" onClick={() => Navigate('/transactions')}>
          Get Started
        </StyledButton>
      </StyledDiv>
    );
  };
  
  export default Homepage;