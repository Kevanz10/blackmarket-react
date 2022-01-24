import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation(
    $email: String!
    $password: String!
  ) {
    userLogin(
      email: $email, 
      password: $password
    ) {
      authenticatable {
        email
      }
      credentials {
        accessToken
        client
        expiry
        tokenType
        uid
      }
    }
  }
`



