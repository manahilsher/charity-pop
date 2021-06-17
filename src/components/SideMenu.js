import React from 'react';
// import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
  onMouseEnter = () => {
    let x = document.getElementsByClassName('opener-black')[0];
    x.classList.add('opener-white');
    x.classList.remove('opener-black');
  };

  onMouseLeave = () => {
    let x = document.getElementsByClassName('opener-white')[0];
    x.classList.add('opener-black');
    x.classList.remove('opener-white');
  };

  onOpenerClick = () => {
    let x = document.getElementsByClassName('items-container')[0];
    if (x.classList.contains('opened')) x.classList.remove('opened');
    else x.classList.add('opened');
  };

  render() {
    return (
      <div className='side-menu'>
        <div className='items-container'>
          <div className='item'>
            <i className='fas fa-tree'></i>
          </div>
          <div className='item'>
            <i className='fas fa-tree'></i>
          </div>
          <div className='item'>
            <i className='fas fa-tree'></i>
          </div>
          <div className='item'>
            <i className='fas fa-tree'></i>
          </div>
          <div className='item'>
            <i className='fas fa-tree'></i>
          </div>
        </div>
        <div
          className='opener-black'
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onOpenerClick}
        >
          <div className='top-triangle'></div>
          <div className='middle-rectangle'></div>
          <div className='bottom-triangle'></div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
