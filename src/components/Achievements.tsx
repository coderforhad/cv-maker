import { Grid } from "@mui/material";
import AutocompleteField from "./elements/AutocompleteField";
import InputField from "./elements/InputField";
import DateSelection from "./elements/DateSelection";

const Achievements = () => {
  return (
    <>
      <Grid sx={{display: "flex", gap:"10px"}}>
        <DateSelection label="Starts"/>
        <DateSelection label="Ends"/>
      </Grid>
      <InputField label="Some Key task" />
    </>
  );
};
export default Achievements;
