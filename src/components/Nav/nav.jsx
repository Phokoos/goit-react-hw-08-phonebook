import { AppBar, MenuItem, MenuList } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { accessToken, userEmailSelector } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/thunks';

export const Nav = () => {
  const isAuth = useSelector(accessToken);
  const userEmail = useSelector(userEmailSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate('/login');
  };

  const handleNavigateToLogin = () => navigate('login');
  const handleNavigateToRegister = () => navigate('register');
  const handleNavigateToContacts = () => navigate('contacts');

  return (
    <section>
      <AppBar
        sx={{
          paddingRight: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MenuList
          open={true}
          sx={{
            display: 'flex',
          }}
        >
          {isAuth ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={handleNavigateToLogin}>Login</MenuItem>
          )}
          {!isAuth && (
            <MenuItem onClick={handleNavigateToRegister}>Register</MenuItem>
          )}
          {isAuth && (
            <MenuItem onClick={handleNavigateToContacts}>Contacts</MenuItem>
          )}
        </MenuList>
        {isAuth && <div>{userEmail}</div>}
      </AppBar>
      <div style={{ paddingTop: '55px' }}>
        <Outlet />
      </div>
    </section>
  );
};
