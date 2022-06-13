import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginAction } from "../../action/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const initialForm = {
  email: "",
  password: "",
};
function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const styleValid = {
    color: "red",
  };

  const iconStyle = {
    background: "black",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(initialForm);

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(loginAction(data));
  };

  const clickLogin = () => {
    localStorage.setItem("user", true);
  };

  useEffect(() => {
    let login = localStorage.getItem("user");
    if (login) {
      navigate("/todo");
    }
  }, []);

  return (
    <motion.div
      animate={{
        scale: [1, 0.2, 1, 1],
      }}
      transition={{
        duration: 1,
      }}
    >
      <Grid>
        <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
            <Avatar style={iconStyle}></Avatar>

            <Box>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  margin="normal"
                  type="email"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color="success"
                  variant="outlined"
                  {...register("email", {
                    required: "Vui lòng nhập Email",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                      message: "Email không hợp lệ",
                    },
                  })}
                />
                <Typography style={styleValid}>
                  {errors.email?.message}
                </Typography>

                <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  autoFocus
                  color="success"
                  variant="outlined"
                  {...register("password", {
                    required: "Vui lòng nhập password ",
                  })}
                />
                <Typography style={styleValid}>
                  {errors.password?.message}
                </Typography>
                <Button
                  sx={{ marginBottom: 3, marginTop: 2 }}
                  style={iconStyle}
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={clickLogin}
                >
                  Đăng Nhập
                </Button>

                <Typography variant="body">
                  Vui lòng đăng kí tài khoản tại đây!!!
                </Typography>

                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ marginTop: 2 }}
                    color="success"
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Đăng kí
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.div>
  );
}

export default Login;
