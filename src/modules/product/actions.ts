import {
    PRODUCT_GET_DETAIL_ERR,
    PRODUCT_GET_DETAIL_REQ,
    PRODUCT_GET_DETAIL_RES,
    PRODUCT_GET_LIST_ERR,
    PRODUCT_GET_LIST_REQ,
    PRODUCT_GET_LIST_RES,
} from './constants';
import { CommonError } from '../types';
import { ProductDetail, ProductGetListPayload } from './types';

export interface ProductGetDetailErr {
    type: typeof PRODUCT_GET_DETAIL_ERR;
    payload: CommonError;
}
export interface ProductGetDetailReq {
    type: typeof PRODUCT_GET_DETAIL_REQ;
    payload: {
        product_id: number;
    };
}
export interface ProductGetDetailRes {
    type: typeof PRODUCT_GET_DETAIL_RES;
    payload: {
        detail: ProductDetail;
    };
}


export interface ProductGetListErr {
    type: typeof PRODUCT_GET_LIST_ERR;
    payload: CommonError;
}
export interface ProductGetListReq {
    type: typeof PRODUCT_GET_LIST_REQ;
    payload: {
        category: string;
        sub: string;
        offset: number;
        page: number;
    };
}
export interface ProductGetListRes {
    type: typeof PRODUCT_GET_LIST_RES;
    payload: ProductGetListPayload;
}
export type ProductAction = ProductGetDetailErr
    | ProductGetDetailReq
    | ProductGetDetailRes
    | ProductGetListErr
    | ProductGetListReq
    | ProductGetListRes;

export const productGetDetailErr = (payload: ProductGetDetailErr['payload']): ProductGetDetailErr => ({
    type: PRODUCT_GET_DETAIL_ERR,
    payload,
});
export const productGetDetailReq = (payload: ProductGetDetailReq['payload']): ProductGetDetailReq => ({
    type: PRODUCT_GET_DETAIL_REQ,
    payload,
});
export const productGetDetailRes = (payload: ProductGetDetailRes['payload']): ProductGetDetailRes => ({
    type: PRODUCT_GET_DETAIL_RES,
    payload,
});

export const productGetListErr = (payload: ProductGetListErr['payload']): ProductGetListErr => ({
    type: PRODUCT_GET_LIST_ERR,
    payload,
});
export const productGetListReq = (payload: ProductGetListReq['payload']): ProductGetListReq => ({
    type: PRODUCT_GET_LIST_REQ,
    payload,
});
export const productGetListRes = (payload: ProductGetListRes['payload']): ProductGetListRes => ({
    type: PRODUCT_GET_LIST_RES,
    payload,
});
