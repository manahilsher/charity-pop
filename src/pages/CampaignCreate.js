import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

import {
  createCampaignThunk,
  createBalloonBundleThunk
} from '../store/actions';
import { Link } from 'react-router-dom';

class CampaignCreate extends React.Component {
  state = {
    user: null,
    authFailed: false,
    campaign: {
      id: '',
      name: '',
      blurb: '',
      description: '',
      goal: 10
    },
    balloonBundle: {
      minimum: 1,
      maximum: 10,
      interval: 1,
      campaignID: ''
    }
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

  createCampaign = async () => {
    let c = { ...this.state.campaign };
    console.log(c);
    if (c.name === '' || c.burb === '' || c.description === '' || c.goal < 10)
      alert('Incorrect Data');
    else {
      await this.props.createCampaignThunk({
        ...c,
        totalRaised: 0,
        ownerID: this.state.user.id
      });
    }
  };

  handleCampaignChange = event => {
    this.setState({
      campaign: {
        ...this.state.campaign,
        [event.target.name]: event.target.value
      }
    });
  };

  handleBalloonBundleChange = event => {
    this.setState({
      balloonBundle: {
        ...this.state.balloonBundle,
        [event.target.name]: event.target.value
      }
    });
  };

  createBalloonBundle = async () => {
    const { min, max, i } = this.state.balloonBundle;
    // min is 1
    // max is 10
    // i is 2
    // 1, 3, 5, 7, 9
    // 1 + 2(n-1)
    // how much is n
    let totalPerRound = 0;
    for (let x = min; x <= max; x += i) {
      totalPerRound += x;
    }
    console.log(totalPerRound);
    await this.props.createBalloonBundleThunk({
      active: true,
      totalRaised: 0,
      totalPerRound,
      roundsCompleted: 0,
      campaignID: this.state.balloonBundle.campaignID
    });
  };

  render() {
    const f = this.state.authFailed;
    return (
      <>
        <div className='ui container'>
          {f ? this.renderAuthenticationPopup() : null}
          <div
            style={{ opacity: f ? 0.2 : 1, pointerEvents: f ? 'none' : 'auto' }}
          >
            <div>
              <span>Name: </span>
              <input
                type='text'
                id='name'
                name='name'
                value={this.state.campaign.name}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div>
              <span>Url: </span>
              <input
                type='text'
                id='id'
                name='id'
                value={this.state.campaign.id}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div>
              <span>Blurb: </span>
              <input
                type='text'
                id='blurb'
                name='blurb'
                value={this.state.campaign.blurb}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div>
              <span>Description: </span>
              <input
                type='text'
                id='description'
                name='description'
                value={this.state.campaign.description}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div>
              <span>Goal: </span>
              <input
                type='number'
                id='goal'
                name='goal'
                value={this.state.campaign.goal}
                onChange={this.handleCampaignChange}
                min='10'
              ></input>
            </div>
            <button onClick={this.createCampaign}>Create</button>
            <div>BALLOON BUNDLE</div>
            <div>
              <span>Minimum: </span>
              <input
                type='number'
                id='minimum'
                name='minimum'
                value={this.state.balloonBundle.minimum}
                onChange={this.handleBalloonBundleChange}
                min='1'
              ></input>
            </div>
            <div>
              <span>Maximum: </span>
              <input
                type='number'
                id='maximum'
                name='maximum'
                value={this.state.balloonBundle.maximum}
                onChange={this.handleBalloonBundleChange}
                min='10'
              ></input>
            </div>
            <div>
              <span>Interval: </span>
              <input
                type='number'
                id='interval'
                name='interval'
                value={this.state.balloonBundle.interval}
                onChange={this.handleBalloonBundleChange}
                min='1'
                max='100'
              ></input>
            </div>
            <div>
              <span>Campaign ID: </span>
              <input
                type='text'
                id='campaignID'
                name='campaignID'
                value={this.state.balloonBundle.campaignID}
                onChange={this.handleBalloonBundleChange}
              ></input>
            </div>
            <button onClick={this.createBalloonBundle}>Create</button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createCampaignThunk, createBalloonBundleThunk })(
  CampaignCreate
);
