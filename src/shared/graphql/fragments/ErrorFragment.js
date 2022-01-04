import { gql } from '@apollo/client';

export const ERROR_FIELDS = gql`
  fragment ErrorFields on ErrorResponse {
    message
    path
  }
`;
