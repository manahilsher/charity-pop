import React from 'react';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Feed extends React.Component {
  state = {
    textBox: ''
  };

  componentDidMount() {
    let x = document.getElementById('f-items-container');
    x.scrollTop = x.scrollHeight;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyPress = event => {
    if (event.charCode === 13) {
      event.preventDefault();
      alert(`Message posted: ${this.state.textBox}`);
      // coming soon
      // this.props.createMessage();
      document.getElementById('text-box').value = '';
    }
  };

  renderBalloonBundlesData = () => {
    let bb = this.props.balloonBundles.map(bb => {
      return (
        <div key={`feed-${bb.id}`}>
          <div>Group ${bb.order + 1}</div>
          <div>{bb.totalRaised}</div>
        </div>
      );
    });
    return bb;
  };

  render() {
    let c = null;
    if (this.props.campaign) c = { ...this.props.campaign };
    return (
      <div className='feed'>
        <div className='meta'>
          <div>{c ? c.name : ''}</div>
          <div>{c ? c.blurb : ''}</div>
          <div>
            {this.props.balloonBundles ? this.renderBalloonBundlesData() : null}
          </div>
        </div>
        <div id='f-items-container'>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <div className='item'>
            Manahil Sher just popped Balloon $5 from Group 3!
          </div>
          <input
            type='text'
            id='text-box'
            name='textBox'
            value={this.state.query}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          ></input>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state.balloonBundlesReducer);
  return {
    campaign: state.campaignsReducer.selectedCampaign,
    balloonBundles: state.balloonBundlesReducer.balloonBundles
  };
};

export default connect(mapState)(Feed);
