import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import FlexBox from "../components/FlexBox";
import TextFieldCss from "../components/TextFieldCss";
import {
  helperTextConfirmEmail,
  validateConfirmEmail,
  validateConfirmPassword,
  helperTextConfirmPassword,
  helperTextEmail,
  helperTextPassword,
  validateEmail,
  validatePassword,
} from "../logic/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const result = await axios
      .post("http://localhost:3001/auth/register", {
        firstName: loginInfo.firstName,
        lastName: loginInfo.lastName,
        password: loginInfo.password,
        email: loginInfo.email,
      })
      .then((data) => {
        window.alert("user successfully registered!");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <FlexBox style={{ height: "100%", backgroundColor: "white" }}>
      <FlexBox
        style={{
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontSize: "2rem" }}>Create account</Typography>
        <TextFieldCss
          name="firstName"
          label="First Name"
          type="text"
          helperText={
            submitted && loginInfo.firstName === ""
              ? "this field cannot be empty!"
              : ""
          }
          onChange={handleChange}
          required
        />
        <TextFieldCss
          name="lastName"
          label="Last Name"
          type="text"
          helperText={
            submitted && loginInfo.lastName === ""
              ? "this field cannot be empty!"
              : ""
          }
          onChange={handleChange}
          required
        />
        <TextFieldCss
          name="email"
          label="email"
          type="text"
          error={submitted && !validateEmail(loginInfo)}
          helperText={submitted && helperTextEmail(loginInfo)}
          onChange={handleChange}
          required
        />
        <TextFieldCss
          name="confirmEmail"
          label="repeat email"
          type="text"
          error={submitted && !validateConfirmEmail(loginInfo)}
          helperText={submitted && helperTextConfirmEmail(loginInfo)}
          onChange={handleChange}
          required
        />
        <TextFieldCss
          name="password"
          label="password"
          type="text"
          error={submitted && !validatePassword(loginInfo)}
          helperText={submitted && helperTextPassword(loginInfo)}
          onChange={handleChange}
          required
        />
        <TextFieldCss
          name="confirmPassword"
          label="repeat password"
          type="text"
          error={submitted && !validateConfirmPassword(loginInfo)}
          helperText={submitted && helperTextConfirmPassword(loginInfo)}
          onChange={handleChange}
          required
        />
        <Button
          style={{ width: "100%" }}
          variant="contained"
          onClick={handleClick}
        >
          Create
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
