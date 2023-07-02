import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phonebookWithApi/contactsSlice';
import { contactsFilterSelector } from 'redux/phonebookWithApi/selectors';
import { Input, InputLabel } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(contactsFilterSelector);

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <InputLabel
      sx={{
        marginTop: '20px',
      }}
    >
      Find contacts by name
      <Input
        sx={{
          marginLeft: '10px',
        }}
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterState}
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
      />
    </InputLabel>
  );
};

export default Filter;
