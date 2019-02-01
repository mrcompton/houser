import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateThree} from '../../ducks/reducer'

class WizardThree extends Component{
    constructor(){
        super()

        this.state={
            mortgage: '',
            rent: ''
        }
    }
    handleUpMortgage(val){
        this.setState({mortgage: val})
    }
    handleUpRent(val){
        this.setState({rent: val})
    }

    handleAddHouse(){
        const bodyObj = {
            property_name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        axios.post('/api/house',bodyObj)
        .then((res) => {console.log(res)})
    }

    render(){
        return(
            <div>
                <h2>Add New Listing</h2>
                <h3>Monthly Mortgage Amount</h3>
                <input onChange ={(e) => this.handleUpMortgage(e.target.value)}></input>
                <h3>Desired Monthly Rent</h3>
                <input onChange ={(e) => this.handleUpRent(e.target.value)}></input> 
                <Link to='/wizard/step2' onClick={() => this.props.updateThree()}><button >Previous Step</button></Link>   
                <Link to='/'><button onClick={() => this.handleAddHouse()}>Complete</button></Link>     
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const{name,address,city,state,zip,image,mortgage,rent} = reduxState;

    return{
        name,
        address,
        city,
        state,
        zip,
        image,
        mortgage,
        rent
    }
}
export default connect(mapStateToProps,{updateThree})(WizardThree)