import React, { Component } from 'react';
import {connect} from 'react-redux'
import Task from './Task';
import Pagination from './Pagination';
import Sort from './Sort';



class TasksList extends Component {

 render() {
   return (
    <div className="col-lg-9">      
        <h2>Список задач</h2>
        <h5>Сортировать по: </h5>
        <Sort />
        <table className="table">
            <thead>
                <tr>
                    <th>Имя пользователя</th>               
                    <th>Email</th>    
                    <th>Текст задачи</th>
                    <th>Статус</th>
                    {this.props.isAdmin && <th>Выполнено/<br/>Отредактировано администратором</th>}       
                </tr>
            </thead>
            <tbody>
            {
                this.props.tasks.map((task)=>{  
                    return <Task id={task.id} username={task.username} email={task.email} text={task.text} status={task.status} key={task.id}/>
                })
            }
            </tbody>
        </table>
        <Pagination />
    </div>
   )
 }
}

const mapStateToProps = state => {
    
    return {
        isAdmin:state.Admin.isAdmin,
        token:state.Admin.token,
        tasks:state.Tasks.tasks      
    }
    
}

export default connect(mapStateToProps,null)(TasksList)