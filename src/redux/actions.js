import {SET_IS_ADMIN,GET_TASKS,SET_PAGE_NUMBER,SET_SORT,CREATE_TASK,EDIT_TASK,SHOW_ALERT,HIDE_ALERT,SET_CURRENT_URL} from './types'
import {SERVER_URL} from '../config'

export function unAdmin(){
    return {
        type: SET_IS_ADMIN,
        payload: {isAdmin:false, token:''}
    }
} 
export function setIsAdmin(username,password){   
    const url = SERVER_URL+'/login?developer=Vera';
    var form = new FormData();
    form.append("username", username);
    form.append("password", password);
    return async dispatch =>{
        const response = await fetch(url,{method: 'POST', body: form })
        const json = await response.json();
        if ("undefined" !== typeof json.message.token){
            let token = JSON.stringify(json.message.token).replace(/"/g,'');
            dispatch({
                type:SET_IS_ADMIN,
                payload: {isAdmin:true, token:token}
            });
            alert("Авторизация прошла успешно!");  
        }else if("undefined" !== typeof json.message.password){
            dispatch({
                type:SET_IS_ADMIN,
                payload: {isAdmin:false, token:''}
            });
            alert(json.message.password);
        }        
    }
}
function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          result += i + " : " + obj[i] + "\n";
      }
    }
    return result;
}

export function createTask(username,email,text,page,sort){
    const url = SERVER_URL+'/create?developer=Vera';
    const form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("text", text);
    return async dispatch =>{
        const response = await fetch(url,{method: 'POST', body: form })
        const json = await response.json();
        if (json.status === 'ok'){
            alert("Задача добавлена успешно!");
            dispatch({type: CREATE_TASK});
            setTimeout(()=>{dispatch(getTasks(page,sort))},100)
        }else{
            dispatch({ type: SHOW_ALERT,payload: showProps(json.message,"json.message")});
            setTimeout(()=>{dispatch(hideAlert())},3000)
        }
        
    }
}

export function editTask(id,status,text,token,page,sort){

        const url = SERVER_URL+'/edit/'+id+'/?developer=Vera';
        const form = new FormData();
            form.append("token", token);
            form.append("status", status);
            form.append("text", text);
        return async dispatch =>{
            const response = await fetch(url,{method: 'POST', body: form })
            const json = await response.json();
            if (json.status === 'ok'){
                dispatch({type: EDIT_TASK});
                setTimeout(()=>{dispatch(getTasks(page,sort))},100)
            }else{
                dispatch({ type: SHOW_ALERT,payload: showProps(json.message,"json.message")+"У Вас нет прав для редактирования задачи. Необходимо авторизаваться."});
                setTimeout(()=>{dispatch(hideAlert())},5000)
            }
            
        }

}


export function getTasks(currentPageNumber,sort){
    const url =   SERVER_URL+'/?developer=Vera&page='+currentPageNumber+sort  
    return async dispatch =>{
        const response = await fetch(url)
        const json = await response.json();
        let pages = [1];
        let num = Number(json.message.total_task_count);
        if(num>1){
           for(let i = 2; i<Math.floor(num/3)+(num%3>0?2:1);i++){
               if (pages.indexOf(i) === -1){         
                   pages.push(i);
               }          
           }
       
        }
        dispatch({type: GET_TASKS, payload: {tasks:json.message.tasks,pages:pages}})
    }

}

export function setPageNumber(num){
    return {
        type: SET_PAGE_NUMBER,
        payload: num
    }
}

export function setSort(str){
    return {
        type: SET_SORT,
        payload: str
    }
}


export function showAlert(text){
    return dispatch => {
       dispatch(
        {
            type: SHOW_ALERT,
            payload: text
        }
       )
       setTimeout(()=>{dispatch(hideAlert())},3000) 
    }
 
}

export function hideAlert(){
    return{
        type: HIDE_ALERT
    }
}

export function setCurrentUrl(url){
    return {
        type: SET_CURRENT_URL,
        payload: url
    }
}



