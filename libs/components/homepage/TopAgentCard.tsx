import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/profile/girl.svg")`,
        }}
      ></Box>
      <Typography className="agent-name">
        <strong>Alice</strong>
      </Typography>
      <Typography className="agent-details">Agent Details</Typography>
    </Stack>
  );
};

export default TopAgentCard;
