import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houseList: []
        }

        this.handleDeleteHouse = this.handleDeleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then((res) => {
            console.log('Component Did Mount')
            this.setState({houseList: res.data})
        })
    }

    handleGetHouses(){
        axios.get('/api/houses')
        .then((res) => {
            console.log(res.data)
            this.setState({houseList: res.data})
        })
    }

    handleDeleteHouse(id){
        axios.delete(`/api/house/${id}`)
        .then((res) => {console.log(res)
        this.handleGetHouses()
        })
    }
    render(){
        let mappedHouses = this.state.houseList.map((eachHouse)=> {
            return(
                <House 
                key = {eachHouse.house_id} 
                eachHouse = {eachHouse}
                deleteHouseFn = {this.handleDeleteHouse}
                />
            )
        })
        return(
            <div>Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )   
    }
}

export default Dashboard