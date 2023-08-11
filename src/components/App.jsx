import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

const LS_KEY = 'contacts'
export class App extends Component {
  state = {
    contacts: [],
    searchContact: '',
  };
  componentDidMount(){
    const contactLS = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    this.setState({contacts: contactLS})
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
    }
  }
  createContact = (data) => {
    const newContact = {
      ...data, 
      id: nanoid()
      }  
      const nameCheck = this.state.contacts.find(({name})=> name === data.name)
      if(nameCheck){
        return alert(`${data.name} is already in contacts`)
      }
      this.setState((prevState) => ({
        contacts :[...prevState.contacts,(newContact)]}
      )) 
  }
  handleFind = ({ target }) => {
    const normalizedValue = target.value.trim().toLocaleLowerCase()
    this.setState({
      [target.name]: normalizedValue,
    });
  };
  findContact = () =>{
    return this.state.contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(this.state.searchContact)
  )}
  removeContact = (id) => {
    const updatedContact = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: updatedContact });
  };
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>

        <h2>Contacts</h2>
        <Filter searchContact={this.state.searchContact} handleFind={this.handleFind}/>
        { this.findContact().length ? (<ContactList contacts={this.findContact()} removeContact={this.removeContact}/>
        ): (<p>No matches found!</p>)} 
      </Container>
    );
  }
}
