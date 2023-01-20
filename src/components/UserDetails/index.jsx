import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from '@mui/material/Rating';


const UserDetails = ({place, selected, refProp}) => {

  // if(selected) refProp?.current?.scrollIntoView({behavior : "smooth", block: "start"})
  if(selected) {refProp?.current?.scrollIntoView({ block: "end", behavior: "smooth" });}

  return (
    <div>
      <Card elevation={6}>
        <CardMedia style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
        </CardContent>


        <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} sx={{ margin: '5px 5px 5px 0',}} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',}}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
            <LocalPhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      </Card>
    </div>
  )
}

export default UserDetails