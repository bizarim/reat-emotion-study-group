import { call, put } from 'redux-saga/effects';
import { API } from '../../../api';
import {
    ProductGetListReq, productGetListRes, productGetListErr,
} from '../actions';

export function* getProductListSaga(action: ProductGetListReq) {
    try {
        const {
            category,
            sub,
            offset,
            page,
        } = action.payload;
        const rs = yield call(API.get({ apiService: 'product' }), `/list?category=${category}&sub=${sub ? sub : 'all'}&offset=${offset}&page=${page}`);
        yield put(productGetListRes(rs));
    } catch (error) {
        yield put(productGetListErr(error));
    }
}
