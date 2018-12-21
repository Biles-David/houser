import axios from 'axios';

const GET_LISTINGS = 'GET_LISTINGS'
const NEW_LISTING = 'NEW_LISTING'
const DELETE_LISTING = 'DELETE_LISTING'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'

export function getListings (){
  return {
    type: GET_LISTINGS,
    payload: axios.get('/api/listings')
  }
}

export function newListing (addListing){
  return {
    type: NEW_LISTING,
    payload: axios.post('/api/listings', addListing)
  }
}

export function deleteListing (id){
  return {
    type: DELETE_LISTING,
    payload: axios.delete(`/api/listings/${id}`)
  }
}

export function updateName (name){
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateAddress (address){
  return {
    type: UPDATE_NAME,
    payload: address
  }
}

export function updateCity (city){
  return {
    type: UPDATE_NAME,
    payload: city
  }
}

export function updateState (state){
  return {
    type: UPDATE_NAME,
    payload: state
  }
}

export function updateZip (zip){
  return {
    type: UPDATE_NAME,
    payload: zip
  }
}

export function updateImg (img){
  return {
    type: UPDATE_NAME,
    payload: img
  }
}

export function updateMortgage (mortgage){
  return {
    type: UPDATE_NAME,
    payload: mortgage
  }
}

export function updateRent (rent){
  return {
    type: UPDATE_NAME,
    payload: rent
  }
}
const initialState = {
  listings: [],
  name: '',
  address: '',
  city: '',
  cityState: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: '',
}

function reducer ( state = initialState, action ) {
  switch(action.type){
    case `${GET_LISTINGS}_FULFILLED`:
    return {
      ...state,
      listings: action.payload.data
    }
    case `${NEW_LISTING}_FULFILLED`:
    return {
      ...state,
      listings: action.payload.data
    }
    case `${DELETE_LISTING}_FULFILLED`:
    return {
      ...state,
      listings: action.payload.data
    }
    case UPDATE_NAME:
    return {
      ...state,
      name: action.payload
    }
    case UPDATE_ADDRESS:
    return {
      ...state,
      address: action.payload
    }
    case UPDATE_CITY:
    return {
      ...state,
      city: action.payload
    }
    case UPDATE_STATE:
    return {
      ...state,
      cityState: action.payload
    }
    case UPDATE_ZIP:
    return {
      ...state,
      zip: action.payload
    }
    case UPDATE_IMG:
    return {
      ...state,
      img: action.payload
    }
    case UPDATE_MORTGAGE:
    return {
      ...state,
      mortgage: action.payload
    }
    case UPDATE_RENT:
    return {
      ...state,
      rent: action.payload
    }
    default:
    return state
  }
}

export default reducer;