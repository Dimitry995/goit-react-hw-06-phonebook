import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
    { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
    { id: 'id-3', name: 'Eden Clements', number: '6451779' },
    { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
  ],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.contacts.push({ id: nanoid(4), name, number });
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
