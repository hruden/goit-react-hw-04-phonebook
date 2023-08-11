import { Component } from 'react';
import { AddContactBtn, FormFoneBook, InputFoneBook } from './ContactForm.styled';
import PropTypes from 'prop-types';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormFoneBook onSubmit={this.handleSubmit}>
        Name
        <InputFoneBook
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        Number
        <InputFoneBook
          type="tel"
          name="number"
          pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <AddContactBtn type="submit">add Contact</AddContactBtn>
      </FormFoneBook>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func
}