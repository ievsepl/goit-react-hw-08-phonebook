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
        <Link to="/">Home</Link>
        {loggedIn ? (
          <div className="">
            <UserMenu />
          </div>
        ) : (
          <UserParams>
            <Link to="/Login">Login</Link>
            <Link to="/SignIn">Registration</Link>
          </UserParams>
        )}

        {/* <Link to="/Phonebook">Phonebook</Link> */}
      </Header>
      <Outlet />
    </Container>
  );
};
