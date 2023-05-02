import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/userSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Navbar = () => {
  const username = useSelector((state) => state.firstName);
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(false);
  const navigate = useNavigate();
  const handleOpenUserMenu = () => {
    setAnchorElUser(true);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  };
  const pages = [
    { name: "Tools", icon: <BuildIcon sx={{ scale: "0.7" }} /> },
    { name: "Favorites", icon: <StarIcon sx={{ scale: "0.7" }} /> },
  ];
  const settings = ["Account", "Settings", "Logout"];

  return (
    <AppBar component="nav" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DynamicFormIcon sx={{ color: "white", mr: 1 }} />
          <Typography
            component="a"
            href="/home"
            variant="h6"
            sx={{ color: "white", textDecoration: "none", mr: 2 }}
          >
            DocumentD
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  gap: "5px",
                }}
              >
                <Typography>{page.name}</Typography>
                {page.icon}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: "auto", flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu}>
              {username !== undefined ? (
                <Avatar alt="Atmaja" src={`${username}.jpg`} />
              ) : (
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              )}
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={anchorElUser}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                if (setting === "Logout") {
                  return (
                    <MenuItem key={setting}>
                      <Typography
                        onClick={() => {
                          dispatch(logoutUser());
                          navigate("/");
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem key={setting}>
                      <Typography>{setting}</Typography>
                    </MenuItem>
                  );
                }
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
