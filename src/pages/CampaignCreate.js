import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

import {
  createCampaignThunk,
  createBalloonBundleThunk
} from '../store/actions';
import { Link } from 'react-router-dom';

const colors = [
  'red',
  'midnightblue',
  'gold',
  'limegreen',
  'purple',
  'darkorange',
  'aqua',
  'deeppink',
  'slategrey'
];

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
      min: 1,
      max: 10,
      interval: 1,
      campaignID: ''
    },
    bbCount: 1
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
    const { name, type, value } = event.target;
    this.setState({
      campaign: {
        ...this.state.campaign,
        [name]: type === 'number' ? parseInt(value) : value
      }
    });
  };

  handleBalloonBundleChange = event => {
    const { name, type, value } = event.target;
    this.setState({
      balloonBundle: {
        ...this.state.balloonBundle,
        [name]: type === 'number' ? parseInt(value) : value
      }
    });
  };

  createBalloonBundle = async () => {
    let bbID = this.state.balloonBundle.campaignID + '-' + this.state.bbCount;
    const { min, max, interval } = this.state.balloonBundle;
    let totalPerRound = 0;
    let balloonsPerRound = 0;
    let balloons = [];

    for (let i = min; i <= max; i += interval) {
      console.log(i);
      totalPerRound += i;
      balloonsPerRound++;
      balloons.push(this.createBalloon(i, bbID));
    }

    const bb = {
      id: bbID,
      active: true,
      min,
      max,
      interval,
      totalRaised: 0,
      balloonsPerRound,
      balloonsPopped: 0,
      totalPerRound,
      roundsCompleted: 0,
      campaignID: this.state.balloonBundle.campaignID
    };

    await this.props.createBalloonBundleThunk(bb, balloons);

    this.setState({ bbCount: this.state.bbCount + 1 });
  };

  createBalloon = (value, bbID) => {
    const balloon = {
      value,
      currency: 'USD',
      color: colors[Math.floor(Math.random() * colors.length)],
      popStatus: 0,
      position: Math.random(),
      size: Math.random(),
      balloonBundleID: bbID
    };
    return balloon;
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
                id='min'
                name='min'
                value={this.state.balloonBundle.min}
                onChange={this.handleBalloonBundleChange}
                min='1'
              ></input>
            </div>
            <div>
              <span>Maximum: </span>
              <input
                type='number'
                id='max'
                name='max'
                value={this.state.balloonBundle.max}
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
              />
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
