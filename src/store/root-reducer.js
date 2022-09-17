import { combineReducers } from 'redux'


import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'

// 创建一个合并的reducer 也就是根
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})