//import Head from 'next/head';
//import NextLink from 'next/link';
//import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { loginRequest } from './loginState';
import { useSelector,useDispatch } from 'react-redux';
//import ArrowBackIcon from '@mui/icons-material/ArrowBackIcon';
//import ArrowBackIcon from '@mui/icons-material/ArrowBackIcon';


const Login = () => {
    const userid=useSelector(state=>state.login.userid);
    const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'admin'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: () => {
      dispatch(loginRequest({email:formik.values.email,password:formik.values.password}));
    }
  });

  return (
    <>

      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
         
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              
            </Box>
           
            <Box sx={{pb: 1,pt: 3 }}></Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
               // disabled={formik.isSubmitting}
               //disabled={!(formik.dirty && formik.isValid)}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
           
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;