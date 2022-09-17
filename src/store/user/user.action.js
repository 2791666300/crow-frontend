import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)


export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)


// 登录
export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_EMAIL, { email, password })

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)



// 注册
export const signUpStart = (email, password, name, passwordConfirm) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, name, passwordConfirm })

export const signUpSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user })

export const signUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)


// 登出
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)