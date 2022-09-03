import PropTypes from 'prop-types';
import { ListItem } from 'components/ContactLsit/ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts-requests';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '../../utilities/button.styled';

export function ContactListItem({ contactId, name, number }) {
  const dispatch = useDispatch();
  const infoDelete = { contactId, name };

  return (
    <ListItem>
      {name}: {number}
      <ThemeProvider theme={theme}>
        <Button
          sx={{ m: 2 }}
          color="buttonColor"
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={() => dispatch(deleteContactThunk(infoDelete))}
        >
          Delete
        </Button>
      </ThemeProvider>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
