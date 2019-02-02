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

    componentDidMount(){
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
    }
    handleUpMortgage(val){
        this.setState({mortgage: val})
    }
    handleUpRent(val){
        this.setState({rent: val})
    }

    handleAddHouse(){
        const bodyObj = {
            property_name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }

        axios.post('/api/house',bodyObj)
        .then((res) => {console.log(res)})
    }

    render(){
        const {mortgage,rent} = this.state;
        return(
            <div>
                <h2>Add New Listing</h2>
                <h3>Monthly Mortgage Amount</h3>
                <input onChange ={(e) => this.handleUpMortgage(e.target.value)} value = {this.state.mortgage}></input>
                <h3>Desired Monthly Rent</h3>
                <input onChange ={(e) => this.handleUpRent(e.target.value)} value = {this.state.rent}></input> 
                <Link to='/wizard/step2' onClick={() => this.props.updateThree(mortgage,rent)}><button >Previous Step</button></Link>   
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