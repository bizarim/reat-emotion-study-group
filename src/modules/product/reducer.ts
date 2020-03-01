import { CommonError } from '../types';
import { ProductAction } from './actions';
import {
    PRODUCT_GET_DETAIL_ERR,
    PRODUCT_GET_DETAIL_REQ,
    PRODUCT_GET_DETAIL_RES,
    PRODUCT_GET_LIST_ERR,
    PRODUCT_GET_LIST_REQ,
    PRODUCT_GET_LIST_RES,
} from './constants';
import { Product, ProductDetail } from './types';

export interface ProductState {
    list: Product[];
    detail: ProductDetail;
    error?: CommonError;
    successMessage?: string;
}

export const initialProductState: ProductState = {
    list: [],
    detail: {},
};

export const productReducer = (state = initialProductState, action: ProductAction): ProductState => {

    switch (action.type) {
        case PRODUCT_GET_DETAIL_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case PRODUCT_GET_DETAIL_REQ:
            return {
                ...state,
                error: undefined,
            };
        case PRODUCT_GET_DETAIL_RES:
            return {
                ...state,
                error: undefined,
                successMessage: undefined,
            };
        case PRODUCT_GET_LIST_ERR:
            return {
                ...state,
                error: undefined,
                successMessage: undefined,
            };
        case PRODUCT_GET_LIST_REQ:
            return {
                ...state,
            };
        case PRODUCT_GET_LIST_RES:
            return {
                ...state,
                list: action.payload.list,
            };
        default:
            return state;
    }
};
