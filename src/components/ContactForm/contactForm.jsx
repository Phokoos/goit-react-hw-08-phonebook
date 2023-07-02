import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from '../../redux/phonebookWithApi/thunks';

import { Input, InputLabel, Button, FormLabel } from '@mui/material';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const contactsState = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const handleDispatchAddContacts = ({ name, number }) => {
    dispatch(
      addContactsThunk({
        name: name,
        number: number,
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
      return toast.error(`Name ${name} is already here`);
    }

    handleDispatchAddContacts({
      name: name,
      number: action.target.number.value,
    });

    action.currentTarget.reset();
  };

  return (
    <FormLabel
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
      component="form"
      onSubmit={formSubmit}
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
  );
};

export default ContactForm;
