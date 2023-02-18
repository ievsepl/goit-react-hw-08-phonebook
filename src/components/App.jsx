import { AppStyle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login/Login';
import { SignIn } from 'pages/SignIn/SignIn';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { selectIsRefreshingState } from 'redux/auth/auth.selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { AddContactPage } from 'pages/AddContactPage/AddContactPage';
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshingState);
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
          <Route index element={<WelcomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/" />}
          />
          <Route
            path="/addContact"
            element={
              <PrivateRoute component={AddContactPage} redirectTo={'/'} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute component={SignIn} redirectTo="/contacts" />
            }
          />
        </Route>
      </Routes>
    </AppStyle>
  );
};
