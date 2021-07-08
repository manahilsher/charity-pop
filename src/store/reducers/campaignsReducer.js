import {
  FETCH_CAMPAIGNS,
  CREATE_CAMPAIGN,
  FETCH_CAMPAIGN,
  UPDATE_CAMPAIGN,
  DELETE_CAMPAIGN,
  UNSELECT_CAMPAIGN
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { campaigns: [] }, action) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return { ...state, campaigns: action.payload };
    case FETCH_CAMPAIGN:
      console.log(action.payload);
      return { ...state, selectedCampaign: action.payload };
    case UNSELECT_CAMPAIGN:
      let newStateWithUnselectedCampaign = { ...state };
      delete newStateWithUnselectedCampaign.selectedCampaign;
      return newStateWithUnselectedCampaign;
    case DELETE_CAMPAIGN:
      let newStateWithDeletedCampaign = { ...state };
      newStateWithDeletedCampaign.campaigns = state.campaigns.filter(
        a => a.id !== action.payload.id
      );
      return newStateWithDeletedCampaign;
    case UPDATE_CAMPAIGN:
      console.log('update campaign in reducer');
      console.log(action.payload);
      let newStateWithUpdatedCampaign = { ...state };
      let campaignIdx = state.campaigns.findIndex(
        a => a.id === action.payload.id
      );
      newStateWithUpdatedCampaign.campaigns[campaignIdx] = action.payload;
      return newStateWithUpdatedCampaign;
    case CREATE_CAMPAIGN:
      console.log('create campaign in reducer');
      console.log(action.payload);
      let newStateWithCreatedCampaign = { ...state };
      newStateWithCreatedCampaign.campaigns.push(action.payload);
      console.log(newStateWithCreatedCampaign);
      return newStateWithCreatedCampaign;
    default:
      return state;
  }
};
