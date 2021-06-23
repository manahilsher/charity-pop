import {
  FETCH_BALLOONS,
  // CREATE_BALLOON,
  // FETCH_BALLOON
  // UPDATE_BALLOON,
  // DELETE_BALLOON
  FETCH_CAMPAIGNS,
  // CREATE_CAMPAIGN,
  FETCH_CAMPAIGN
  // UPDATE_CAMPAIGN,
  // DELETE_CAMPAIGN
} from './types';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createBalloon, createCampaign } from '../../graphql/mutations';
import {
  listBalloons,
  listCampaigns,
  getCampaign
} from '../../graphql/queries';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

/* BALLOONS */

export const createBalloonThunk = balloon => async () => {
  console.log('create balloon');
  console.log(balloon);
  try {
    await API.graphql(graphqlOperation(createBalloon, { input: balloon }));
  } catch (err) {
    console.log('error creating balloon:', err);
  }
};

export const fetchBalloonThunk = id => dispatch => {
  console.log('fetch balloon thunk');
  // dispatch({ type: FETCH_BALLOON, payload: { id } });
};

export const fetchBalloonsThunk = () => async dispatch => {
  try {
    const balloonData = await API.graphql(graphqlOperation(listBalloons));
    const balloons = balloonData.data.listBalloons.items;
    dispatch({ type: FETCH_BALLOONS, payload: balloons });
  } catch (err) {
    console.log('error fetching balloons');
  }
};

export const editBalloonThunk = balloon => () => {
  console.log('edit balloon');
  console.log(balloon);
};

export const deleteBalloonThunk = id => () => {
  console.log('delete balloon');
  console.log(id);
};

/* CAMPAIGNS */

export const createCampaignThunk = campaign => async () => {
  console.log('create campaign');
  console.log(campaign);
  try {
    await API.graphql(graphqlOperation(createCampaign, { input: campaign }));
  } catch (err) {
    console.log('error creating campaign:', err);
  }
};

export const fetchCampaignThunk = id => async dispatch => {
  console.log('fetch campaign thunk');
  console.log(id);
  try {
    const campaignData = await API.graphql(
      graphqlOperation(getCampaign, { id: id })
    );
    console.log(campaignData);
    const campaign = campaignData.data.getCampaign;
    dispatch({ type: FETCH_CAMPAIGN, payload: campaign });
  } catch (err) {
    console.log('error fetching campaign');
    console.log(err);
  }
};

export const fetchCampaignsThunk = () => async dispatch => {
  try {
    const campaignData = await API.graphql(graphqlOperation(listCampaigns));
    const campaigns = campaignData.data.listCampaigns.items;
    dispatch({ type: FETCH_CAMPAIGNS, payload: campaigns });
  } catch (err) {
    console.log('error fetching campaigns');
    console.log(err);
  }
};

export const editCampaignThunk = campaign => () => {
  console.log('edit campaign');
  console.log(campaign);
};

export const deleteCampaignThunk = id => () => {
  console.log('delete campaign');
  console.log(id);
};

/* USERS */

// export const fetchUserThunk = id => async dispatch => {
//   console.log('fetch user thunk');
//   try {
//     const userData = await API.graphql(
//       graphqlOperation(getUser, { input: id })
//     );
//     console.log(userData);
//     // const user = userData.data.getUser.items;
//     // dispatch({ type: FETCH_CAMPAIGNS, payload: users });
//   } catch (err) {
//     console.log('error fetching users');
//   }
//   // dispatch({ type: FETCH_USER, payload: { id } });
// };

// export const editUserThunk = user => () => {
//   console.log('edit user');
//   console.log(user);
// };

// export const deleteUserThunk = id => () => {
//   console.log('delete user');
//   console.log(id);
// };
