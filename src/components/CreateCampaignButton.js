import { Link } from 'react-router-dom';

const CreateCampaignButton = () => {
  const item = <div className='build-campaign-button'>Create A Campaign!</div>;

  return (
    <Link to={`build-campaign`} style={{ textDecoration: 'none' }}>
      {item}
    </Link>
  );
};

export default CreateCampaignButton;
