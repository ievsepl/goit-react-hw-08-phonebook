import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from 'redux/auth/auth.selectors';
import { logoutUser } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const onLogoutBtn = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className="">
      <p>Hello {userData.name}</p>
      <button type="button" onClick={onLogoutBtn}>
        LogOut
      </button>
    </div>
  );
};
