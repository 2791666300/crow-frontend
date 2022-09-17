import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoding: false,
    error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        // case USER_ACTION_TYPES.SET_CURRENT_USER:
        //     return {
        //         ...state,
        //         currentUser: payload,
        //     };
        // case USER_ACTION_TYPES.CHECK_USER_SESSION:
        //     return {
        //         ...state,
        //         isLoding: true
        //     };
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload, isLoding: false };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null }

        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {
                ...state,
                error: payload,
                isLoding: false
            };

        // 当这个reducer没有什么action被触发时，便返回默认值
        default:
            return state
    }
};
