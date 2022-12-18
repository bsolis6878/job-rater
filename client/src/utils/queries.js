import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
    query getReviews {
        reviews {
            _id
            employerName
            reviewText
            createdAt
            username
            rating
        }
    }
`