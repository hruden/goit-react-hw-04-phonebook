import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from 'stateContext/GlobalContext';
export const Filter = () => {
  const { searchContact, setSearchContact } = useContext(Context);

  const handleFind = ({ target }) => {
    const normalizedValue = target.value.trim().toLocaleLowerCase();
    setSearchContact(normalizedValue);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={handleFind}
        value={searchContact}
        name="searchContact"
        type="text"
        placeholder="Search contact..."
      />
    </>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.string,
  handleFind: PropTypes.func,
};
