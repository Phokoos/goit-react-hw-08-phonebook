import { Button, FormLabel, Input, InputLabel } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';
import { fetchContactsThunk } from 'redux/phonebookWithApi/thunks';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async event => {
    event.preventDefault();

    await dispatch(
      loginThunk({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/contacts');
        dispatch(fetchContactsThunk());
        toast.success('You logged in');
      })
      .catch(() => {
        toast.error('Sorry something went wrong');
      });

    if (event.currentTarget) {
      event.currentTarget.reset();
    }
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
          Log in
        </Button>
      </FormLabel>
    </form>
  );
};
