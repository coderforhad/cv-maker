import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

const uploader = Uploader({
  apiKey: "free",
});

const options = { multi: false };

const UploadFile = () => {
  const methods = useFormContext();
  return (
    <UploadButton
      uploader={uploader}
      options={options}
      onComplete={(files) => {
        methods.setValue("userPhoto", files?.[0]?.fileUrl);
      }}
    >
      {({ onClick }) => (
        <Button 
          variant="contained" 
          sx={{ borderRadius: "0px", width: "100%" }} 
          onClick={onClick}
        >
          Upload Your Photo
        </Button>
      )}
    </UploadButton>
  );
};
export default UploadFile;
