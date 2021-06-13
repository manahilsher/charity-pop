import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

import { createCampaignThunk } from '../store/actions';
import { Link } from 'react-router-dom';

class CampaignCreate extends React.Component {
  state = {
    user: null,
    authFailed: false
  };

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(async () => {
        const user = await Auth.currentUserInfo();
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ authFailed: true });
      });
  }

  renderAuthenticationPopup = () => {
    return (
      <div className='authentication-popup'>
        <div>
          Please{' '}
          <Link to={'login'} style={{ textDecoration: 'none' }}>
            <span className='login'>login</span>
          </Link>{' '}
          to create a campaign.
        </div>
      </div>
    );
  };

  render() {
    const s = this.state.authFailed;
    return (
      <>
        <div className='ui container'>
          {s ? this.renderAuthenticationPopup() : null}
          <div
            style={{ opacity: s ? 0.2 : 1, pointerEvents: s ? 'auto' : 'none' }}
          >
            Create Campaign stuff
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createCampaignThunk })(CampaignCreate);
