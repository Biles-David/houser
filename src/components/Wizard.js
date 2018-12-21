import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newListing, updateName, updateAddress, updateCity, updateState, updateZip} from '../ducks/reducer';


class Wizard extends Component {
  // constructor (props){
  //   super(props)
  //   this.state = {
  //     name: '',
  //     address: '',
  //     city: '',
  //     cityState: '',
  //     zip: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // handleChange (e){
  //   this.setState({
  //     [e.target.name]:e.target.value
  //   })
  // }

  render(){
    let { name, address, city, state, zip } = this.props
    let addListing = { name, address, city, state, zip: +zip }
    return (
      <div className='wizardMain'>
        <nav className="wizardNav">
          <h1>Add New Listing</h1>
          <Link to="/">
          <button className="wizardCancel"> Cancel </button>
          </Link>
        </nav>
        <main className="wizardBody">
          <div className='wizardText'>
            <h3>Property Name:</h3>
            <input className='wizardInput' name='name' onChange={(e) => this.props.updateName(e.target.value)}></input>
          </div>
          <div className='wizardText'>
            <h3>Address:</h3>
            <input className='wizardInput' name='address' onChange={ (e) => this.props.updateAddress(e.target.value) }></input>
          </div>
          <div className='wizardText'>
            <h3>City:</h3>
            <input className='wizardInput' name='city' onChange={ (e) => this.props.updateCity(e.target.value) }></input>
          </div>
          <div className='wizardText'>
            <h3>State:</h3>
            <input className='wizardInput' name='cityState' onChange={ (e) => this.props.updateState(e.target.value) }></input>
          </div>
          <div className='wizardText'>
            <h3>Zip:</h3>
            <input className='wizardInput' name='zip' onChange={ (e) => this.props.updateZip(e.target.value) }></input>
          </div>
        </main>
        <Link to="/wizard/step2">
        <button className="wizardNextStep" 
        onClick={
          /*() => this.props.newListing(addListing)*/
          console.log('HI')
          }>Next Step</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    name: state.name,
    address: state.address,
    city: state.city,
    cityState: state.cityState,
    zip: state.zip,
  }
}

export default connect( mapStateToProps, { newListing, updateName, updateAddress, updateCity, updateState, updateZip } ) (Wizard);