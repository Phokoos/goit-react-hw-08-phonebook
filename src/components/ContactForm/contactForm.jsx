import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactsThunk,
  fetchContactsThunk,
} from '../../redux/phonebookWithApi/thunks';
import { useEffect } from 'react';

const ContactForm = () => {
  const contactsState = useSelector(state => state.contacts.contacts.items);
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
    <form className={css.phonebookForm} onSubmit={formSubmit}>
      <label className={css.phonebookForm__label}>
        Name
        <input
          className={css.phonebookForm__input}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookForm__label}>
        Number
        <input
          className={css.phonebookForm__input}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.phonebookForm__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
