import React from "react";
import "../App.css";
import profile from "../images/profile.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const DetailContact = ({ contact }) => {
  const location = useLocation();
  //   console.log(location);
  const { name, email } = location.state.contact;

  return (
    <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
      <h1>Contact Detail</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="auto"
          image={profile}
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Link to="/" className="link-btn">
            <Button size="small">Back</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DetailContact;
