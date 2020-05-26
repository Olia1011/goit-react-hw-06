import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'

const contacts = createReducer ([], {
    [actions.addContact]: (state, action) =>[...state, action.payload],
    [actions.deleteContact]: (state, action) =>state.filter(contact => contact.id !== action.payload)
})

const filter = createReducer ('', {
    [actions.filterContact]:(state, action)=>action.payload
})

export default combineReducers ({
    contacts,
    filter,
})