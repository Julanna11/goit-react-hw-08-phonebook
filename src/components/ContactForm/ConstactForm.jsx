import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts-requests';
import { getContacts } from 'redux/contacts/contacts-selectors';
import {
  FormContainer,
  Input,
  InputContainer,
  LableText,
} from './ContactForm.styled';
import Button from '@mui/material/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThemeProvider } from '@mui/system';
import { theme } from '../../utilities/button.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const changeName = evt => setName(evt.target.value);
  const changeNumber = evt => setNumber(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notify.warning(`${name} is already in contacts`)
      : dispatch(addContactThunk(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label>
            <LableText>Name</LableText>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={changeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name Surname"
              autoComplete="off"
            />
          </label>
          <label>
            <LableText>Number</LableText>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={changeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="+380 00 00 000"
              autoComplete="off"
            />
          </label>
        </InputContainer>

        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            sx={{ ml: 15 }}
            color="buttonColor"
            variant="contained"
          >
            Add contact
          </Button>
        </ThemeProvider>
      </form>
    </FormContainer>
  );
}
