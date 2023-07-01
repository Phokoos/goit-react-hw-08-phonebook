import { useDispatch, useSelector } from 'react-redux';
import {
  addContactsThunk,
  fetchContactsThunk,
} from '../../redux/phonebookWithApi/thunks';
import { useEffect } from 'react';

import { Input, InputLabel, Button, FormLabel } from '@mui/material';
import { contactsListSelector } from 'redux/phonebookWithApi/selectors';

const ContactForm = () => {
  const contactsState = useSelector(state => state.contacts.contacts.items);
  // const contactsState = useSelector(contactsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDispatchAddContacts = (name, phone) => {
    dispatch(
      addContactsThunk({
        name: name,
        phone: phone,
      })
    );
  };

  const formSubmit = action => {
    action.preventDefault();

    const name = action.target.name.value;

    if (
      contactsState
        .map(contact => contact.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      return alert(`Name ${name} is already here`);
    }

    handleDispatchAddContacts(name, action.target.number.value);

    action.currentTarget.reset();
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
          Number
          <Input
            sx={{
              marginLeft: '10px',
            }}
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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

export default ContactForm;
