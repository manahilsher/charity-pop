import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import Slider from '@material-ui/core/Slider';

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

class CampaignBuilder extends React.Component {
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
    sliders: [
      { active: true, value: [10, 100], interval: 1 },
      { active: false, value: [10, 100], interval: 1 },
      { active: false, value: [10, 100], interval: 1 },
      { active: false, value: [10, 100], interval: 1 }
    ]
  };

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(async () => {
        const user = await Auth.currentUserInfo();
        console.log(user);
        this.setState({ user });
      })
      .catch(() => {
        console.log('failed auth');
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
      await this.createBalloonBundles();
    }
  };

  createBalloonBundles = async () => {
    this.state.sliders.forEach(async (s, i) => {
      console.log(s, i);
      if (s.active) await this.createBalloonBundle(s, i);
    });
  };

  createBalloonBundle = async (s, i) => {
    console.log(s, i);
    const min = s.value[0];
    const max = s.value[1];
    let bbID = this.state.campaign.id + '-' + i;
    let totalPerRound = 0;
    let balloonsPerRound = 0;
    let balloons = [];

    for (let i = min; i <= max; i += s.interval) {
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
      interval: s.interval,
      totalRaised: 0,
      balloonsPerRound,
      balloonsPopped: 0,
      totalPerRound,
      roundsCompleted: 0,
      campaignID: this.state.campaign.id
    };
    console.log(balloons);
    await this.props.createBalloonBundleThunk(bb, balloons);
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

  handleCampaignChange = event => {
    const { name, type, value } = event.target;
    this.setState({
      campaign: {
        ...this.state.campaign,
        [name]: type === 'number' ? parseInt(value) : value
      }
    });
  };

  toggleSlider = i => {
    let sliders = [...this.state.sliders];
    sliders[i].active = !sliders[i].active;
    this.setState({ sliders });
  };

  handleSliderChange = (e, v, i) => {
    let sliders = [...this.state.sliders];
    sliders[i].value = v;
    this.setState({ sliders });
  };

  handleIntervalChange = (e, i) => {
    let sliders = [...this.state.sliders];
    sliders[i].interval = parseInt(e.target.value);
    this.setState({ sliders });
  };

  valuetext = value => {
    return `${value}°C`;
  };

  render() {
    const f = this.state.authFailed;
    return (
      <>
        <div className='page'>
          {f ? this.renderAuthenticationPopup() : null}
          <div
            style={{ opacity: f ? 0.2 : 1, pointerEvents: f ? 'none' : 'auto' }}
            className='builder-container'
          >
            <div className='builder-field'>
              <div>Name</div>
              <input
                type='text'
                id='name'
                name='name'
                value={this.state.campaign.name}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div className='builder-field'>
              <div>ID</div>
              <input
                type='text'
                id='id'
                name='id'
                value={this.state.campaign.id}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div className='builder-field'>
              <div>Goal</div>
              <input
                type='number'
                id='goal'
                name='goal'
                value={this.state.campaign.goal}
                onChange={this.handleCampaignChange}
                min='10'
              ></input>
            </div>
            <div className='builder-field'>
              <div>Blurb</div>
              <input
                type='text'
                id='blurb'
                name='blurb'
                value={this.state.campaign.blurb}
                onChange={this.handleCampaignChange}
              ></input>
            </div>
            <div className='builder-field'>
              <div>Description</div>
              <textarea
                id='description'
                name='description'
                value={this.state.campaign.description}
                onChange={this.handleCampaignChange}
              ></textarea>
            </div>
            <div>BALLOON BUNDLE</div>
            {/* <div className='slider'> */}
            <div className='bundle-info'>
              <div className='count'>1</div>
              <Slider
                className='slider'
                value={this.state.sliders[0].value}
                onChange={(e, v) => this.handleSliderChange(e, v, 0)}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                min={10}
              />
              <input
                type='number'
                id='interval'
                name='interval'
                value={this.state.sliders[0].interval}
                onChange={e => this.handleIntervalChange(e, 0)}
                min='1'
                max='100'
              />
            </div>
            <div className='bundle-info'>
              <div className='count' onClick={() => this.toggleSlider(1)}>
                {this.state.sliders[1].active ? '-' : '+'}
              </div>
              {this.state.sliders[1].active === true ? (
                <>
                  <Slider
                    className='slider'
                    value={this.state.sliders[1].value}
                    onChange={(e, v) => this.handleSliderChange(e, v, 1)}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    min={10}
                  />
                  <input
                    type='number'
                    id='interval'
                    name='interval'
                    value={this.state.sliders[1].interval}
                    onChange={e => this.handleIntervalChange(e, 1)}
                    min='1'
                    max='100'
                  />
                </>
              ) : null}
            </div>
            <div className='bundle-info'>
              <div className='count' onClick={() => this.toggleSlider(2)}>
                {this.state.sliders[2].active ? '-' : '+'}
              </div>
              {this.state.sliders[2].active === true ? (
                <>
                  <Slider
                    className='slider'
                    value={this.state.sliders[2].value}
                    onChange={(e, v) => this.handleSliderChange(e, v, 2)}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    min={10}
                  />
                  <input
                    type='number'
                    id='interval'
                    name='interval'
                    value={this.state.sliders[2].interval}
                    onChange={e => this.handleIntervalChange(e, 2)}
                    min='1'
                    max='100'
                  />
                </>
              ) : null}
            </div>
            <div className='bundle-info'>
              <div className='count' onClick={() => this.toggleSlider(3)}>
                {this.state.sliders[3].active ? '-' : '+'}
              </div>
              {this.state.sliders[3].active === true ? (
                <>
                  <Slider
                    className='slider'
                    value={this.state.sliders[3].value}
                    onChange={(e, v) => this.handleSliderChange(e, v, 3)}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    min={10}
                  />
                  <input
                    type='number'
                    id='interval'
                    name='interval'
                    value={this.state.sliders[3].interval}
                    onChange={e => this.handleIntervalChange(e, 3)}
                    min='1'
                    max='100'
                  />
                </>
              ) : null}
            </div>

            {/* </div> */}

            {/* <button onClick={this.createBalloonBundle}>Create</button> */}

            <div
              className='build-campaign-button'
              onClick={this.createCampaign}
            >
              Create Campaign!
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createCampaignThunk, createBalloonBundleThunk })(
  CampaignBuilder
);
