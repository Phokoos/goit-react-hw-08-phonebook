import { AppBar, Button, Container, MenuItem, MenuList } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { accessToken, userEmailSelector } from 'redux/auth/selectors';
import { getUserThunk, logoutThunk } from 'redux/auth/thunks';

export const Nav = () => {
  const isAuth = useSelector(accessToken);
  const userEmail = useSelector(userEmailSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth &&
      !userEmail &&
      dispatch(getUserThunk())
        .unwrap()
        .catch(() => {
          dispatch(logoutThunk());
        });
  }, [dispatch, isAuth, userEmail]);

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
          {!isAuth && (
            <MenuItem onClick={handleNavigateToLogin}>Login</MenuItem>
          )}
          {!isAuth && (
            <MenuItem onClick={handleNavigateToRegister}>Register</MenuItem>
          )}
          <MenuItem onClick={handleNavigateToContacts}>Contacts</MenuItem>
        </MenuList>
        {isAuth && (
          <div
            style={{
              padding: '8px',
              border: '1px solid white',
              borderRadius: '5px',
            }}
          >
            {userEmail}
          </div>
        )}

        {isAuth && (
          <Button variant="contained" color="success" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </AppBar>

      <Container
        sx={{
          width: '600px',
          paddingTop: '65px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Outlet />
      </Container>
    </section>
  );
};
