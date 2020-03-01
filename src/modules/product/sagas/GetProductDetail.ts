import { call, put } from 'redux-saga/effects';
import { API } from '../../../api';
import {
    ProductGetDetailReq,
    productGetDetailRes,
    productGetDetailErr,
} from '../actions';

export function* getProductDetailSaga(action: ProductGetDetailReq) {
    try {
        const rs = yield call(API.get({ apiService: 'product' }), '', action.payload);
        yield put(productGetDetailRes(rs));
    } catch (error) {
        yield put(productGetDetailErr(error));
    }
}
