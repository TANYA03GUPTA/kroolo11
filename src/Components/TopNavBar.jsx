import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { AccountCircle, Work, ExpandMore } from "@mui/icons-material";

export default function TopNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ minHeight: 56 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{
              fontSize: "0.875rem",
              color: "#424242",
            }}
          >
            Workspace
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Work sx={{ color: "#616161" }} />
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.75rem",
                color: "#616161",
              }}
            >
              xyz
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              marginRight: 0,
            }}
          >
            User Name
          </Typography>
          <IconButton onClick={handleMenuClick} sx={{ marginRight: 1 }}>
            <Button sx={{ textTransform: "none", fontSize: "0.875rem" }}>
              <ExpandMore sx={{ marginLeft: 0, color: "black" }} />
            </Button>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 2 }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
          </Menu>

          <Switch sx={{ marginRight: 2 }} />
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
