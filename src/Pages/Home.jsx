import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import SideSection from "../Components/SideSection";
import CardsRightSection from "../Components/CardsRightSection";
import Login from "./Login";
import Signup from "./Signup";
import { HitApi } from "../Utils/useRequest";
const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <HeroSection />
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{ width: { xs: "40%", md: "20%" }, border: "1px solid red" }}>
          <SideSection />
        </Box>
        <Box
          sx={{
            width: { xs: "60%", md: "calc(100% - 20%)" },
            border: "1px solid blue",
          }}
        >
          <CardsRightSection />
        </Box>
      </Box>
      <Login />
      <Signup />
    </Box>
  );
};

export default Home;
