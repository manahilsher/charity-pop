import React from 'react';

import { connect } from 'react-redux';
import Feed from '../components/Feed';
import SideMenu from '../components/SideMenu';
import {
  editCampaignThunk,
  deleteCampaignThunk,
  fetchCampaignThunk
} from '../store/actions';

class Campaign extends React.Component {
  async componentDidMount() {
    await this.props.fetchCampaignThunk(this.props.match.params.id);
    console.log('um');
    console.log(this.props.match.params.id);
    console.log(this.props.campaign);
  }

  render() {
    return (
      <>
        <div>
          <Feed />
          <SideMenu />
          <div>
            {this.props.campaign ? (
              <div>
                <div>{this.props.campaign.name}</div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  return {
    campaign: state.campaignsReducer.selectedCampaign
  };
};

export default connect(mapState, {
  fetchCampaignThunk,
  editCampaignThunk,
  deleteCampaignThunk
})(Campaign);
