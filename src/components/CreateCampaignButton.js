import { Link } from 'react-router-dom';

const CreateCampaignButton = () => {
  const item = <div className='create-campaign-button'>Create A Campaign!</div>;

  return (
    <Link to={`create-campaign`} style={{ textDecoration: 'none' }}>
      {item}
    </Link>
  );
};

export default CreateCampaignButton;
