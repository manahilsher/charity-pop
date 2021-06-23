import React from 'react';

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

import { createCampaignThunk } from '../store/actions';
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
      await this.props
        .createCampaignThunk({
          ...c,
          totalRaised: 0,
          ownerID: this.state.user.id
        })
        .then(x => {
          console.log(x);
        });
    }
  };

  handleChange = event => {
    this.setState({
      campaign: {
        ...this.state.campaign,
        [event.target.name]: event.target.value
      }
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
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <span>Url: </span>
              <input
                type='text'
                id='id'
                name='id'
                value={this.state.campaign.id}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <span>Blurb: </span>
              <input
                type='text'
                id='blurb'
                name='blurb'
                value={this.state.campaign.blurb}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <span>Description: </span>
              <input
                type='text'
                id='description'
                name='description'
                value={this.state.campaign.description}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <span>Goal: </span>
              <input
                type='number'
                id='goal'
                name='goal'
                value={this.state.campaign.goal}
                onChange={this.handleChange}
                min='10'
              ></input>
            </div>
            <button onClick={this.createCampaign}>Create</button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createCampaignThunk })(CampaignCreate);
