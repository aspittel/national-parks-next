/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createPark = /* GraphQL */ `
  mutation CreatePark(
    $input: CreateParkInput!
    $condition: ModelParkConditionInput
  ) {
    createPark(input: $input, condition: $condition) {
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
export const updatePark = /* GraphQL */ `
  mutation UpdatePark(
    $input: UpdateParkInput!
    $condition: ModelParkConditionInput
  ) {
    updatePark(input: $input, condition: $condition) {
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
export const deletePark = /* GraphQL */ `
  mutation DeletePark(
    $input: DeleteParkInput!
    $condition: ModelParkConditionInput
  ) {
    deletePark(input: $input, condition: $condition) {
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
export const createVisit = /* GraphQL */ `
  mutation CreateVisit(
    $input: CreateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    createVisit(input: $input, condition: $condition) {
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
export const updateVisit = /* GraphQL */ `
  mutation UpdateVisit(
    $input: UpdateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    updateVisit(input: $input, condition: $condition) {
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
export const deleteVisit = /* GraphQL */ `
  mutation DeleteVisit(
    $input: DeleteVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    deleteVisit(input: $input, condition: $condition) {
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
