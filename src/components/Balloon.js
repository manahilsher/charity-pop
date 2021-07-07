const Balloon = props => {
  console.log('uum?');
  return (
    <div className='balloon'>
      <img
        src={`/${props.balloon.color}-balloon.png`}
        alt={`balloon${props.balloon.id}`}
        style={{
          width: `${props.balloon.size * 75 + 20}px`,
          cursor: `pointer`
        }}
      />
    </div>
  );
};

export default Balloon;
