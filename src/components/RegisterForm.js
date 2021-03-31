import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setIsAdmin} from '../redux/actions'


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
            };
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
     }

    async submitHandler(event) {
        event.preventDefault()
        this.props.setIsAdmin(this.state.username,this.state.password)

        this.setState({
            username:'',
            password:''
        })
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev,...{
            [event.target.name]: event.target.value
        }}))
    }
     
    render() {
        return (
            
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
                    <label>Пароль</label>        
                    <input 
                        type="text" 
                        className="form-control" 
                        name="password" 
                        placeholder="Пароль"
                        value={this.state.password} 
                        onChange={this.changeInputHandler} 
                    />
                </div>
                <button type="submit" className="btn btn-success">Войти</button>
                <div>

                </div>
            </form>
          
        )
      }
}
const mapDispatchToProps = {
    setIsAdmin
}    
export default connect(null,mapDispatchToProps)(RegisterForm) 