/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
      id
      username
      profilePic
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
      id
      username
      profilePic
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
      id
      username
      profilePic
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onCreatePark = /* GraphQL */ `
  subscription OnCreatePark {
    onCreatePark {
      id
      name
      image {
        bucket
        region
        key
      }
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onUpdatePark = /* GraphQL */ `
  subscription OnUpdatePark {
    onUpdatePark {
      id
      name
      image {
        bucket
        region
        key
      }
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onDeletePark = /* GraphQL */ `
  subscription OnDeletePark {
    onDeletePark {
      id
      name
      image {
        bucket
        region
        key
      }
      visits {
        items {
          id
          parkID
          userProfileID
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
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit {
    onCreateVisit {
      id
      parkID
      userProfileID
      user {
        id
        username
        profilePic
        visits {
          nextToken
        }
        createdAt
        updatedAt
      }
      park {
        id
        name
        image {
          bucket
          region
          key
        }
        visits {
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
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit {
    onUpdateVisit {
      id
      parkID
      userProfileID
      user {
        id
        username
        profilePic
        visits {
          nextToken
        }
        createdAt
        updatedAt
      }
      park {
        id
        name
        image {
          bucket
          region
          key
        }
        visits {
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
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit {
    onDeleteVisit {
      id
      parkID
      userProfileID
      user {
        id
        username
        profilePic
        visits {
          nextToken
        }
        createdAt
        updatedAt
      }
      park {
        id
        name
        image {
          bucket
          region
          key
        }
        visits {
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
