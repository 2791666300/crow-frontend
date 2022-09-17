import { createSelector } from 'reselect'

// 用户更新并不会影响categories数据

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
export const selectorCategoriseMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {   // categories = state.categories.categories
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)
// export const selectorCategoriseMap = (state) => {
//     console.log('selector')
//     return state.categories.categories.reduce((acc, category) => {
//         const { title, items } = category;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {})
// };

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)