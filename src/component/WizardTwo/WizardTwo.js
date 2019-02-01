import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateImage} from '../../ducks/reducer'

class WizardTwo extends Component{
    constructor(){
        super()

        this.state={
            image: ''
        }
    }
    componentDidMount(){
        this.setState({
            image: this.props.image,
        })
    }
    handleUpImage(val){
        this.setState({image: val})
    }

    render(){
        return(
            <div>
                <h2>Add New Listing</h2>
                <h3>Image URL</h3>
                <input onChange ={(e) => this.handleUpImage(e.target.value)} value = {this.state.image}></input> 
                <Link to='/wizard/step1' onClick={() => this.props.updateImage(this.state.image)}><button >Previous Step</button></Link>  
                <Link to='/wizard/step3' onClick={() => this.props.updateImage(this.state.image)}><button >Next Step</button></Link>       
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const{image} = reduxState;

    return{
        image
    }
}
export default connect(mapStateToProps,{updateImage})(WizardTwo)