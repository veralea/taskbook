import {SET_CURRENT_URL} from './types'

const initialState = {
    currentUrl: '/'
}
export const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_URL:         
            return {...state,currentUrl:action.payload}  
        default:
            return state
    }
}