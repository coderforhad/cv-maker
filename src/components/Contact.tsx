import { Grid } from "@mui/material";
import AutocompleteField from "./elements/AutocompleteField";
import InputField from "./elements/InputField";
import DateSelection from "./elements/DateSelection";

const Contact = () => {
  return (
    <>
      <InputField label="Email" />
      <InputField label="Phone" />
      <InputField label="Address" />
    </>
  );
};
export default Contact;
