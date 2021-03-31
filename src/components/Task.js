import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTasks,editTask} from '../redux/actions'

var currStatus = '0';
var currText = '';
class Task extends Component {
     
    constructor(props) {
        super(props);    
        this.state = {
            currText: ''   
        };

        this.setCurrentStatus = this.setCurrentStatus.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.saveText = this.saveText.bind(this);
    }

    setCurrentStatus(event){
        let checked = event.target.checked;
        
        if(checked===true){
             currStatus = this.props.status + 10;
        }
        this.props.editTask(this.props.id,currStatus,this.state.currText,this.props.token,this.props.currentPageNumber,this.props.sort)
    }
    

    onTextChange(event) {
        this.setState({ currText: event.target.value });
    }

    saveText(event){
        event.preventDefault();
        if(this.props.text !== this.state.currText ){
            if (this.props.status===0||this.props.status===10){
                currStatus = this.props.status+1;
            }else{
                currStatus = this.props.status;    
            }
            this.props.editTask(this.props.id,currStatus,this.state.currText,this.props.token,this.props.currentPageNumber,this.props.sort)        
        }
    }
    
    componentDidMount() {
        currText = this.props.text;
        this.setState({
            currText: currText
        })
    }

    render() {

        return (
         <tr>
             <td>{this.props.username}</td> 
             <td>{this.props.email}</td>            
             <td>
                 <form onSubmit={this.saveText}>                   
                    <textarea type="textarea" className="form-control" value={this.state.currText} onChange={this.onTextChange}></textarea>
                    <br/>
                    <button type="submit" className="btn btn-primary" >Сохранить</button>
                </form>               
             </td>
             <td>{this.props.status}</td>
             {this.props.isAdmin && <td>
                <div className="form-check form-check-inline">
                     <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={(this.props.status===11||this.props.status===10) && "checked"} 
                        onChange={this.setCurrentStatus} 
                     />
                </div>
                <div className="form-check form-check-inline">
                     <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={(this.props.status===11||this.props.status===1) && "checked"} 
                        onChange={this.setCurrentStatus}
                        disabled
                     />
                </div>
             </td>}
             
         </tr>
        )
      }
}

const mapStateToProps = state => {
    
    return {
        isAdmin:state.Admin.isAdmin,
        token:state.Admin.token,
        currentPageNumber: state.Tasks.currentPageNumber,
        sort: state.Tasks.sort     
    }
    
}
const mapDispatchToProps = {
    getTasks,
    editTask
}
     
export default connect(mapStateToProps,mapDispatchToProps)(Task)   