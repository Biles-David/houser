import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class House extends Component {
  render(){
    let i = this.props.match.params.id
    let { listings } = this.props
    return (
      <div>
        {console.log(this.props.match)}
        <img className='listingImg' src={listings[i].img}/>        
        <div className='listingWhole'>
          <span className="listingAns"><p>Property Name:</p> <p className='answer'> {listings[i].name} </p></span>
          <span className="listingAns"><p>Address: </p> <p className='answer'> {listings[i].address} </p></span>
          <span className="listingAns"><p>City:</p> <p className='answer'> {listings[i].city} </p></span>
          <span className="listingAns"><p>Stae:</p> <p className='answer'> {listings[i].state} </p></span>
          <span className="listingAns"><p>Zip:</p> <p className='answer'> {listings[i].zip} </p></span>
          <span className="listingAns"><p>Monthly Mortgage:</p> <p className='answer'> {listings[i].mortgage} </p></span>
          <span className="listingAns"><p>Desired Rent:</p> <p className='answer'> {listings[i].rent} </p></span>
        </div>
        <Link to='/'>
          <button className='wizardCancel'> Return </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(House);