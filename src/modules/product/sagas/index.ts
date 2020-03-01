// tslint:disable-next-line
import { takeEvery } from 'redux-saga/effects';
import {
    PRODUCT_GET_DETAIL_REQ,
    PRODUCT_GET_LIST_REQ,
} from '../constants';
import { getProductListSaga } from './GetProductListSaga';
import { getProductDetailSaga } from './GetProductDetail';

export function* rootProductSaga() {
    yield takeEvery(PRODUCT_GET_LIST_REQ, getProductListSaga);
    yield takeEvery(PRODUCT_GET_DETAIL_REQ, getProductDetailSaga);
}
