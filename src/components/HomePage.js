import React, { Component } from 'react'
import {connect} from 'react-redux'
import NewTaskForm from './NewTaskForm'
import TasksList from './TasksList'
import Header from './Header'
import {setCurrentUrl} from '../redux/actions'

class HomePage extends Component{

    componentDidMount() {
        this.props.setCurrentUrl(this.props.location.pathname)
    }

    render(){  
        return(
            <div className="container">          
                <Header /> 
                <br/>         
                <div className="row">
                    <TasksList />
                    <NewTaskForm />             
                </div>
            </div>
            )
    }
}            

const mapDispatchToProps = {
    setCurrentUrl
}
export default connect(null,mapDispatchToProps)(HomePage)