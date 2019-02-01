import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateOne} from '../../ducks/reducer'

class WizardOne extends Component{
    constructor(){
        super()

        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip
        })
    }
    handleUpProperty(val){
        this.setState({name:val})
    }
    handleUpAddress(val){
        this.setState({address:val})
    }
    handleUpCity(val){
        this.setState({city:val})
    }
    handleUpState(val){
        this.setState({state:val})
    }
    handleUpZip(val){
        this.setState({zip:val})

    }
  
    render(){
        console.log('props',this.props.zip)
        console.log('local state',this.state.zip)
        const {name,address,city,state,zip} = this.state;
        return(
            <div>
                <h2>Add New Listing</h2>
                <h3>Property Name</h3>
                <input onChange ={(e) => this.handleUpProperty(e.target.value)} value = {this.state.name}></input>
                <h3>Address</h3>
                <input onChange ={(e) => this.handleUpAddress(e.target.value)} value = {this.state.address}></input>
                <h3>City</h3>
                <input onChange ={(e) => this.handleUpCity(e.target.value)} value = {this.state.city}></input>
                <h3>State</h3>
                <input onChange ={(e) => this.handleUpState(e.target.value)} value ={this.state.state}></input>
                <h3>Zip</h3>
                <input onChange ={(e) => this.handleUpZip(e.target.value)} value = {this.state.zip}></input>   
                <Link to='/wizard/step2' onClick={() => this.props.updateOne(name,address,city,state,zip)}><button >Next Step</button></Link>      
            </div>
        )
    }
}

function mapStateToProps(reduxState){
   const {name,address,city,state,zip} = reduxState;
   
   return{
       name,
       address,
       city,
       state,
       zip
   }
   }

export default connect(mapStateToProps,{updateOne})(WizardOne)