import { combineReducers } from "redux";
import { contactsReducer } from "./phonebookWithApi/contactsSlice";

export const reducer = combineReducers({
	contacts: contactsReducer,
}) 
