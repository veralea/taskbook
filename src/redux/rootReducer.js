import {combineReducers} from 'redux'
import {registerReducer} from './registerReducer'
import {tasksReducer} from './tasksReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    Admin:registerReducer,
    Tasks:tasksReducer,
    App:appReducer
})