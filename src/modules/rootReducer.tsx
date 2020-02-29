import { combineReducers } from 'redux';

// [ Redux 만들기 ] step 4: reducer 등록
// reducer 등록

export const rootReducer = combineReducers({

});
export type AppState = ReturnType<typeof rootReducer>;
