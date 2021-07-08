import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
// import { AmplifySignOut } from '@aws-amplify/ui-react';

// import { fetchCampaignThunk } from '../store/actions';

class Header extends React.Component {
  componentDidMount() {
    // this.props.fetchCampaignThunk();
    // this.renderStars();
    // window.addEventListener('resize', this.resizeCanvas, false);
  }

  // createStars = (width, height, spacing) => {
  //   const stars = [];

  //   for (let x = 0; x < width; x += spacing) {
  //     for (let y = 0; y < height; y += spacing) {
  //       const star = {
  //         x: x + Math.floor(Math.random() * spacing),
  //         y: y + Math.floor(Math.random() * spacing),
  //         r: Math.random() * 1.5
  //       };
  //       stars.push(star);
  //     }
  //   }
  //   return stars;
  // };

  // fillCircle = (ctx, x, y, r, fillStyle) => {
  //   ctx.beginPath();
  //   ctx.fillStyle = fillStyle;
  //   ctx.arc(x, y, r, 0, Math.PI * 2);
  //   ctx.fill();
  // };

  // renderStars = () => {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   const canvas = document.querySelector('#header-canvas');
  //   const ctx = canvas.getContext('2d');
  //   canvas.width = width;
  //   canvas.height = height;
  //   const stars = this.createStars(width, height, 50);

  //   const grd = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
  //   grd.addColorStop(0, '#10BAE4');
  //   grd.addColorStop(1, '#cadde2');
  //   ctx.fillStyle = grd;

  //   ctx.fillRect(0, 0, width, height);
  //   stars.forEach(star => {
  //     const x = star.x;
  //     const y = star.y;
  //     const r = star.r;
  //     this.fillCircle(ctx, x, y, r, '#fff8b8');
  //   });
  // };

  // resizeCanvas = () => {
  //   const canvas = document.querySelector('#header-canvas');
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   this.renderStars();
  // };

  signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  render() {
    console.log(this.props.campaign);
    return (
      <>
        {/* <div id='header'> */}
        {/* <canvas id='header-canvas'></canvas> */}
        {/* <div className='header-items'>
            <div className='menu-items-container'>
              <Link to='/'>
                <div>
                  <img
                    src='/red-balloon.png'
                    alt='red-balloon-logo'
                    className='header-logo'
                  />
                </div>
              </Link>
              <Link to='/build-campaign' style={{ marginLeft: '15px' }}>
                <div className='menu-item'>
                  <i className='fas fa-plus'></i>
                </div>
              </Link>
            </div>
            <div className='heading'>
              {this.props.campaign
                ? this.props.campaign === undefined
                  ? 'CHARITY POP'
                  : this.props.campaign.name
                : 'CHARITY POP'}
            </div>
            <div className='signout-button-container'>
              <AmplifySignOut />
            </div>
          </div>
        </div> */}
        <div
          id='header'
          style={{
            backgroundColor: this.props.campaign
              ? this.props.campaign === undefined
                ? '#10bae4'
                : 'transparent'
              : '#10bae4'
          }}
        >
          <div className='menu'>
            <div className='menu-item-container'>
              <Link to='/'>
                <div className='logo'>
                  <img
                    src='/red-balloon.png'
                    alt='red-balloon-logo'
                    className='header-logo'
                  />
                </div>
              </Link>
            </div>
            <div className='menu-item-container'>
              <Link to='/build-campaign'>
                <div className='menu-item'>
                  <i className='fas fa-plus fa-lg'></i>
                </div>
              </Link>
            </div>
            <div className='menu-item-container'>
              <div className='menu-item' onClick={this.signOut}>
                <i className='fas fa-sign-out-alt fa-lg'></i>
              </div>
            </div>
          </div>
          <div className='heading'>
            <div>
              {this.props.campaign
                ? this.props.campaign === undefined
                  ? 'CHARITY POP'
                  : ''
                : 'CHARITY POP'}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  console.log(state.campaignsReducer);
  if (state.campaignsReducer.selectedCampaign)
    return {
      campaign: state.campaignsReducer.selectedCampaign
    };
  else return {};
};

export default connect(mapState)(Header);
