import { createSlice } from '@reduxjs/toolkit';

const initialStore = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStore,
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});
