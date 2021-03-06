/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
          name
          order
          active
          min
          max
          interval
          totalRaised
          balloonsPerRound
          totalPerRound
          roundsCompleted
          balloonsPopped
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
          name
          order
          active
          min
          max
          interval
          totalRaised
          balloonsPerRound
          totalPerRound
          roundsCompleted
          balloonsPopped
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
          name
          order
          active
          min
          max
          interval
          totalRaised
          balloonsPerRound
          totalPerRound
          roundsCompleted
          balloonsPopped
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
export const onCreateBalloonBundle = /* GraphQL */ `
  subscription OnCreateBalloonBundle {
    onCreateBalloonBundle {
      id
      name
      order
      active
      min
      max
      interval
      totalRaised
      balloonsPerRound
      totalPerRound
      roundsCompleted
      balloonsPopped
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
          poppedBy
          poppedAt
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
export const onUpdateBalloonBundle = /* GraphQL */ `
  subscription OnUpdateBalloonBundle {
    onUpdateBalloonBundle {
      id
      name
      order
      active
      min
      max
      interval
      totalRaised
      balloonsPerRound
      totalPerRound
      roundsCompleted
      balloonsPopped
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
          poppedBy
          poppedAt
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
export const onDeleteBalloonBundle = /* GraphQL */ `
  subscription OnDeleteBalloonBundle {
    onDeleteBalloonBundle {
      id
      name
      order
      active
      min
      max
      interval
      totalRaised
      balloonsPerRound
      totalPerRound
      roundsCompleted
      balloonsPopped
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
          poppedBy
          poppedAt
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
export const onCreateBalloon = /* GraphQL */ `
  subscription OnCreateBalloon {
    onCreateBalloon {
      id
      value
      currency
      color
      popStatus
      position
      size
      poppedBy
      poppedAt
      balloonBundleID
      balloonBundle {
        id
        name
        order
        active
        min
        max
        interval
        totalRaised
        balloonsPerRound
        totalPerRound
        roundsCompleted
        balloonsPopped
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
export const onUpdateBalloon = /* GraphQL */ `
  subscription OnUpdateBalloon {
    onUpdateBalloon {
      id
      value
      currency
      color
      popStatus
      position
      size
      poppedBy
      poppedAt
      balloonBundleID
      balloonBundle {
        id
        name
        order
        active
        min
        max
        interval
        totalRaised
        balloonsPerRound
        totalPerRound
        roundsCompleted
        balloonsPopped
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
export const onDeleteBalloon = /* GraphQL */ `
  subscription OnDeleteBalloon {
    onDeleteBalloon {
      id
      value
      currency
      color
      popStatus
      position
      size
      poppedBy
      poppedAt
      balloonBundleID
      balloonBundle {
        id
        name
        order
        active
        min
        max
        interval
        totalRaised
        balloonsPerRound
        totalPerRound
        roundsCompleted
        balloonsPopped
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
