import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/operations';

export const SignIn = () => {
  const dispatch = useDispatch();

  const onsubmitRegistration = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // console.log(e.target.name.value);
    // console.log(form.elements.name.value);
    // console.log(form.elements.email.value);
    // console.log(form.elements.password.value);
    dispatch(
      signUpUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Box
        onSubmit={onsubmitRegistration}
        display="flex"
        flexDirection="column"
        alignItems="center"
        as="form"
      >
        <h2>Registration form:</h2>
        <Box mb="10px" as="label">
          {/* <input type="email" name="email" /> */}
          <TextField
            id="outlined-basic"
            label="Name:"
            variant="outlined"
            type="name"
            name="name"
            color="warning"
          />
        </Box>
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
          Registration
        </Button>
      </Box>
      {/* <form onSubmit={onsubmitRegistration}> */}
      {/* <label>
          Name
          <input type="text" name="name" />
        </label> */}
      {/* <label> */}
      {/* Email */}
      {/* <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label> */}
      {/* 
        <br />
        <button type="submit">Registration</button> */}
      {/* </form> */}
    </>
  );
};
