import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';
// import $ from 'jquery';

// import { fetchCampaignThunk } from '../store/actions';

class Header extends React.Component {
  signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  campaignsPageHeader = () => {
    return (
      <div id='header'>
        <div className='main-header'>
          <div id='menu'>
            <div className='menu-item-container'>
              <Link to='/'>
                <div className='logo'>
                  <img
                    src='/red-balloon.png'
                    alt='red-balloon-logo'
                    className='header-logo'
                  />
                </div>
              </Link>
            </div>
            <div className='menu-item-container'>
              <Link to='/build-campaign'>
                <div className='menu-item'>
                  <FaPlus size={20} />
                </div>
              </Link>
            </div>
            <div className='menu-item-container'>
              <div className='menu-item' onClick={this.signOut}>
                <FaSignOutAlt size={20} />
              </div>
            </div>
          </div>
          <div className='heading' id='charity-pop-heading'>
            CHARITY POP
          </div>
          <div className='stats'>$402 raised today</div>
        </div>
      </div>
    );
  };

  campaignPageHeader = () => {
    return null;
  };

  render() {
    return (
      <>
        {window.location.pathname.substr(0, 10) === '/campaign/'
          ? this.campaignPageHeader()
          : this.campaignsPageHeader()}
      </>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  if (state.campaignsReducer.selectedCampaign)
    return {
      campaign: state.campaignsReducer.selectedCampaign,
      campaigns: state.campaignsReducer.campaigns
    };
  else return {};
};

export default connect(mapState)(Header);
