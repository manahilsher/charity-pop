import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

import { fetchCampaignsThunk } from '../store/actions';

import CampaignCard from '../components/CampaignCard';

class Profile extends React.Component {
  state = {
    user: null,
    authFailed: false
  };

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(async () => {
        const user = await Auth.currentUserInfo();
        this.setState({ user });
        await this.props.fetchCampaignsThunk();
      })
      .catch(() => {
        this.setState({ authFailed: true });
      });
  }

  renderCampaigns = () => {
    const userCampaigns = this.props.campaigns.filter(
      c => c.ownerID === this.state.user.id
    );
    if (userCampaigns.length === 0) {
      return <div>You have no Campaigns! Click to create one now</div>;
    }
    const campaigns = userCampaigns.map(c => {
      return <CampaignCard key={c.id} campaign={c} />;
    });
    return campaigns;
  };

  render() {
    if (this.state.authFailed) return <Redirect to='/login' />;
    return (
      <>
        {this.state.user ? (
          <div className='ui container'>
            <div>{this.state.user.username}</div>
            <div>Your Campaigns:</div>
            <div>{this.props.campaigns ? this.renderCampaigns() : null}</div>
          </div>
        ) : null}
      </>
    );
  }
}

const mapState = state => {
  return {
    campaigns: state.campaignsReducer.campaigns
  };
};

export default connect(mapState, { fetchCampaignsThunk })(Profile);
