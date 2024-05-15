import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardComp from "../Utils/CardComp";
import { HitApi } from "../Utils/useRequest";

const CardsRightSection = () => {
  const [postdata, setPostdata] = useState([]);
  const getPost = async () => {
    try {
      const data = await HitApi("posts", "GET");
      setPostdata(data);
      console.log(data, "HHHHHHHHHHH");
      if (data.status === 200) {
        console.log(data, "data ka respone hy ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  console.log(postdata, "postdata");
  const data = [1, 2, 3, 4, 5];
  return (
    <Box
      sx={{
        display: "flex",
        m: 1,
        justifyContent: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
      overflowY="scroll"
    >
      <CardComp data={data} postdata={postdata} />
    </Box>
  );
};

export default CardsRightSection;
