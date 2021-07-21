import React from 'react';
import { connect } from 'react-redux';
import { editBalloonThunk } from '../store/actions';

class Balloon extends React.Component {
  onBalloonClick = async () => {
    console.log('clicked balloon');
    console.log(this.props.balloon.id);
    console.log(this.props.balloon.popStatus);
    let b = { ...this.props.balloon, popStatus: 1 };
    delete b.balloonBundle;
    delete b.createdAt;
    delete b.updatedAt;
    await this.props.editBalloonThunk(b);
    console.log('done??');
  };

  render() {
    let b = this.props.balloon;
    return (
      <>
        {b.popStatus === 1 ? (
          <div className='balloon' style={{ color: b.color }}>
            {b.value}
          </div>
        ) : (
          <div className='balloon' onClick={this.onBalloonClick}>
            <img
              src={`/${b.color}-balloon.png`}
              alt={`balloon${b.id}`}
              style={{
                width: `${b.size * 75 + 20}px`,
                cursor: `pointer`,
                opacity: b.popStatus === 2 ? 0.2 : 1
              }}
            />
          </div>
        )}
      </>
    );
  }
}

export default connect(null, { editBalloonThunk })(Balloon);
