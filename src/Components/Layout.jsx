import React from "react";
import { Box } from "@mui/material";
import TopNavBar from "./TopNavBar";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";

function Layout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <TopNavBar />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <SideBar />
        <Box
          sx={{
            flexGrow: 1,
            padding: "20px",
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
