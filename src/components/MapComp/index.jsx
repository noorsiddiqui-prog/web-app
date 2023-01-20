import React, { useState } from "react";
import { Paper, Typography, Box, useMediaQuery } from "@mui/material";
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";

const MapComp = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  // const coordinates = {lat :25.395969, lng : 68.357773};

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC4NUH6R7uOutj3H5f2NYbzGX1um_4OlQs' }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            console.log(e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, i) => (
            <Box
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                "&:hover": { zIndex: 2 },
              }}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnIcon color="red" fontSize="large" />
              ) : (
                <Paper
                  elevation={3}
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100px",
                  }}
                >
                  <Typography variant="subtitle2" gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img
                    sx={{ cursor: "pointer" }}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </Box>
          ))}
          {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapComp;
