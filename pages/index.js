import * as React from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import SelectStyle from "../src/components/Select";
import RadioButton from "../src/components/RadioButton";
import CheckBox from "../src/components/CheckBox";
import BasicModal from "../src/components/Modal.jsx";


const Home = () => {
  return (
      <Box sx={{ maxWidth: 800 }}>
        <Paper
          elevation={1}
          sx={{  p: "32px", display: "flex", flexDirection: "column", gap: 3}}
        >
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>
          <SelectStyle />
          <RadioButton />
          <CheckBox />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <BasicModal />
          </Box>
        </Paper>
     
  </Box>
  );
};

export default Home;
