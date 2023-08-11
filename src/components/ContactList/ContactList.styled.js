import styled from 'styled-components';
export const  ContactsBook = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 5px;
    width: 300px;
`
export const ContactsItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    &::before{
        content: '';
        width: 3px;
        height: 3px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        margin-right: 5px;
    }
`
export const DeletContact = styled.button`
    margin-left: auto;
    &:hover{
        border-color: #DC143C;
        background-color: #DC143C;
        color: white;
    }
`