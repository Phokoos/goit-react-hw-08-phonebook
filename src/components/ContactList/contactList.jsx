import Loader from 'components/Loader/loader';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsError,
  contactsListSelector,
  contactsLoading,
} from 'redux/phonebookWithApi/selectors';
import { deleteContactsThunk } from 'redux/phonebookWithApi/thunks';

const ContactList = () => {
  const contactsState = useSelector(contactsListSelector);
  const contactsErrorState = useSelector(contactsError);
  const isLoading = useSelector(contactsLoading);

  const dispatch = useDispatch();

  const removeContacts = event => {
    dispatch(deleteContactsThunk(event.target.id));
  };

  return (
    <ul className={css.contacts__list}>
      {contactsErrorState && <div>What`s happen wrong, please try again</div>}
      {isLoading && <Loader />}
      {!contactsErrorState &&
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
                onClick={removeContacts}
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
