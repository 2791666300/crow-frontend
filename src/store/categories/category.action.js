import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// import { getAllShopDatas } from "../../utils/getAllShopDatas";

// export const setCategories = (categoriesArray) =>
//     createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)



export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)


// redux-thunk实例

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try {
//         const categoryArray = await getAllShopDatas();
//         dispatch(fetchCategoriesSuccess(categoryArray))
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }
// }