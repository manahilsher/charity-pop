import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='heading'>CHARITY POP</div>
        <div className='menu-items-container'>
          <div>All Campaigns</div>
          <div>Your Campaigns</div>
        </div>
      </div>
    );
  }
}

export default Header;
