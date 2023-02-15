import Box from 'components/Box/Box';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedInState } from 'redux/auth/auth.selectors';

export const Home = () => {
  const loggedIn = useSelector(selectIsLoggedInState);

  return (
    <>
      {!loggedIn ? <Box as="h2">Wellcome to my Phonebook</Box> : <Phonebook />}
      {/* // <Outlet /> */}
    </>
  );
};
