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
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/contacts-crud-context";

const CardContact = ({ contact }) => {
  const { id, name, email } = contact;
  const { deleteContact } = useContactsCrud();

  const deleteContactHandler = (id) => {
    deleteContact(id);
  };

  return (
    <Grid sx={{ p: 1 }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 90 }}
          title="Image Title"
          image={user}
          alt="Contact Image"
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

        <CardActions
          disableSpacing
          // sx={{ justifyContent: "flex-end", width: "100%" }}
        >
          <IconButton
            aria-label="DELETE"
            sx={{ color: "red" }}
            onClick={() => deleteContactHandler(id)}
          >
            <DeleteIcon />
          </IconButton>
          <Link
            to={{ pathname: `/edit` }}
            state={{ contact: contact }}
            className="link-btn"
          >
            <IconButton aria-label="EDIT" sx={{ color: "blue" }}>
              <EditIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardContact;
