import { Link } from 'react-router-dom';

const CampaignCard = props => {
  let item = (
    <div className='campaign-card'>
      <div className='image-section'>
        <img src={props.campaign.image} alt={props.campaign.id} />
      </div>
      <div className='details-section'>
        <div className='name'>{props.campaign.name}</div>
        <div className='blurb'>{props.campaign.blurb}</div>
      </div>
    </div>
  );
  return (
    <Link
      to={`campaign/${props.campaign.url}`}
      style={{ textDecoration: 'none' }}
    >
      {item}
    </Link>
  );
};

export default CampaignCard;
