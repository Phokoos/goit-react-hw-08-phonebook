import { Button, FormLabel, Input, InputLabel } from '@mui/material';
import { loginApi, setToken } from 'api/authApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { accessToken } from 'redux/auth/selectors';
import { loginThunk } from 'redux/auth/thunks';

export const Login = () => {
  const isAuth = useSelector(accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async event => {
    event.preventDefault();

    await dispatch(
      loginThunk({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );

    event.currentTarget.reset();
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return (
    <form onSubmit={formSubmit}>
      <FormLabel
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <InputLabel>
          Email
          <Input
            sx={{
              marginLeft: '10px',
            }}
            type="email"
            name="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
          />
        </InputLabel>
        <InputLabel>
          Password
          <Input
            sx={{
              marginLeft: '10px',
            }}
            type="password"
            name="password"
            // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
          />
        </InputLabel>
        <Button
          sx={{
            width: '150px',
          }}
          variant="contained"
          type="submit"
        >
          Add contact
        </Button>
      </FormLabel>
    </form>
  );
};
