import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialStore = [];

export const itemsSlice = createSlice({
  name: 'items',
  initialState: initialStore,
  reducers: {
    addContactsItem: {
      reducer: (store, { payload }) => [...store, payload],
      prepare: (name, number) => {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContactsItem: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});
