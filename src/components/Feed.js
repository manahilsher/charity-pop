import React from 'react';
// import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div className='feed'>
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

export default Feed;
