/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        profilePic
        visits {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPark = /* GraphQL */ `
  query GetPark($id: ID!) {
    getPark(id: $id) {
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
export const listParks = /* GraphQL */ `
  query ListParks(
    $filter: ModelParkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
