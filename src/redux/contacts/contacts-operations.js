import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from "../../services/contacts-api";



export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,{ rejectWithValue }) => {
    try {
      const { data } = await contactsApi.fetchAllContacts()
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
  const contact = { name, number };
 try {
      const { data } = await contactsApi.addNewContact(contact);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    } 
})


export const removeContact = createAsyncThunk(
  'contacts/removeContac',
  async (contactId, { rejectWithValue }) => {
   try {
    await contactsApi.removeContactById(contactId);
    return contactId;
  } catch (error) {
     return rejectWithValue(error);
  }
})

// eslint-disable-next-line import/no-anonymous-default-export
export default { removeContact };
