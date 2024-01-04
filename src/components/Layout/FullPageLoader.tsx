import {Box, CircularProgress} from "@mui/material";
import React from "react";

export default function FullPageLoader() {
  return(
      <Box sx={{alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw"}}>
        <CircularProgress/>
        <Box component="span" sx={{justifyContent: "center", position: "fixed", top: "63%"}}>Loading... please wait</Box>
      </Box>
    )
}
