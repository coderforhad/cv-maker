import { Grid } from "@mui/material";
import AutocompleteField from "./elements/AutocompleteField";
import InputField from "./elements/InputField";
import DateSelection from "./elements/DateSelection";

const Experience = () => {
  return (
    <>
      <InputField 
        label= "Company Name" 
        name="companyName"
      />
      <Grid sx={{display: "flex", gap:"10px", justifyContent:"space-between"}}>
        <DateSelection 
          label="Starts" 
          dateName= "startsExp"
        />
        <DateSelection 
          label="Ends" 
          dateName= "endExp"
        />
      </Grid>
      <Grid sx={{ margin: "10px 0px" }}>
        <AutocompleteField 
          label="Key Responsibilites" 
          tagName= "resposibilityOne" 
          placeholder="Type and press Enter to add Responsibilites"
        />
      </Grid>
      <InputField 
        label= "Company Name" 
        name="companyNameTwo"
      />
      <Grid sx={{display: "flex", gap:"10px", justifyContent:"space-between"}}>
        <DateSelection 
          label="Starts" 
          dateName= "startsExpTwo"
        />
        <DateSelection 
          label="Ends" 
          dateName= "endExpTwo"
        />
      </Grid>
      <Grid sx={{ margin: "10px 0px" }}>
        <AutocompleteField 
          label="Key Responsibilites" 
          tagName= "resposibilityTwo"  
          placeholder="Type and press Enter to add Responsibilites"
        />
      </Grid>
    </>
  );
};
export default Experience;
