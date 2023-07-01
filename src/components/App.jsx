import css from './App.module.css';

import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

const App = () => {
  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
