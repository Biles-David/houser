import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, newListing } from '../ducks/reducer';
import { Link } from 'react-router-dom';

class WizardStep3 extends Component {
  render(){
    let { name, address, city, state, zip, img, mortgage, rent } = this.props
    let addListing = { name, address, city, state, zip: +zip, img, mortgage: +mortgage, rent: +rent }
    return(
      <div className="step3Main">
    <nav className="wizard2Nav">
      <h1 className='wizard2Title'>Add New Listing</h1>
      <Link to="/">
        <button className="wizardCancel"> Cancel </button>
      </Link>
    </nav>
    <div> {`Recommended Rent: $${this.props.mortgage? this.props.mortgage /= 1.25 : 0}`}</div>
    <main className='step3Body'>
      <div>
        <h3> Monthly Mortgage Amount</h3>
        <input className="step3Input" onChange={(e) => this.props.updateMortgage(e.target.value)}></input>
      </div>
      <div>
        <h3> Desired Monthly Rent </h3>
        <input className="step3Input" onChange={(e) => this.props.updateRent(e.target.value)}></input>
      </div>
    </main>
    <footer className="step2Footer">
      <Link to="/wizard/step2">
        <button className="wizardNext"> Previous Step</button>
      </Link>
      <Link to='/'>
        <button className="step3Complete" onClick={() => this.props.newListing(addListing)}> Complete </button>
      </Link>
    </footer>
  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    cityState: state.cityState,
    zip: state.zip,
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent
  }
}

export default connect(mapStateToProps, { updateMortgage, updateRent, newListing })(WizardStep3)
