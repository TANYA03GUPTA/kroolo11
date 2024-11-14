import React from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import {
  Add,
  AccountCircle,
  ImportExport,
  Search,
  FilterList,
  CalendarToday,
  MoreHoriz,
} from "@mui/icons-material";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mb={1}
        sx={{ fontSize: "0.8rem", padding: "1px" }}
      >
        {/* Project Heading */}
        <Typography variant="h5" fontWeight="bold" sx={{ fontWeight: "light" }}>
          Projects
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          sx={{ fontSize: "0.6rem", padding: "0" }}
        >
          {/* Left side */}
          <Typography variant="body1" sx={{ flex: 1 }}>
            Manage all projects within this Workspace.
          </Typography>

          {/* Right side  */}
          <Box>
            <Button
              variant="outlined"
              startIcon={<ImportExport />}
              sx={{
                marginRight: "10px",
                fontSize: "0.72rem",
                padding: "6px 10px",
              }}
            >
              Import Project
            </Button>
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                fontSize: "0.72rem",
                padding: "6px 10px",
                backgroundColor: "#8F00FF",
                color: "#fff",
              }}
            >
              Create Project
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography variant="body2" fontWeight="light">
          List
        </Typography>
        <Box display="flex">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search project"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ marginRight: "10px", width: "175px" }}
          />
          <Button variant="outlined" startIcon={<FilterList />}>
            Filters
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ fontSize: "0.88rem", padding: "6px" }}>
              <TableCell align="left" sx={{ width: "39%" }}>
                Project name
              </TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Start date</TableCell>
              <TableCell>End date</TableCell>
              <TableCell>Task Progress</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* data  */}
            <TableRow sx={{ padding: "6px", fontSize: "0.7rem" }}>
              <TableCell sx={{ fontSize: "0.75rem" }}>
                <Box display="flex" alignItems="center">
                  <ImportExport sx={{ color: "#FF6B6B", marginRight: "8px" }} />
                  Demo Project
                </Box>
              </TableCell>
              <TableCell>
                <Chip label="On Track" color="success" size="small" />
              </TableCell>
              <TableCell>
                <Chip label="Medium" color="warning" size="small" />
              </TableCell>
              <TableCell>
                <CalendarToday fontSize="small" sx={{ marginRight: "5px" }} />
              </TableCell>
              <TableCell>
                <CalendarToday fontSize="small" sx={{ marginRight: "5px" }} />
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "80px",
                      height: "8px",
                      borderRadius: "4px",
                      backgroundColor: "#E0E0E0",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "0%",
                        height: "100%",
                        backgroundColor: "#3f51b5",
                        position: "absolute",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: "8px", fontSize: "0.7rem" }}
                  >
                    0%
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton color="inherit">
                  <MoreHoriz />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="flex-start">
        <Button
          variant="contained"
          startIcon={<Add />}
          color="white"
          sx={{
            fontSize: "0.7rem",
            padding: "6px 12px",
            textTransform: "none",
          }}
        >
          Add Project
        </Button>
      </Box>
    </>
  );
}
