import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Autocomplete } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import SignUp from "./../SignUp/Signup";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({
  hasSearchBar,
  hasLogoutBtn,
  capturePhoto,
  isLoggedIn,
  setisLoggedIn,
  hasLoginBtn,
  hasTypo
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    setisLoggedIn(false);
    localStorage.removeItem("user");

    navigate("/login");
  };

  const handleLogIn = () => {
    console.log("logIn");

    navigate("/login");
  };

  const handleSignup = () => {
    console.log("signup");

    navigate("/signup");
  };

  useEffect(() => {
    alert("Kindly zoomout the map to see more places and their cards ")
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {hasTypo && 
          <Typography sx={{fontSize: "24px", fontWeight: "600", }}>
          Restaurants, Hotels & Attractions
        </Typography>
          }

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {hasSearchBar && (
              
              <Box mr="70px" sx={{display: "flex"}}>
                <Box mr="20px">
                  <Button onClick={() => navigate('/alluser')} variant="contained" color="secondary">
                    All Users
                  </Button>
                </Box>
                <Box>
                  <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                </Box>
              </Box>
            )}

            <Box>
              {hasLoginBtn && (
                <Button
                  onClick={handleLogIn}
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
              )}
            </Box>

            {hasLogoutBtn && (
              <Box>
                {!isLoggedIn ? (
                  <Box>
                    <Button
                      onClick={handleSignup}
                      variant="contained"
                      color="secondary"
                    >
                      SignUp
                    </Button>
                  </Box>
                ) : (
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    color="secondary"
                  >
                    Logout
                  </Button>
                )}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
