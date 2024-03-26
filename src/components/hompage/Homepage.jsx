/* eslint-disable no-empty-pattern */
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Styled components for Homepage
const StyledDiv = styled('div')(({}) => ({
    // styles for div
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

    // partial grid background
    backgroundImage: `
    radial-gradient(circle at center, rgba(0,0,0,0.2) 25%, transparent 100%),
    linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent)
    `,
     backgroundSize: '25px 25px',
}));

const StyledTypography = styled(Typography)(({}) => ({
    // styles for h1 Typography
    marginBottom: '20px',
}));

const StyledButton = styled(Button)(({}) => ({
    // styles for Button
    marginTop: '20px',
}));

// Homepage component with styled components
const Homepage = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/transactions');
    };

    return (
      <StyledDiv>
        <StyledTypography variant="h1">
          Welcome to Chain View
        </StyledTypography>
        <h2>See the Chain, Seize the Future</h2>
        <StyledButton variant="contained" color="primary" onClick={handleOnClick}>
          Get Started
        </StyledButton>
      </StyledDiv>
    );
  };
  
  export default Homepage;