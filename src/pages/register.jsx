import { Button, FormLabel, Input, InputLabel } from '@mui/material';
import { registerApi } from 'api/authApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { accessToken } from 'redux/auth/selectors';

export const Register = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(accessToken);

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const formSubmit = event => {
    event.preventDefault();

    registerApi({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    })
      .then(data => {
        toast.success(`User with email ${data.data.user.email} added`, {
          duration: 6000,
        });
        return navigate('/login');
      })
      .catch(() => {
        toast.error('Something happen wrong, please try again');
      });

    event.currentTarget.reset();
  };
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
          Name
          <Input
            sx={{
              marginLeft: '10px',
            }}
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputLabel>
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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
