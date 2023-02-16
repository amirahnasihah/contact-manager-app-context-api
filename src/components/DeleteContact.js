import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../images/profile.png";
import { useContactsCrud } from "../context/contacts-crud-context";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

export default function DeleteContact() {
  const { deleteContact } = useContactsCrud();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  //   console.log(data);
  const { id, name, email } = data;

  const deleteContactHandler = (id) => {
    deleteContact(id);
    navigate("/");
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h3>Delete this {name} contact?</h3>

      <Box>
        <img style={{ width: "200px" }} alt="broken " src={profile} />
        <div>{name}</div>
        <div>{email}</div>
      </Box>

      <Box>
        <IconButton
          aria-label="delete"
          sx={{ color: "red" }}
          onClick={() => deleteContactHandler(id)}
        >
          <DeleteIcon />
          Yes
        </IconButton>
        <Link to="/" className="link-btn">
          <IconButton aria-label="delete" sx={{ color: "blue" }}>
            <CancelIcon />
            No
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
