import { takeLatest, all, call, put } from 'redux-saga/effects'


import { getAllShopDatas } from '../../utils/getAllShopDatas';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync() {
    try{
        const categoryArray = yield call(getAllShopDatas)
        yield put(fetchCategoriesSuccess(categoryArray))
    }catch(error){
        yield put(fetchCategoriesFailed(error))

    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}