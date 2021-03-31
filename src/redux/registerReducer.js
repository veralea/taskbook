import {SET_IS_ADMIN} from './types'

const initialState = {
    isAdmin: false,
    token:''
}
export const registerReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_IS_ADMIN:         
            return {...state,isAdmin:action.payload.isAdmin,token:action.payload.token}
   
        default:
            return state
    }
}