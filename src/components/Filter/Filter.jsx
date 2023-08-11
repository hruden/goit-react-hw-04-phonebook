import PropTypes from 'prop-types';
export const Filter =({searchContact, handleFind})=>{
    return(
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
    )
}

Filter.propTypes = {
    searchContact: PropTypes.string.isRequired,
    handleFind: PropTypes.func,
}
