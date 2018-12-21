import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListings, deleteListing } from '../ducks/reducer'; 

class Dashboard extends Component {

  componentDidMount(){
    this.props.getListings();
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(this.props.listings !== this.prevState.listings) {
  // //     this.props.getListings()
  //     console.log('works')
  //   }
  // }

  render(){
    let { listings } = this.props
    let map = listings.map( ( e,i ) => {
      return (
        <div className="listingBox">
          <Link to={`/house/${i}`}>
            <img className='listingImg' src={listings[i].img}/>
          </Link>
          <button className='dashboardDelete' onClick={() => console.log(this.props.listings[i].id) || deleteListing(this.props.listings[i].id)}>X</button>
          <div className='listingWhole'>
            <span className="listingAns"><p>Property Name:</p> <p className='answer'> {listings[i].name} </p></span>
            <span className="listingAns"><p>Address: </p> <p className='answer'> {listings[i].address} </p></span>
            <span className="listingAns"><p>City:</p> <p className='answer'> {listings[i].city} </p></span>
            <span className="listingAns"><p>Stae:</p> <p className='answer'> {listings[i].state} </p></span>
            <span className="listingAns"><p>Zip:</p> <p className='answer'> {listings[i].zip} </p></span>
            <span className="listingAns"><p>Monthly Mortgage:</p> <p className='answer'> {listings[i].mortgage} </p></span>
            <span className="listingAns"><p>Desired Rent:</p> <p className='answer'> {listings[i].rent} </p></span>
          </div>
        </div>
      )
    }

    )
    return(
      <div className='dashboardMain'>
        <nav className='dashboardNav'>
          <h1 className='dashboardNavTitle'>Dashboard</h1>
          <Link to="/wizard">
            <button className="dashboardNavBtn"> Add New Property </button>
          </Link>
        </nav>
        <main>
          {/* {console.log(this.props)} */}
          <h3 className='answerTitle'>Home Listings</h3>
          { map }
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default connect( mapStateToProps, { getListings, deleteListing } ) (Dashboard);