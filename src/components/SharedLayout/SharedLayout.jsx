import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedInState } from 'redux/auth/auth.selectors';
import { Header, Link, Container, UserParams } from './SharedLayout.styled';

export const SharedLayout = () => {
  const loggedIn = useSelector(selectIsLoggedInState);
  // const dispatch = useDispatch();
  // const loggedIn = false;

  return (
    <Container>
      <Header>
        {/* <h1>Phonebook</h1> */}
        {loggedIn ? (
          <>
            {' '}
            <Link to="/contacts">Contact list</Link>
            <Link to="/addContact">Add contact</Link>
            <UserMenu />
          </>
        ) : (
          <UserParams>
            <Link to="/login">Login</Link>
            <Link to="/signIn">Registration</Link>
          </UserParams>
        )}

        {/* <Link to="/Phonebook">Phonebook</Link> */}
      </Header>
      <Outlet />
    </Container>
  );
};
