import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contacts-requests';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            contactId={id}
            name={name}
            number={number}
          ></ContactListItem>
        );
      })}
    </List>
  );
}
