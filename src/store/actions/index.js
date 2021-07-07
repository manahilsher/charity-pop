import {
  FETCH_BALLOONS,
  // CREATE_BALLOON,
  // FETCH_BALLOON
  // UPDATE_BALLOON,
  // DELETE_BALLOON
  FETCH_CAMPAIGNS,
  // CREATE_CAMPAIGN,
  FETCH_CAMPAIGN,
  // UPDATE_CAMPAIGN,
  // DELETE_CAMPAIGN
  FETCH_BALLOONBUNDLES,
  // CREATE_BALLOONBUNDLE,
  FETCH_BALLOONBUNDLE
  // UPDATE_BALLOONBUNDLE,
  // DELETE_BALLOONBUNDLE
} from './types';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {
  createBalloon,
  createCampaign,
  createBalloonBundle
} from '../../graphql/mutations';
import {
  listBalloons,
  listCampaigns,
  getCampaign,
  listBalloonBundles,
  getBalloonBundle
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

export const fetchBalloonsThunk = bbID => async dispatch => {
  try {
    const balloonData = await API.graphql(graphqlOperation(listBalloons));
    console.log(balloonData);
    const balloons = balloonData.data.listBalloons.items.filter(
      b => b.balloonBundleID === bbID
    );
    dispatch({ type: FETCH_BALLOONS, payload: { bbID, balloons } });
  } catch (err) {
    console.log('error fetching balloons');
    console.log(err);
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

/* BALLOONBUNDLES */

export const createBalloonBundleThunk =
  (balloonBundle, balloons) => async () => {
    console.log('create balloonBundle');
    console.log(balloonBundle);
    try {
      await API.graphql(
        graphqlOperation(createBalloonBundle, { input: balloonBundle })
      );
      // try {
      //   const input = { balloons };
      //   await API.graphql(graphqlOperation(batchAddBalloons, input));
      //   console.log('done');
      // } catch (err) {
      //   console.log('error ', err);
      // }
      balloons.forEach(async b => {
        console.log(b);
        // try {
        //   await API.graphql(graphqlOperation(createBalloon, { input: b }));
        // } catch (err) {
        //   console.log('error creating balloon:', err);
        // }
      });
    } catch (err) {
      console.log('error creating balloonBundle:', err);
    }
  };

export const fetchBalloonBundleThunk = id => async dispatch => {
  console.log('fetch balloonBundle thunk');
  console.log(id);
  try {
    const balloonBundleData = await API.graphql(
      graphqlOperation(getBalloonBundle, { id: id })
    );
    console.log(balloonBundleData);
    const balloonBundle = balloonBundleData.data.getBalloonBundle;
    dispatch({ type: FETCH_BALLOONBUNDLE, payload: balloonBundle });
  } catch (err) {
    console.log('error fetching balloonBundle');
    console.log(err);
  }
};

export const fetchBalloonBundlesThunk = campaignID => async dispatch => {
  try {
    const balloonBundleData = await API.graphql(
      graphqlOperation(listBalloonBundles)
    );
    const balloonBundles =
      balloonBundleData.data.listBalloonBundles.items.filter(
        bb => bb.campaignID === campaignID
      );
    dispatch({ type: FETCH_BALLOONBUNDLES, payload: balloonBundles });
  } catch (err) {
    console.log('error fetching balloonBundles');
    console.log(err);
  }
};

export const editBalloonBundleThunk = balloonBundle => () => {
  console.log('edit balloonBundle');
  console.log(balloonBundle);
};

export const deleteBalloonBundleThunk = id => () => {
  console.log('delete balloonBundle');
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
