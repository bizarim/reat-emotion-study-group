import { combineReducers } from 'redux';
import { productReducer, ProductState } from './product/reducer';

// [ Redux 만들기 ] step 4: reducer 등록
// reducer 등록

export interface RootState {
    product: ProductState;
}

export const rootReducer = combineReducers({
    productReducer,
});

