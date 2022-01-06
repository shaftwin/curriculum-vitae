import { gql } from '@apollo/client';
// eslint-disable-next-line max-len
import { ERROR_FIELDS } from '../../../../shared/graphql/fragments/ErrorFragment';

export const LOGIN = gql`
  mutation Login($password: String!, $email: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        email
        password
        phoneNumber
        picture
        enabled
      }
      errors {
        ...ErrorFields
      }
    }
  }
  ${ERROR_FIELDS}
`;
