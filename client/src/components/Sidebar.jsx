import { Box } from "@mui/material";
import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LandingPage, ExpertsList, Profile, Connect } from "./";

const Sidebar = () => {
  return (
    <Box
      bgcolor="red"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      {/* <BrowserRouter>
        <Box sx={{ backgroundColor: "#eee" }}>
           <Routes>
            <Route path="/" exact element={<LandingPage />}></Route>
            <Route path="/experts" exact element={<ExpertsList />}></Route>
            <Route path="/profile/:id" exact element={<Profile />}></Route>
            <Route path="/connect/:id" exact element={<Connect />}></Route>
          </Routes> 
        </Box>
      </BrowserRouter> */}
      Sidebar
    </Box>
  );
};

export default Sidebar;
