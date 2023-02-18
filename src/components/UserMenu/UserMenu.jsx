// import * as React from 'react';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from 'redux/auth/auth.selectors';
import { logoutUser } from 'redux/operations';
import { UserMenuStyle } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const onLogoutBtn = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <UserMenuStyle>
      <p>Hello {userData.name}</p>
      {/* <button type="button" onClick={onLogoutBtn}>
        LogOut
      </button> */}
      <Button
        variant="contained"
        size="small"
        style={{
          backgroundColor: 'orangered',
          textTransform: 'capitalize',
          marginLeft: '20px',
        }}
        type="button"
        onClick={onLogoutBtn}
      >
        LogOut
      </Button>
    </UserMenuStyle>
  );
};
