import { combineReducers } from "redux";
import { contactsReducer } from "./phonebookWithApi/contactsSlice";
import { authReducer } from "./auth/slice";

export const reducer = combineReducers({
	contacts: contactsReducer,
	auth: authReducer,
}) 
