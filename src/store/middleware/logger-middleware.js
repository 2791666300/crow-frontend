// 中间件 作用与 组件 和 reducer 之间
export const middlewareLogger = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }
    console.log('type1: ', action.type)
    console.log('payload: ', action.payload)
    console.log('pre-start: ', store.getState())
    next(action)
    console.log('next-start', store.getState())
}

