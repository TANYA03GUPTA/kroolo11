import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  Badge,
} from "@mui/material";
import {
  Inbox,
  Chat,
  Task,
  Star,
  AccessTime,
  Layers,
  Flag,
  Description,
  People,
  VideoCall,
} from "@mui/icons-material";

export default function Sidebar() {
  const mainItems = [
    { text: "Inbox", icon: <Inbox /> },
    { text: "Direct Messages", icon: <Chat /> },
    { text: "My Tasks", icon: <Task /> },
    { text: "AI Agents", icon: <Star /> },
    { text: "Chat with Anything", icon: <Description /> },
    { text: "Track Time", icon: <AccessTime /> },
  ];

  const projectItems = [
    { text: "Projects", icon: <Layers />, badge: 1 },
    { text: "Demo Project", icon: <Layers />, nested: true },
  ];
  const otherItems = [
    { text: "Goals", icon: <Flag /> },
    { text: "Docs", icon: <Description /> },
    { text: "Channels", icon: <Inbox /> },
    { text: "Teams", icon: <People /> },
    { text: "Meetings", icon: <VideoCall />, badge: "Soon" },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #E0E0E0",
        },
      }}
    >
      <Box>
        <Box sx={{ height: "64px" }} />

        <List dense>
          {mainItems.map((item, index) => (
            <ListItem button key={index} sx={{ paddingY: "1px" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 0.5 }} />

        {/*  Other Items */}
        <List dense>
          {projectItems.map((item, index) => (
            <ListItem button key={index} sx={{ paddingY: "1px" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                  paddingLeft: item.nested ? "1.5rem" : "0",
                }}
              />
              {item.badge && (
                <Badge badgeContent={item.badge} color="default" />
              )}
            </ListItem>
          ))}

          {otherItems.map((item, index) => (
            <ListItem button key={index} sx={{ paddingY: "1px" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                }}
              />
              {item.badge && (
                <Box
                  sx={{
                    backgroundColor: "#FFCDD2",
                    color: "#B71C1C",
                    borderRadius: "4px",
                    padding: "0 8px",
                    fontSize: "0.75rem",
                    marginLeft: "8px",
                  }}
                >
                  {item.badge}
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          padding: 2,
          borderTop: "1px solid #E0E0E0",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary" fontSize="0.8rem">
          Starter Plan
        </Typography>
        <Typography
          variant="caption"
          color="primary"
          sx={{ cursor: "pointer" }}
        >
          Upgrade Plan
        </Typography>
      </Box>
    </Drawer>
  );
}
