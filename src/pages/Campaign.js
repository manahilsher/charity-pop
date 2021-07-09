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
    this.renderStars();
    window.addEventListener('resize', this.resizeCanvas, false);
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

  createStars = (width, height, spacing) => {
    const stars = [];

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const star = {
          x: x + Math.floor(Math.random() * spacing),
          y: y + Math.floor(Math.random() * spacing),
          r: Math.random() * 1.5
        };
        stars.push(star);
      }
    }
    return stars;
  };

  fillCircle = (ctx, x, y, r, fillStyle) => {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  renderStars = () => {
    const width = window.innerWidth - 222;
    const height = document.body.scrollHeight;
    const canvas = document.querySelector('#campaign-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    const stars = this.createStars(width, height, 50);

    const grd = ctx.createLinearGradient(0, 0, 0, document.body.scrollHeight);
    grd.addColorStop(0, '#10bae4');
    grd.addColorStop(1, '#cadde2');
    ctx.fillStyle = grd;

    ctx.fillRect(0, 0, width, height);
    stars.forEach(star => {
      const x = star.x;
      const y = star.y;
      const r = star.r;
      this.fillCircle(ctx, x, y, r, '#fff8b8');
    });
  };

  resizeCanvas = () => {
    const canvas = document.querySelector('#campaign-canvas');
    canvas.width = window.innerWidth - 222;
    canvas.height = document.body.scrollHeight;
    this.renderStars();
  };

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
          <div className='campaign-page'>
            <div className='campaign-container'>
              <div className='title'>
                {this.props.campaign ? this.props.campaign.name : ''}
              </div>
              <>
                {this.props.balloonBundles ? this.renderBalloonBundles() : null}
              </>
            </div>
            <canvas id='campaign-canvas'></canvas>
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
