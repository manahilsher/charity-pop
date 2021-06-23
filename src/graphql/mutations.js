/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createBalloonBundle = /* GraphQL */ `
  mutation CreateBalloonBundle(
    $input: CreateBalloonBundleInput!
    $condition: ModelBalloonBundleConditionInput
  ) {
    createBalloonBundle(input: $input, condition: $condition) {
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
export const updateBalloonBundle = /* GraphQL */ `
  mutation UpdateBalloonBundle(
    $input: UpdateBalloonBundleInput!
    $condition: ModelBalloonBundleConditionInput
  ) {
    updateBalloonBundle(input: $input, condition: $condition) {
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
export const deleteBalloonBundle = /* GraphQL */ `
  mutation DeleteBalloonBundle(
    $input: DeleteBalloonBundleInput!
    $condition: ModelBalloonBundleConditionInput
  ) {
    deleteBalloonBundle(input: $input, condition: $condition) {
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
export const createBalloon = /* GraphQL */ `
  mutation CreateBalloon(
    $input: CreateBalloonInput!
    $condition: ModelBalloonConditionInput
  ) {
    createBalloon(input: $input, condition: $condition) {
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
export const updateBalloon = /* GraphQL */ `
  mutation UpdateBalloon(
    $input: UpdateBalloonInput!
    $condition: ModelBalloonConditionInput
  ) {
    updateBalloon(input: $input, condition: $condition) {
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
export const deleteBalloon = /* GraphQL */ `
  mutation DeleteBalloon(
    $input: DeleteBalloonInput!
    $condition: ModelBalloonConditionInput
  ) {
    deleteBalloon(input: $input, condition: $condition) {
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
