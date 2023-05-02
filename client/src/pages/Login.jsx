import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import FlexBox from "../components/FlexBox";
import TextFieldCss from "../components/TextFieldCss";
import {
  validateEmail,
  validatePassword,
  helperTextEmail,
  helperTextPassword,
} from "../logic/Login";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const result = await axios
      .post("http://localhost:3001/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then((res) => {
        const user = res.data.user;
        console.log(user);
        dispatch(updateUser(user));
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <FlexBox sx={{ height: "100vh" }}>
      <FlexBox
        style={{ height: "100%", width: "30%", backgroundColor: "white" }}
      >
        <FlexBox
          style={{
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <FlexBox sx={{ flexDirection: "column" }}>
            <FlexBox>
              <DynamicFormIcon sx={{ color: "black", mr: 1 }} />
              <Typography
                component="a"
                href="/home"
                variant="h5"
                sx={{
                  color: "black",
                  fontSize: "1.8rem",
                  textDecoration: "none",
                }}
              >
                DocumentD
              </Typography>
            </FlexBox>
            <Typography>Log in to your account</Typography>
          </FlexBox>
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
            name="password"
            label="password"
            type="text"
            error={submitted && !validatePassword(loginInfo)}
            helperText={submitted && helperTextPassword(loginInfo)}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{ width: "100%" }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/register");
            }}
            sx={{ width: "100%" }}
          >
            Sign up
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox
        sx={{
          backgroundImage: "url(home2.jpg)",
          height: "100vh",
          width: "70%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FlexBox
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(2px)",
            flexDirection: "column",
            padding: "30px",
          }}
        >
          <Typography variant="h5">All your documents.</Typography>
          <Typography variant="h3">All in one place.</Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
