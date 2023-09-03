import { Grid } from "@mui/material";
import AutocompleteField from "./elements/AutocompleteField";

const TopSkills = () => {
  return (
    <>
      <Grid>
        <AutocompleteField label="Hard Skills" />
      </Grid>
      <Grid sx={{margin:"10px 0px"}}>
        <AutocompleteField label="Soft Skills" />
      </Grid>
    </>
  );
};
export default TopSkills;
