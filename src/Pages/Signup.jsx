import { Box, Input, Button, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { FireApi } from "../Utils/useFirApi";

const Signup = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(formData, "formData");
    try {
      const data = await FireApi("signup", "POST", formData);
      console.log(data, "check data ");
      if (data.status === 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        bgcolor: "#D9EDBF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Signup</Typography>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <Input
            name="username"
            placeholder="name"
            startAdornment={
              <EmailOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
            }
          />
        </div>
        <div className="form-input">
          <Input
            name="email"
            placeholder="Email"
            startAdornment={
              <EmailOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
            }
          />
        </div>
        <div className="form-input">
          <Input
            name="password"
            placeholder="Password"
            startAdornment={
              <PasswordOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
            }
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Signup;
