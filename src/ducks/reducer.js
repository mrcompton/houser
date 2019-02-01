const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: '',
    rent: ''
}
const UPDATE_ONE = 'UPDATE_ONE'
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_THREE = 'UPDATE_THREE'


export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_ONE:
            return Object.assign({},state,action.payload)
        case UPDATE_IMAGE:
            return Object.assign({},state,{image: action.payload})
        case UPDATE_THREE:
            return Object.assign({},state,action.payload)
        default:
            return state;
    }
}

export function updateOne(name,address,city,state,zip){
    const oneObj = {name,address,city,state,zip}
    console.log(oneObj)
    return{
        type: UPDATE_ONE,
        payload: oneObj
    }
}

export function updateImage(image){
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}
export function updateThree(mortgage,rent){
    const threeObj = {mortgage,rent}
    return{
        type: UPDATE_THREE,
        payload: threeObj
    }
}

