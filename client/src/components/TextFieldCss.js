import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const TextFieldCss = styled(TextField)({
  "& input": {
    color: "black",
    cursor: "pointer",
  },
  "& label": {
    color: "black",
    fontSize: "0.7rem",
  },
  "& placeholder": {
    color: "black",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
      cursor: "pointer",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
    "& label": {
      color: "black",
    },
  },
});

export default TextFieldCss;
