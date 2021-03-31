import {CREATE_TASK,EDIT_TASK,GET_TASKS,SET_PAGE_NUMBER,SET_SORT,SHOW_ALERT,HIDE_ALERT} from './types'


const initialState = {   
    tasks:[],
    pages:[1],
    currentPageNumber: 1,
    sort:'',
    alert:null
    
}
export const tasksReducer = (state=initialState, action)=>{
    switch(action.type){
        case CREATE_TASK:
            return state
        case EDIT_TASK:
            return state    
        case GET_TASKS:         
            return {...state,tasks:action.payload.tasks,pages:action.payload.pages,currentPageNumber:state.currentPageNumber,sort:state.sort}                
        case SET_PAGE_NUMBER:         
            return {...state, currentPageNumber:action.payload} 
        case SET_SORT:
            return{...state,sort:action.payload}                   
        case SHOW_ALERT:
            return{...state,alert:action.payload}
        case HIDE_ALERT:
            return{...state,alert:null}    
        default:
            return state
    }
}