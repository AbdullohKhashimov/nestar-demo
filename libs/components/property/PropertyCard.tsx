import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
  return (
    <Stack className="card-config">
      <Stack className="top">
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
            $430000
          </div>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Typography>Kingston Villas</Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  //     <Stack className="bottom">
  //       <Stack className="name-address">
  //         <Stack className="name">
  //           <Link
  //             href={{
  //               pathname: "/property/detail",
  //               query: { id: property?._id },
  //             }}
  //           >
  //             <Typography>{property.propertyTitle}</Typography>
  //           </Link>
  //         </Stack>
  //         <Stack className="address">
  //           <Typography>
  //             {property.propertyAddress}, {property.propertyLocation}
  //           </Typography>
  //         </Stack>
  //       </Stack>
  //       <Stack className="options">
  //         <Stack className="option">
  //           <img src="/img/icons/bed.svg" alt="" />{" "}
  //           <Typography>{property.propertyBeds} bed</Typography>
  //         </Stack>
  //         <Stack className="option">
  //           <img src="/img/icons/room.svg" alt="" />{" "}
  //           <Typography>{property.propertyRooms} room</Typography>
  //         </Stack>
  //         <Stack className="option">
  //           <img src="/img/icons/expand.svg" alt="" />{" "}
  //           <Typography>{property.propertySquare} m2</Typography>
  //         </Stack>
  //       </Stack>
  //       <Stack className="divider"></Stack>
  //       <Stack className="type-buttons">
  //         <Stack className="type">
  //           <Typography
  //             sx={{ fontWeight: 500, fontSize: "13px" }}
  //             className={property.propertyRent ? "" : "disabled-type"}
  //           >
  //             Rent
  //           </Typography>
  //           <Typography
  //             sx={{ fontWeight: 500, fontSize: "13px" }}
  //             className={property.propertyBarter ? "" : "disabled-type"}
  //           >
  //             Barter
  //           </Typography>
  //         </Stack>
  //         {!recentlyVisited && (
  //           <Stack className="buttons">
  //             <IconButton color={"default"}>
  //               <RemoveRedEyeIcon />
  //             </IconButton>
  //             <Typography className="view-cnt">
  //               {property?.propertyViews}
  //             </Typography>
  //             <IconButton
  //               color={"default"}
  //               onClick={() => likePropertyHandler(user, property?._id)}
  //             >
  //               {myFavorites ? (
  //                 <FavoriteIcon color="primary" />
  //               ) : property?.meLiked && property?.meLiked[0]?.myFavorite ? (
  //                 <FavoriteIcon color="primary" />
  //               ) : (
  //                 <FavoriteBorderIcon />
  //               )}
  //             </IconButton>
  //             <Typography className="view-cnt">
  //               {property?.propertyLikes}
  //             </Typography>
  //           </Stack>
  //         )}
  //       </Stack>
  //     </Stack>
  //   </Stack>
};

export default PropertyCard;
