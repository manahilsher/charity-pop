import { Link } from 'react-router-dom';

const CampaignCard = props => {
  let i = `https://images.unsplash.com/photo-1607113208903-6855b60ad046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1968&q=80`;
  let item = (
    <div className='campaign-card'>
      <div className='image-section'>
        <img src={i} alt={props.campaign.id} />
      </div>
      <div className='details-section'>
        <div className='name'>{props.campaign.name}</div>
        <div className='blurb'>{props.campaign.blurb}</div>
      </div>
    </div>
  );
  return (
    <Link
      to={`campaign/${props.campaign.id}`}
      style={{ textDecoration: 'none' }}
    >
      {item}
    </Link>
  );
};

export default CampaignCard;
