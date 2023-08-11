import { useContext } from "react";
import { ContactsBook, ContactsItem, DeletContact } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { Context } from "stateContext/GlobalContext";


export const ContactList = ({list}) => {
    const {contacts, setContacts} = useContext(Context)

    const removeContact = (id) => {
        const updatedContact = contacts.filter(
          (contact) => contact.id !== id
        );
        setContacts(updatedContact)  
      };
    return (
        <ContactsBook>
            {list.map(({id, name, number}) => 
                <ContactsItem key={id}>{name}: {number}
                    <DeletContact onClick={()=>removeContact(id)}>Delete</DeletContact>
                </ContactsItem>            
            )}
        </ContactsBook>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func
}
