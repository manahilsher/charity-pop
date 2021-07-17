import React from 'react';

import { connect } from 'react-redux';
import {
  editCampaignThunk,
  deleteCampaignThunk,
  fetchCampaignsThunk
} from '../store/actions';
import CampaignCard from '../components/CampaignCard';

class Campaigns extends React.Component {
  async componentDidMount() {
    await this.props.fetchCampaignsThunk();
    console.log('um');
  }

  onCreateCampaign = () => {
    const campaign = {
      id: 1,
      name: 'BC Charity Week',
      blurb: 'Donate to orphans and children in need!',
      image:
        'https://images.unsplash.com/photo-1623073284770-c9c72cfd2c60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
      url: '1',
      goal: 100,
      totalRaised: 0
    };
    this.props.createCampaignThunk(campaign);
  };

  renderCampaigns = () => {
    let campaigns = this.props.campaigns.map(c => {
      return <CampaignCard key={c.id} campaign={c} />;
    });
    return campaigns;
  };

  render() {
    return (
      <>
        <div className='page'>
          <div className='campaigns-container'>
            {this.props.campaigns ? this.renderCampaigns() : null}
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  return {
    campaigns: state.campaignsReducer.campaigns
  };
};

export default connect(mapState, {
  fetchCampaignsThunk,
  editCampaignThunk,
  deleteCampaignThunk
})(Campaigns);
