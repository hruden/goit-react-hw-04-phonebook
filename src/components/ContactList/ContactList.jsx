import { ContactsBook, ContactsItem, DeletContact } from "./ContactList.styled"
import PropTypes from 'prop-types';


export const ContactList = ({contacts, removeContact}) => {
    return (
        <ContactsBook>
            {contacts.map(({id, name, number}) => 
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
