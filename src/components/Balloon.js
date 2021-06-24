const Balloon = props => {
  return (
    <div className='balloon'>
      <img
        src={`/${props.balloon.color}-balloon.png`}
        alt={`balloon${props.balloon.id}`}
        style={{
          width: `${props.balloon.randomSize * 75 + 20}px`,
          cursor: `pointer`
        }}
      />
    </div>
  );
};

export default Balloon;
