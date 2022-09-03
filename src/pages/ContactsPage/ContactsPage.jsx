import Form from 'components/ContactForm/ConstactForm';
import ContactList from 'components/ContactLsit/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, TitleH, TitleH2 } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <TitleH>Phonebook</TitleH>
      <Form />

      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
