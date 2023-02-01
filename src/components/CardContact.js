import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const CardContact = ({ contact, deleteHandler }) => {
  const { id, name, email } = contact;

  return (
    <Grid sx={{ p: 1 }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 90 }}
          title="Image Title"
          image={user}
          alt="Random Image from unsplash"
        />

        <Link
          to={{ pathname: `/contact/${id}` }}
          state={{ contact: contact }}
          className="link-btn"
        >
          <CardContent>
            <Tooltip title={name + `'s detail`}>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {email}
                </Typography>
              </Box>
            </Tooltip>
          </CardContent>
        </Link>

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            sx={{ color: "red" }}
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
