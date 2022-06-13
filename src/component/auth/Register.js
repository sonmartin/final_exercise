import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { registerAction } from "../../action/action";
import { registerActionSaga } from "../../services/AuthServices";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register({}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();
  const onSubmit = (data, e) => {
    e.preventDefault();
    registerActionSaga(data);
    dispatch(registerAction(data));
  };

  const paperStyle = {
    padding: 20,
    height: "85vh",
    width: 480,
    margin: "20px auto",
  };

  const styleValid = {
    color: "red",
  };

  const iconStyle = {
    background: "black",
  };

  return (
    <motion.div
      animate={{
        scale: [1, 0.2, 1, 1],
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              style={iconStyle}
              src="https://vtv1.mediacdn.vn/zoom/700_438/2020/8/7/john-wick-phim-truyen-hinh-15967830203341040641259.jpg"
            ></Avatar>
            <Box>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Box sx={{ display: "flex" }}>
                  <TextField
                    sx={{ marginRight: "20px" }}
                    className="focus-color"
                    size="small"
                    margin="normal"
                    fullWidth
                    label="Họ"
                    autoFocus
                    color="success"
                    variant="outlined"
                    {...register("firstname", {
                      required: "Vui lòng nhập Họ và Tên ",
                      minLength: {
                        value: 3,
                        message: "firstname phải có ít nhất 3 kí tự",
                      },
                    })}
                  />

                  <TextField
                    className="focus-color"
                    size="small"
                    margin="normal"
                    fullWidth
                    label="Tên"
                    autoFocus
                    color="success"
                    variant="outlined"
                    {...register("lastName")}
                  />
                </Box>
                <Typography style={styleValid}>
                  {errors.firstname?.message}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    sx={{ marginRight: "20px" }}
                    label="Ngày Sinh"
                    type="date"
                    size="small"
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("birthday")}
                  />

                  <TextField
                    className="focus-color"
                    size="small"
                    margin="normal"
                    fullWidth
                    label="Số Điện Thoại"
                    autoFocus
                    color="success"
                    variant="outlined"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "vui lòng nhập ngày sinh và số điện thoại",
                      },
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message:
                          "vui lòng nhập đúng 10 chữ số và không chứa chữ cái",
                      },
                    })}
                  />
                </Box>
                <Typography style={styleValid}>
                  {errors.phone?.message}
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <TextField
                    sx={{ marginRight: "20px" }}
                    margin="normal"
                    fullWidth
                    label="Trường Học"
                    size="small"
                    autoFocus
                    color="success"
                    variant="outlined"
                    {...register("schoolName")}
                  />

                  <TextField
                    margin="normal"
                    fullWidth
                    label="Ảnh"
                    size="small"
                    autoFocus
                    color="success"
                    variant="outlined"
                    {...register("avatar", {
                      required: "Vui lòng nhập tên trường và link ảnh",
                    })}
                  />
                </Box>
                <Typography style={styleValid}>
                  {errors.avatar?.message}
                </Typography>

                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  label="Email"
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
                  label="Mật Khẩu"
                  type="password"
                  size="small"
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
                <Box sx={{ display: "flex", marginTop: "10px" }}>
                  <Button
                    sx={{ width: "300px" }}
                    color="success"
                    type="submit"
                    variant="contained"
                  >
                    Đăng Kí
                  </Button>

                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      style={iconStyle}
                      type="submit"
                      sx={{ marginLeft: "53px" }}
                      variant="contained"
                    >
                      Đăng Nhập
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Paper>
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
      </Grid>
    </motion.div>
  );
}

export default Register;
