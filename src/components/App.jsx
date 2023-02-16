// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { AppStyle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { SignIn } from 'pages/SignIn/SignIn';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import {
  selectIsLoggedInState,
  selectIsRefreshingState,
} from 'redux/auth/auth.selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshingState);
  const loggedIn = useSelector(selectIsLoggedInState);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return (
  //   <AppStyle>
  //     <Routes>
  //       <Route></Route>
  //     </Routes>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </AppStyle>
  // );
  return isRefreshing ? (
    'loading user data'
  ) : (
    <AppStyle>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<PrivateRoute component={Phonebook} redirectTo="/Login" />}
          />

          {/* <Route index element={!loggedIn ? <Home /> : <Phonebook />} /> */}
          {/* <Route index element={<Home />} /> */}

          <Route
            path="/Login"
            element={<RestrictedRoute component={Login} redirectTo="/" />}
          />
          <Route
            path="/SignIn"
            element={<RestrictedRoute component={SignIn} redirectTo="/" />}
          />
          {/* <Route path="/Phonebook" element={<Phonebook />} /> */}

          {/* <h2>Contacts</h2>

        <Route path="/Phonebook">
          <Route>
            <ContactForm />
          </Route>

          <Route>
            <Filter />
          </Route>
          <Route>
            <ContactList />
          </Route>
        </Route> */}
        </Route>
      </Routes>
    </AppStyle>
  );
};
