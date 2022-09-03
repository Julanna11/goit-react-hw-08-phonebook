import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContactsThunk',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post('contacts', contact);
      thunkAPI.dispatch(getContactsThunk());
      Notify.success(`Contact ${contact.name}, added`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async ({ contactId, name }, thunkAPI) => {
    try {
      const deleteContact = await axios.delete(`contacts/${contactId}`);
      thunkAPI.dispatch(getContactsThunk());
      console.log(deleteContact);
      Notify.failure(`Contact ${name}, deleted`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
