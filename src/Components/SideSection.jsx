import { useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const categories = ["All", "T-Shirts", "Hoodies", "Jackets", "Pants"];
  const Data = {
    All: ["Item 1", "Item 2", "Item 3"],
    "T-Shirts": ["T-Shirt 1", "T-Shirt 2", "T-Shirt 3"],
    Hoodies: ["Hoodie 1", "Hoodie 2", "Hoodie 3"],
    Jackets: ["Jacket 1", "Jacket 2", "Jacket 3"],
    Pants: ["Pant 1", "Pant 2", "Pant 3"],
  };

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Category
      </Typography>
      <Box>
        <List disablePadding>
          {categories.map((item, index) => (
            <Box key={index}>
              <Box
                onClick={() => handleClick(index)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 1,
                  cursor: "pointer",
                  px: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Typography>
                <ListItemIcon>
                  {openIndex === index ? (
                    <ExpandMoreIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </ListItemIcon>
              </Box>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <Box sx={{ mx: 2 }}>
                  <List>
                    {Data[item].map((item, itemIndex) => (
                      <ListItemButton key={itemIndex}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Collapse>
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideSection;
