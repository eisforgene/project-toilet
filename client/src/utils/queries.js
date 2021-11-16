import { gql } from '@apollo/client';

export const QUERY_TOILETS = gql`

    query getToilets($zipcode: String!) {
        toiletsByZip(zipcode: $zipcode) {
            _id
            coordinates
            zipcode
            }
    }
`;