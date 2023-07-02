import Loader from 'components/Loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsError,
  contactsListSelector,
  contactsLoading,
} from 'redux/phonebookWithApi/selectors';
import { deleteContactsThunk } from 'redux/phonebookWithApi/thunks';
import { IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const contactsState = useSelector(contactsListSelector);
  const contactsErrorState = useSelector(contactsError);
  const isLoading = useSelector(contactsLoading);

  const dispatch = useDispatch();

  const removeContacts = event => {
    dispatch(deleteContactsThunk(event.currentTarget.id));
  };

  return (
    <List
      sx={{
        marginTop: '20px',
      }}
    >
      {contactsErrorState && <div>What`s happen wrong, please try again</div>}
      {isLoading && <Loader />}
      {contactsState &&
        !contactsErrorState &&
        !isLoading &&
        contactsState.length > 0 &&
        contactsState.map(data => {
          return (
            <ListItem
              key={data.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={removeContacts}
                  id={data.id}
                >
                  <DeleteIcon id={data.id} />
                </IconButton>
              }
              sx={{
                marginTop: '5px',
                fontSize: '18px',
              }}
            >
              {data.name}: {data.number}
            </ListItem>
          );
        })}
    </List>
  );
};

export default ContactList;
