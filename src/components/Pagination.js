import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setPageNumber,getTasks} from '../redux/actions'


class Pagination extends Component {
    constructor(props) {
        super(props);

        this.setCurrentPageNumber = this.setCurrentPageNumber.bind(this);
    }
    
    setCurrentPageNumber(num){
        this.props.setPageNumber(num);
        this.props.getTasks(num,this.props.sort);
    } 

    componentDidMount() {
        this.props.getTasks(this.props.currentPageNumber,this.props.sort);
    }

    render() {
        return (
            <div className="btn-group">                
                {
                this.props.pages.map((page,ind)=>{
                    return <button className="btn btn-primary" key={ind.toString()} onClick={e=>this.setCurrentPageNumber(page)}>{page}</button>
                    
                })   

                }
            </div>
        )
      }
}
const mapDispatchToProps = {
    setPageNumber,
    getTasks
}

const mapStateToProps = state => {
    
    return {
        pages:state.Tasks.pages,
        currentPageNumber: state.Tasks.currentPageNumber,
        sort:state.Tasks.sort
    }
    
}
     
export default connect(mapStateToProps,mapDispatchToProps)(Pagination)