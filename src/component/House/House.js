import React from 'react'
import './House.css'

const House = (props) => {
    return (
        <div id="eachHouse">
            <button onClick={() => props.deleteHouseFn(props.eachHouse.house_id)}>X</button>
            <h6>Property Name: {props.eachHouse.property_name}</h6>
            <h6>Address: {props.eachHouse.address}</h6>
            <h6>City: {props.eachHouse.city}</h6>
            <h6>State: {props.eachHouse.state}</h6>
            <h6>Zip: {props.eachHouse.state}</h6>
        </div>
        
    )
}

export default House