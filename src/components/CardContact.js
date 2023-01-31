import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import user from "../images/user.png";

const CardContact = ({ contact, deleteHandler }) => {
  const { id, name, email } = contact;

  return (
    <Grid sx={{ p: 1 }}>
      <Card sx={{ maxWidth: "auto", display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 90 }}
          title="Image Title"
          image={user}
          alt="Random Image from unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => deleteHandler(id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardContact;