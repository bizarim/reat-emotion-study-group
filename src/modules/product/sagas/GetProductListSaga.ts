import { call, put } from 'redux-saga/effects';
import { API } from '../../../api';
import {
    ProductGetListReq, productGetListRes, productGetListErr,
} from '../actions';

export function* getProductListSaga(action: ProductGetListReq) {
    try {
        const rs = yield call(API.get({ apiService: 'product' }), '', action.payload);
        yield put(productGetListRes(rs));
    } catch (error) {
        yield put(productGetListErr(error));
    }
}
