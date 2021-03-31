import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Alert from './Alert'
import {unAdmin} from '../redux/actions'


class Header extends Component{
    constructor(props) {
        super(props);

        this.unAdmin = this.unAdmin.bind(this);
        
    }

    unAdmin(){
        this.props.unAdmin();
    }
    render(){
        return(
        <div className="row" >
            <div className="col-lg-9">
                {this.props.alert && <Alert text={this.props.alert}/>}                 
            </div>
            <div className="col-lg-3 text-right">
                {this.props.isAdmin && <button type="button" className="btn btn-info" onClick={e=>this.unAdmin()}>Выйти из Админ</button>}
                {!this.props.isAdmin && <h5><Link to={'/register' }>Вход в Админ</Link></h5>}                
            </div>
            
        </div>              
        )
    }

}
const mapStateToProps = state => {
    
    return {
        isAdmin:state.Admin.isAdmin,
        alert: state.Tasks.alert  
    }
    
}

const mapDispatchToProps = {
    unAdmin
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
