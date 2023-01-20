import React, { createRef, useState, useEffect } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  MenuList,
} from "@mui/material";
import UserDetails from "../UserDetails/index.jsx";

const UserList = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {


  console.log(childClicked);
  console.log({ childClicked });

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  // const places = [
  //   {name : 'Cool Place'},
  //   {name : 'Best Bear'},
  //   {name: 'Best Steak'},
  //   {name : 'Cool Place'},
  //   {name : 'Best Bear'},
  //   {name: 'Best Steak'},
  //   {name : 'Cool Place'},
  //   {name : 'Best Bear'},
  //   {name: 'Best Steak'},
  // ]

  return (
    <div>
      <Box
        sx={{
          padding: "25px",
        }}
      >
        {/* <Typography sx={{fontSize: "24px", fontWeight: "600", mb: "10px"}}>
          Restaurants, Hotels & Attractions
        </Typography> */}

        {isLoading ? (
          <Box
            sx={{
              height: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size="5rem" />
          </Box>
        ) : (
          <>
            

            <FormControl
              sx={{
                margin: "1px",
                minWidth: "120px",
                marginBottom: "30px",
              }}
            >
              <InputLabel>Type</InputLabel>
              <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
            </FormControl>


            <FormControl
              sx={{
                margin: "1px",
                minWidth: "120px",
                marginBottom: "30px",
              }}
            >
              <InputLabel>Rating</InputLabel>
              <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
            </FormControl>

            <Grid
              container
              spacing={3}
              sx={{
                height: "75vh",
                overflow: "auto",
              }}
            >
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  {/* <Grid  item key={i} xs={12}> */}
                  <UserDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default UserList;
