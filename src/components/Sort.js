import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setSort,getTasks} from '../redux/actions'


class Sort extends Component {
    constructor(props) {
        super(props);

        this.setCurrentSort = this.setCurrentSort.bind(this);
    }
    
    async setCurrentSort(str){
        this.props.setSort(str);      
        this.props.getTasks(this.props.currentPageNumber,str);
    } 

 
    componentDidMount() {
      this.props.getTasks(this.props.currentPageNumber,this.props.sort);
    }

    render() {
        return (
            <div className="btn-group">
                                 
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=username&sort_direction=asc')}>
                  username ↑
                </button>
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=username&sort_direction=desc')}>                       
                  username ↓ 
                </button>
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=email&sort_direction=asc')}>
                  email ↑
                </button>
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=email&sort_direction=desc')}>                       
                  email ↓ 
                </button>
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=status&sort_direction=asc')}>
                  status ↑
                </button>
                <button className="btn btn-default" onClick={e=>this.setCurrentSort('&sort_field=status&sort_direction=desc')}>                       
                  status ↓ 
                </button>                
            </div>
        )
      }
}
const mapDispatchToProps = {
    setSort,
    getTasks
}

const mapStateToProps = state => {
    
    return {
        currentPageNumber: state.Tasks.currentPageNumber,
        sort: state.Tasks.sort
    }
    
}
     
export default connect(mapStateToProps,mapDispatchToProps)(Sort)