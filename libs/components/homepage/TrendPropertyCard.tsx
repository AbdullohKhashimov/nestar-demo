import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className={"trend-card-box"}>
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/house.webp")`,
        }}
      >
        <div
          style={{
            position: "absolute",
            padding: "8px 12px",
            background: "#fff",
            margin: "140px 20px",
            borderRadius: "6px",
            fontWeight: "600",
          }}
        >
          $10
        </div>
      </Box>
      <Box className={"info"}>
        <strong className={"title"}>Run Will Buildings</strong>
        <p className={"desc"}>Seoul Gangnam Apartments</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m²</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
