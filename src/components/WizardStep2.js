import React from 'react';
import { connect } from 'react-redux';
import { updateImg } from '../ducks/reducer';
import { Link } from 'react-router-dom';

const WizardStep2 = props => (
  <div className='wizard2Main'>
    <nav className="wizard2Nav">
      <h1 className='wizard2Title'>Add New Listing</h1>
      <Link to="/">
        <button className="wizardCancel"> Cancel </button>
      </Link>
    </nav>
    <main className="step2Main">
      <h3> Image URL: </h3>
      <input className='step2Input' onchange={(e) => this.props.updateImg(e.targte.value)}></input>
    </main>
    <footer className="step2Footer">
      <Link to="/wizard">
        <button className="wizardNext"> Previous Step</button>
      </Link>
      <Link to='/wizard/step3'>
        <button className="wizardNext"> next Step</button>
      </Link>
    </footer>
  </div>
)

const mapStateToProps = state => {
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, { updateImg })( WizardStep2 )
