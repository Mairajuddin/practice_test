import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";

const CardComp = ({ data, postdata }) => {
  console.log(postdata, "XXXXXXXXXXXXXXXXXXXXXX");
  // console.log(data, "data agya");
  // const [isHover, setIsHover] = useState(false);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };
  const imageSrc = "./Vector.svg";
  const imageCount = 5;

  const imageArray = Array.from({ length: imageCount });
  return postdata.map((item, index) => (
    <Card
      onMouseEnter={() => handleHover(item.id)}
      onMouseLeave={handleLeave}
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      key={index}
      sx={{
        height: "200px",
        width: "220px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #B6B6B6",
        borderRadius: "20px",
        cursor: "pointer",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        mx: 1,
      }}
    >
      <Box p={1} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Typography variant="paragraph">{item.id}</Typography>
        <img
          src="vite.svg"
          alt="carousal"
          style={{
            height: "100px",
            width: "140px",
          }}
        />
      </Box>
    </Card>
  ));
};

export default CardComp;
