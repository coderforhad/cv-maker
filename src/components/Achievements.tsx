import { Grid } from "@mui/material";
import InputField from "./elements/InputField";
import DateSelection from "./elements/DateSelection";

const Achievements = () => {
  return (
    <>
      <Grid sx={{display: "flex", gap:"10px", justifyContent:"space-between"}}>
        <DateSelection 
          label="Starts" 
          dateName= "startDateAchievementOne"
        />
        <DateSelection 
          label="Ends"
          dateName= "endDateAchievementOne"
        />
      </Grid>
      <InputField 
        label="Some Key task"
        name="keyAchievementOne"
       />
      <Grid sx={{display: "flex", gap:"10px", justifyContent:"space-between"}}>
        <DateSelection 
          label="Starts" 
          dateName= "startDateAchievementTwo"
        />
        <DateSelection 
          label="Ends"
          dateName= "endDateAchievementTwo"
        />
      </Grid>
      <InputField 
        label="Some Key task"
        name="keyAchievementTwo"
       />
    </>
  );
};
export default Achievements;
