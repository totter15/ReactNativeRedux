import {combineReducers} from 'redux'
import auth from './auth'
import todos from './todos'

const rootReducer = combineReducers({
    auth,
    todos
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer