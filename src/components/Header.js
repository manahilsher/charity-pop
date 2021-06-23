import React from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
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
          <Link to='/create-campaign' style={{ marginLeft: '15px' }}>
            <div className='menu-item'>
              <i className='fas fa-plus'></i>
            </div>
          </Link>
        </div>
        <div className='heading'>CHARITY POP</div>
        <div className='signout-button-container'>
          <AmplifySignOut />
        </div>
      </div>
    );
  }
}

export default Header;
