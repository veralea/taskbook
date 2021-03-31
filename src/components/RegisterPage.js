import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import RegisterForm from './RegisterForm'
import Header from './Header'
import {setCurrentUrl} from '../redux/actions'

const RegisterPage = (props)=>{
    
        props.setCurrentUrl(props.location.pathname)

        return (
            <div>
                <Header />
                <br/>
                <RegisterForm />
                <br/>
                <div><Link to={'/' }>На главную</Link></div>
            </div>)
    
}

const mapDispatchToProps = {
    setCurrentUrl
}
export default connect(null,mapDispatchToProps)(RegisterPage)