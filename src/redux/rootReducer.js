import { combineReducers } from 'redux';

// import itemsReducer from './items/items-reducer';
// import filterReducer from './filter/filter-reducer';

import { filterSlice } from './filter/filter-slice';
import { itemsSlice } from './items/items-slice';

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
