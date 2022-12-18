import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
    query reviews {
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

export const QUERY_BLOGS = gql`
    query blogs {
        blogs {
            _id
            title
            bodyText
            createdAt
            username
        }
    }
`