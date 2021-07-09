import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { FaHome, FaCoins, FaVideo, FaUser, FaInfo } from 'react-icons/fa';

class SideMenu extends React.Component {
  onMouseEnter = () => {
    let x = document.getElementsByClassName('opener-black')[0];
    x.classList.add('opener-white');
    x.classList.remove('opener-black');
  };

  onMouseLeave = () => {
    let x = document.getElementsByClassName('opener-white')[0];
    x.classList.add('opener-black');
    x.classList.remove('opener-white');
  };

  onOpenerClick = () => {
    let x = document.getElementsByClassName('side-menu')[0];
    if (x.classList.contains('opened')) x.classList.remove('opened');
    else x.classList.add('opened');
  };

  render() {
    return (
      <div className='side-menu'>
        <div className='items-container'>
          <div className='content'>
            {this.props.campaign ? this.props.campaign.description : ''}
          </div>
          <div className='item'>
            <FaHome size={20} />
          </div>
          <div className='content'>
            {this.props.campaign ? this.props.campaign.description : ''}
          </div>
          <div className='item'>
            <FaVideo size={20} />
          </div>
          <div className='content'>
            {this.props.campaign ? this.props.campaign.description : ''}
          </div>
          <div className='item'>
            <FaCoins size={20} />
          </div>
          <div className='content'>
            {this.props.campaign ? this.props.campaign.description : ''}
          </div>
          <div className='item'>
            <FaUser size={20} />
          </div>
          <div className='content'>
            {this.props.campaign ? this.props.campaign.description : ''}
          </div>
          <div className='item'>
            <FaInfo size={20} />
          </div>
        </div>
        <div
          className='opener-black'
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onOpenerClick}
        >
          <div className='top-triangle'></div>
          <div className='middle-rectangle'></div>
          <div className='bottom-triangle'></div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  if (state.campaignsReducer.selectedCampaign)
    return {
      campaign: state.campaignsReducer.selectedCampaign
    };
  else return {};
};

export default connect(mapState)(SideMenu);
