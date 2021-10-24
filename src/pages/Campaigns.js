import React from 'react';

import { connect } from 'react-redux';
import {
  editCampaignThunk,
  deleteCampaignThunk,
  fetchCampaignsThunk,
  subscribeCampaignsListener,
  unsubscribeCampaignsListener
} from '../store/actions';
import CampaignCard from '../components/CampaignCard';

class Campaigns extends React.Component {
  state = {
    searchType: 'name',
    search: ''
  };

  async componentDidMount() {
    await this.props.fetchCampaignsThunk();
    await this.props.subscribeCampaignsListener();
  }

  async componentWillUnmount() {
    await this.props.unsubscribeCampaignsListener();
  }

  onSearch = e => {
    const t = e.target.value;
    console.log(t);
    this.setState({ search: e.target.value });
  };

  onChangeSearchType = searchType => {
    this.setState({ searchType });
  };

  onCreateCampaign = () => {
    const campaign = {
      id: 1,
      name: 'BC Charity Week 21',
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
    console.log('render campaigns');
    let campaigns = [];

    if (this.state.search === '') campaigns = [...this.props.campaigns];
    else campaigns = this.props.campaigns.filter(this.filterCampaign);

    let renderedCampaigns = campaigns.map(c => {
      return <CampaignCard key={c.id} campaign={c} />;
    });
    return renderedCampaigns;
  };

  filterCampaign = c => {
    console.log(c);
    let s = this.state.search.toLowerCase();
    switch (this.state.searchType) {
      case 'name':
        if (c.name.toLowerCase().indexOf(s) !== -1) return true;
        else return false;
      case 'id':
        if (c.id.toLowerCase().indexOf(s) !== -1) return true;
        else return false;
      case 'owner':
        if (c.ownerID.toLowerCase().indexOf(s) !== -1) return true;
        else return false;
      default:
        return false;
    }
  };

  render() {
    console.log(this.props.campaigns);
    let s = this.state.searchType;
    return (
      <>
        <div id='search-container'>
          <input
            type='text'
            id='search-campaigns'
            name='search-campaigns'
            placeholder='Search campaigns'
            onChange={this.onSearch}
          ></input>
          <div id='search-types'>
            <div
              className='search-type'
              onClick={() => this.onChangeSearchType('name')}
              style={{
                backgroundColor: s === 'name' ? `#7cdaf1` : `aliceblue`,
                color: s === 'name' ? `aliceblue` : `#7cdaf1`
              }}
            >
              Name
            </div>
            <div
              className='search-type'
              onClick={() => this.onChangeSearchType('id')}
              style={{
                backgroundColor: s === 'id' ? `#7cdaf1` : `aliceblue`,
                color: s === 'id' ? `aliceblue` : `#7cdaf1`
              }}
            >
              ID
            </div>
            <div
              className='search-type'
              onClick={() => this.onChangeSearchType('owner')}
              style={{
                backgroundColor: s === 'owner' ? `#7cdaf1` : `aliceblue`,
                color: s === 'owner' ? `aliceblue` : `#7cdaf1`
              }}
            >
              Owner
            </div>
          </div>
        </div>
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
  console.log('state updated???');
  // state is updating but for some reason not rerendering
  console.log(state.campaignsReducer.campaigns);
  return {
    campaigns: state.campaignsReducer.campaigns
  };
};

export default connect(mapState, {
  fetchCampaignsThunk,
  editCampaignThunk,
  deleteCampaignThunk,
  subscribeCampaignsListener,
  unsubscribeCampaignsListener
})(Campaigns);
