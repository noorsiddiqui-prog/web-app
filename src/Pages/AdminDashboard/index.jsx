import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import UserList from "./../../components/UserList/index";
import MapComp from "./../../components/MapComp/index";
import { getPlacesData } from "../../api";
import Header from './../../components/Header/index';

const AdminDashboard = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({lat : 0, lng : 0});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  console.log("type is", type);
  const [rating, setRating] = useState("");

  useEffect(() => {
    const filterPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filterPlaces)
  }, [rating])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  console.log("coordinate", coordinates);

  useEffect(() => {
    setIsLoading(true);
    console.log("coordinates and bounds", coordinates, bounds);
    getPlacesData(type, bounds).then((data) => {
      console.log("data is here",data);
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);


  

  return (
    <div>
      <Box>
      <Header  hasSearchBar hasTypo
       />

        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <UserList
              // places={places}
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type = {type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>

          <Grid item xs={12} md={8} mt="10px">
            <MapComp
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              // places={places}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashboard;
