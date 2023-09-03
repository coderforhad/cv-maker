import { Box, Grid } from "@mui/material";
import InputField from "./elements/InputField";
import BasicDatePicker from "./elements/DateSelection";

const Educations = () => {
  return (
    <Box>
      <InputField label="Institution" />
      <Grid sx={{display:"flex", gap:"20px"}}>
        <Grid sx={{ width: "60%" }}>
          <InputField label="Degree" />
        </Grid>
        <Grid>
          <BasicDatePicker label="Completed Date"/>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Educations;
