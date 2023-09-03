import { Grid } from "@mui/material";
import AutocompleteField from "./elements/AutocompleteField";
import InputField from "./elements/InputField";
import DateSelection from "./elements/DateSelection";

const Experience = () => {
  return (
    <>
      <InputField label={"Company Name"} />
      <Grid sx={{display: "flex", gap:"10px"}}>
        <DateSelection label="Starts"/>
        <DateSelection label="Ends"/>
      </Grid>
      <Grid sx={{ margin: "10px 0px" }}>
        <AutocompleteField label="Key Responsibilites" />
      </Grid>
    </>
  );
};
export default Experience;
