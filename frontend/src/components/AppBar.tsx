import { Toolbar, Typography, AppBar as Bar } from "@mui/material";
import React from "react";

const AppBar = () => {
  return (
    <Bar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <h1 style={{ margin: 0 }}>Store</h1>
        </Typography>
      </Toolbar>
    </Bar>
  );
};

export default AppBar;
