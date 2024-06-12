import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link href={{ pathname: "/property/detail", query: { id: "demo1" } }}>
          <img src={imagePath} alt="" />
        </Link>
        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography color={"#fff !important"}>TOP</Typography>
        </Box>
        <Box className="price-box">
          <Typography>$250000</Typography>
        </Box>
      </Stack>

      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{ pathname: "/property/detail", query: { id: "demo2" } }}
            >
              <Typography>Kingstone apartments</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>Busan, City Center 200-5</Typography>
          </Stack>
        </Stack>
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>3 bed</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />
            <Typography>7 rooms</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />
            <Typography>250 m2</Typography>
          </Stack>
        </Stack>
        <Stack className="divider"></Stack>
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: "500", fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className="buttons">
            <IconButton color="default">
              <RemoveRedEye />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <Favorite />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
