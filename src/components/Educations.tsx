import { Box, Grid } from "@mui/material";
import InputField from "./elements/InputField";
import BasicDatePicker from "./elements/DateSelection";

const Educations = () => {
  return (
    <Box>
      <InputField 
        label="Institution" 
        name="university"
      />
      <Grid sx={{display:"flex", gap:"20px"}}>
        <Grid sx={{ width: "60%" }}>
          <InputField 
            label="Degree" 
            name="degree"
          />
        </Grid>
        <Grid>
          <BasicDatePicker 
            label="Completed Date" 
            dateName="universityEnd"
          />
        </Grid>
      </Grid>
      <InputField 
        label="Institution" 
        name="college"
      />
      <Grid sx={{display:"flex", gap:"20px"}}>
        <Grid sx={{ width: "60%" }}>
          <InputField 
            label="Degree" 
            name="collegeSubject"
          />
        </Grid>
        <Grid>
          <BasicDatePicker 
            label="Completed Date" 
            dateName="collegeEnd"
          />
        </Grid>
      </Grid>
      <InputField 
        label="Institution" 
        name="school"
      />
      <Grid sx={{display:"flex", gap:"20px"}}>
        <Grid sx={{ width: "60%" }}>
          <InputField 
            label="Degree" 
            name="schoolSubject"
          />
        </Grid>
        <Grid>
          <BasicDatePicker 
            label="Completed Date" 
            dateName="schoolEnd"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Educations;
