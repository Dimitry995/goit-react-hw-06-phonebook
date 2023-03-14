import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Annie Simpson', number: '2342269' },
          { id: 'id-2', name: 'Elize Kline', number: '6615890' },
          { id: 'id-3', name: 'Dimitre Clements', number: '8036740' },
          { id: 'id-4', name: 'Andronik Copeland', number: '9052756' },
  ],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },

    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
