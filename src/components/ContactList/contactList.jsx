import Loader from 'components/Loader/loader';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsError,
  contactsListSelector,
  contactsLoading,
} from 'redux/phonebookWithApi/selectors';
import { deleteContactsThunk } from 'redux/phonebookWithApi/thunks';
import { addPhonebookContactApi, getPhonebookApi } from 'api/phonebookApi';

const ContactList = () => {
  const contactsState = useSelector(contactsListSelector);
  console.log(contactsState);
  const contactsErrorState = useSelector(contactsError);
  const isLoading = useSelector(contactsLoading);

  const dispatch = useDispatch();

  // const removeContacts = event => {
  //   dispatch(deleteContactsThunk(event.target.id));
  // };

  const testOnj = {
    name: 'mykola',
    number: '0258224',
  };

  const handleSetContact = ({ name, number }) => {
    addPhonebookContactApi({ name, number });
  };

  return (
    // <div>
    //   <button onClick={handleSetContact}>test</button>
    //   <button onClick={getPhonebookApi}>test</button>
    // </div>

    <ul className={css.contacts__list}>
      {contactsErrorState && <div>What`s happen wrong, please try again</div>}
      {isLoading && <Loader />}
      {contactsState &&
        !contactsErrorState &&
        !isLoading &&
        contactsState.length > 0 &&
        contactsState.map(data => {
          return (
            <li key={data.id} className={css.contacts__item}>
              {data.name}: {data.phone}
              <button
                id={data.id}
                className={css.contacts__btn}
                type="button"
                // onClick={removeContacts}
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
