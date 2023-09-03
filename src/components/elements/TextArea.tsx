import TextareaAutosize from "@mui/base/TextareaAutosize";
import { alpha } from "@mui/material";
import { styled } from "@mui/system";
import { useFormContext } from "react-hook-form";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: ${theme.typography.body2.fontFamily};
    font-size: ${theme.typography.body2.fontSize};
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 0px;
    margin: 10px 0px;
    background-color: ${theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027'};
    &:focus {
        box-shadow: ${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px;
        border-color: ${theme.palette.primary.main}
    }
    border: 1px solid gray;
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const TextArea = ({discriptions}) => {
  const { register } = useFormContext();
  return <StyledTextarea aria-label="empty textarea" 
            minRows={5} 
            maxRows={5}
            placeholder="Objective"
            {...register(`${discriptions}`)} 
        />;
};
export default TextArea;
