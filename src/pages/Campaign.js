import React from 'react';

import { connect } from 'react-redux';
import Feed from '../components/Feed';
import SideMenu from '../components/SideMenu';
import Balloon from '../components/Balloon';
import {
  editCampaignThunk,
  deleteCampaignThunk,
  fetchCampaignThunk,
  fetchBalloonsThunk
} from '../store/actions';

class Campaign extends React.Component {
  async componentDidMount() {
    await this.props.fetchCampaignThunk(this.props.match.params.id);
    console.log('um');
    console.log(this.props.match.params.id);
    console.log(this.props.campaign);
    await this.props.fetchBalloonsThunk();
  }

  renderBalloons = () => {
    let balloons = this.props.balloons.map(b => {
      return <Balloon balloon={b} />;
    });
    return balloons;
  };

  render() {
    return (
      <>
        <div>
          <Feed />
          <SideMenu />
          <div className='page'>
            <div>
              {this.props.campaign ? (
                <div>
                  <div>{this.props.campaign.name}</div>
                </div>
              ) : null}
            </div>
            <div className='balloon-bundle'>
              {this.props.balloons ? this.renderBalloons() : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  return {
    campaign: state.campaignsReducer.selectedCampaign,
    balloons: state.balloonsReducer.balloons
  };
};

export default connect(mapState, {
  fetchCampaignThunk,
  editCampaignThunk,
  deleteCampaignThunk,
  fetchBalloonsThunk
})(Campaign);
