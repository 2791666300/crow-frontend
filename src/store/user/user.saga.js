import { takeLatest, all, call, put } from 'redux-saga/effects'


import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from './user.action'
import { USER_ACTION_TYPES } from './user.types'
import { login } from '../../utils/login'
import { SignUp } from '../../utils/signup'
import { logOut } from '../../utils/signout'

export function* fetchCurrentsAsync() {
    try {
        let user = {};
        if (localStorage.name) {
            user = localStorage;
        } else {
            user = null;
        }
        yield put(signInSuccess(user))
    } catch (error) {
        yield put(signInFailed(error))

    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        yield call(login, { email, password })
    } catch (error) {
        yield put(signInFailed(error))
    }
}



export function* signUp({ payload: { email, password, name, passwordConfirm } }) {
    try {
        yield call(SignUp, { email, password, name, passwordConfirm })
        yield put(signUpSuccess({ email, password }))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignup({ payload: { user } }) {
    const { email, password } = user
    yield call(login, { email, password })
}


export function* signOut() {
    try {
        yield call(logOut)
        yield localStorage.clear();
        yield put(signOutSuccess)
    } catch (error) {
        yield put(signOutFailed(error))
    }
}


export function* onFetchCurrents() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, fetchCurrentsAsync)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_EMAIL, signInWithEmail)
}


export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

// 注册完之后登录
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignup)
}


export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* CurrentsSaga() {
    yield all([
        call(onFetchCurrents),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    ])
}