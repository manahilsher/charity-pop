/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      name
      blurb
      description
      goal
      totalRaised
      ownerID
      balloonBundles {
        items {
          id
          active
          totalRaised
          totalPerRound
          roundsCompleted
          campaignID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        blurb
        description
        goal
        totalRaised
        ownerID
        balloonBundles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBalloonBundle = /* GraphQL */ `
  query GetBalloonBundle($id: ID!) {
    getBalloonBundle(id: $id) {
      id
      active
      totalRaised
      totalPerRound
      roundsCompleted
      campaignID
      campaign {
        id
        name
        blurb
        description
        goal
        totalRaised
        ownerID
        balloonBundles {
          nextToken
        }
        createdAt
        updatedAt
      }
      balloons {
        items {
          id
          value
          currency
          color
          popStatus
          position
          size
          balloonBundleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBalloonBundles = /* GraphQL */ `
  query ListBalloonBundles(
    $filter: ModelBalloonBundleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalloonBundles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        active
        totalRaised
        totalPerRound
        roundsCompleted
        campaignID
        campaign {
          id
          name
          blurb
          description
          goal
          totalRaised
          ownerID
          createdAt
          updatedAt
        }
        balloons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBalloon = /* GraphQL */ `
  query GetBalloon($id: ID!) {
    getBalloon(id: $id) {
      id
      value
      currency
      color
      popStatus
      position
      size
      balloonBundleID
      balloonBundle {
        id
        active
        totalRaised
        totalPerRound
        roundsCompleted
        campaignID
        campaign {
          id
          name
          blurb
          description
          goal
          totalRaised
          ownerID
          createdAt
          updatedAt
        }
        balloons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBalloons = /* GraphQL */ `
  query ListBalloons(
    $filter: ModelBalloonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalloons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        currency
        color
        popStatus
        position
        size
        balloonBundleID
        balloonBundle {
          id
          active
          totalRaised
          totalPerRound
          roundsCompleted
          campaignID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
