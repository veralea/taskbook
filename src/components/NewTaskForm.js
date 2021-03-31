import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createTask,getTasks} from '../redux/actions'


class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            text: ''
        };
        
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

     async submitHandler(event) {
        event.preventDefault()
        this.props.createTask(this.state.username,this.state.email,this.state.text,this.props.currentPageNumber,this.props.sort);

          this.setState({
            username:'',
            email: '',
            text: ''

        })
    
    } 

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev,...{
            [event.target.name]: event.target.value
        }}))
  
    }
    componentDidMount() {
        this.props.getTasks(this.props.currentPageNumber,this.props.sort);
     }

    render() {
        return (
            <div className="col-lg-3">
                <h3>Создание задачи</h3>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Имя пользователя</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            placeholder="Имя пользователя" 
                            value={this.state.username} 
                            onChange={this.changeInputHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>        
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={this.changeInputHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label >Текст задачи</label>        
                        <input 
                            type="text" 
                            className="form-control" 
                            name="text" 
                            placeholder="Текст задачи"
                            value={this.state.text} 
                            onChange={this.changeInputHandler} 
                        />
                    </div>   
                
                    <button type="submit" className="btn btn-success">Создать задачу</button>

                </form>
            </div>
        )
      }


}

const mapStateToProps = state => {
    return {
        currentPageNumber: state.Tasks.currentPageNumber,
        sort: state.Tasks.sort
    }
}

const mapDispatchToProps = {
    createTask,
    getTasks
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTaskForm)      