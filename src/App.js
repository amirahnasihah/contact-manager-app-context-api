import { Box, Grid } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import FooterContact from "./components/FooterContact";
import AddContact from "./components/AddContact";
import ListContact from "./components/ListContact";

function App() {
  const contactList = [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "David",
      email: "david@example.com",
    },
  ];

  return (
    <Grid
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 1000,
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateRows: "repeat(1, 1fr)",
          gridTemplateAreas: `"header header header header"
  "main main main main"
  "footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
            bgcolor: "primary.main",
            textAlign: "center",
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            gridArea: "main",
            bgcolor: "secondary.main",
          }}
        >
          <AddContact />
          <ListContact contactList={contactList} />
        </Box>
        {/* <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}></Box> */}
        <Box
          sx={{
            gridArea: "footer",
            bgcolor: "warning.dark",
            textAlign: "center",
          }}
        >
          <FooterContact />
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
