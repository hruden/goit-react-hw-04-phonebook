import { useContext,} from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { Context } from 'stateContext/GlobalContext';

export function App () {
  const {contacts, searchContact,} = useContext(Context)
  
  const findContact = () =>{
    return contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchContact)
  )}

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        { findContact().length ? (<ContactList list={findContact()}/>
        ): (<p>No matches found!</p>)} 
      </Container>
    );
}
