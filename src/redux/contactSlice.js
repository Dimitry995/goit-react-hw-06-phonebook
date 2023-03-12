import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Annie Simpson', number: '234-22-69' },
          { id: 'id-2', name: 'Elize Kline', number: '661-58-90' },
          { id: 'id-3', name: 'Dimitre Clements', number: '803-67-40' },
          { id: 'id-4', name: 'Andronik Copeland', number: '90-527-56' },
  ],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
     state.contacts = [...state.contatcs, action.payload];
    },
filterValue(state, action) {
      state.filter = action.payload;
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, removeContact, filterValue } = contactSlice.actions;
