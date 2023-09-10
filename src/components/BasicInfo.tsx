import { Box } from "@mui/material";
import InputField from "./elements/InputField";
import TextArea from "./elements/TextArea";
import UploadFile from "./elements/UploadFile";

const BasicInfo = () => {
  return (
    <Box>
      <UploadFile /> 
      <InputField 
        label="full name" 
        name="fName"
      /> 
      <InputField 
        label="Designation" 
        name="designation"
      />
      <TextArea discriptions="objective"/>
    </Box>
  );
};
export default BasicInfo;
