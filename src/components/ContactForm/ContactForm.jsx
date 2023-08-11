import { useContext, useState } from 'react';
import { AddContactBtn, FormFoneBook, InputFoneBook } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Context } from 'stateContext/GlobalContext';
import { nanoid } from 'nanoid';



export function ContactForm () {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const {contacts, setContacts} = useContext(Context)

  const handChange = ({target}) => {
    switch (target.name){
    case 'name':
      setName(target.value)
      break;
    case 'number':
      setNumber(target.value)
      break;
    default:
      return;
  }
}
const createContact = (data) => {
  const newContact = {
    ...data, 
    id: nanoid()
    }  
    const nameCheck = contacts.find(({name})=> name === data.name)
    if(nameCheck){
      return alert(`${data.name} is already in contacts`)
    }
  setContacts(s=>[...s, (newContact)])
}

  const handleSubmit = e => {
    e.preventDefault();
    createContact({
      name: name,
      number: number,
    });
    setName('')
    setNumber('')
  };
    return (
      <FormFoneBook onSubmit={handleSubmit}>
        Name
        <InputFoneBook
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handChange}
          value={name}
        />
        Number
        <InputFoneBook
          type="tel"
          name="number"
          pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handChange}
          value={number}
        />
        <AddContactBtn type="submit">add Contact</AddContactBtn>
      </FormFoneBook>
    );
  
}

ContactForm.propTypes = {
  createContact: PropTypes.func
}