import React from 'react';

import { connect } from 'react-redux';
import Feed from '../components/Feed';
import SideMenu from '../components/SideMenu';
import Balloon from '../components/Balloon';
import {
  editCampaignThunk,
  deleteCampaignThunk,
  fetchCampaignThunk,
  fetchBalloonsThunk,
  fetchBalloonBundlesThunk,
  unselectCampaignThunk
} from '../store/actions';

class Campaign extends React.Component {
  async componentDidMount() {
    await this.props.fetchCampaignThunk(this.props.match.params.id);
    console.log('um');
    console.log(this.props.match.params.id);
    console.log(this.props.campaign);
    await this.props.fetchBalloonBundlesThunk(this.props.campaign.id);
    this.props.balloonBundles.forEach(async bb => {
      await this.props.fetchBalloonsThunk(bb.id);
    });
  }

  async componentWillUnmount() {
    await this.props.unselectCampaignThunk();
  }

  renderBalloonBundles = () => {
    let bbs = this.props.balloonBundlesWithBalloons.map(bb => {
      return (
        <div key={bb.id}>
          <div className='balloon-bundle-title'>{bb.id}</div>
          <div className='balloon-bundle-heading'>
            <div>Round {bb.roundsCompleted + 1}</div>
            <div>
              ${bb.min} to ${bb.max}
            </div>
            <div className='third-column'>
              <div className='fraction-container'>
                <div>$</div>
                <div className='fraction'>
                  <div>{bb.totalRaised}</div>
                  <div className='denominator'>{bb.totalPerRound}</div>
                </div>
                <div>raised</div>
              </div>
            </div>
          </div>
          <div className='balloon-bundle'>{this.renderBalloons(bb.id)}</div>
        </div>
      );
    });
    return bbs;
  };

  renderBalloons = bbID => {
    let bb = this.props.balloonBundlesWithBalloons.find(bb => bb.id === bbID);
    let balloons = bb.balloons.map(b => {
      return <Balloon balloon={b} key={b.id} />;
    });
    return balloons;
  };

  render() {
    return (
      <>
        <div>
          <Feed />
          <SideMenu />
          <div className='campaign-container'>
            <div>
              {this.props.campaign ? (
                <div>
                  <div>{this.props.campaign.name}</div>
                </div>
              ) : null}
            </div>
            <>
              {this.props.balloonBundles ? this.renderBalloonBundles() : null}
            </>
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  let balloonBundles = state.balloonBundlesReducer.balloonBundles;
  let balloonBundlesWithBalloons = [];
  if (balloonBundles.length > 0) {
    console.log('YESSS');
    balloonBundles.forEach(bb => {
      let balloons = state.balloonsReducer[`${bb.id}-balloons`];
      if (balloons) balloonBundlesWithBalloons.push({ ...bb, balloons });
    });
  }
  console.log(balloonBundlesWithBalloons);
  return {
    campaign: state.campaignsReducer.selectedCampaign,
    balloonBundles,
    balloonBundlesWithBalloons
  };
};

export default connect(mapState, {
  fetchCampaignThunk,
  editCampaignThunk,
  deleteCampaignThunk,
  fetchBalloonsThunk,
  fetchBalloonBundlesThunk,
  unselectCampaignThunk
})(Campaign);
