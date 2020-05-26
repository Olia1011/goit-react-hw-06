import { uuid } from 'uuidv4';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add',value => ({
    payload:{
            id: uuid(),
            name:value.name,
            number:value.number
    }
}))

const deleteContact = createAction('contacts/delete')
export const filterContact = createAction('contacts/filterContact')

export default { addContact, deleteContact, filterContact }