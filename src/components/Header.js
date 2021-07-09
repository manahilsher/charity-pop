import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';

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

  header1 = () => {
    return (
      <div id='header'>
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
                <FaPlus size={25} />
              </div>
            </Link>
          </div>
          <div className='menu-item-container'>
            <div className='menu-item' onClick={this.signOut}>
              <FaSignOutAlt size={25} />
            </div>
          </div>
        </div>
        <div className='heading'>
          <div>CHARITY POP</div>
        </div>
        <div className='stats'>$402 raised today</div>
      </div>
    );
  };

  header2 = () => {
    return null;
  };

  render() {
    return (
      <>
        {window.location.pathname.substr(0, 10) === '/campaign/'
          ? this.header2()
          : this.header1()}
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
