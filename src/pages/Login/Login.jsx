import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const onLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      onSubmit={onLogin}
      display="flex"
      flexDirection="column"
      // width="300px"
      // margin="0, auto"
      alignItems="center"
      as="form"
    >
      <h2>Login</h2>

      <Box mb="10px" as="label">
        {/* <input type="email" name="email" /> */}
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          type="email"
          name="email"
          color="warning"
        />
      </Box>
      <Box mb="10px" as="label">
        <TextField
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          type="password"
          name="password"
          color="warning"
        />
        {/* <input type="password" name="password" /> */}
      </Box>

      {/* <br /> */}
      {/* <button type="submit">Login</button> */}
      <Button
        variant="contained"
        style={{
          backgroundColor: 'orangered',
          textTransform: 'capitalize',
          width: '150px',
        }}
        type="submit"
      >
        Login
      </Button>
    </Box>
  );
};
