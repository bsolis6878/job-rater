import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation addReview($employerName: String!, $reviewText: String!, $rating: Int!) {
        addReview(employerName: $employerName, reviewText: $reviewText, rating: $rating) {
            _id
            employerName
            reviewText
            createdAt
            username
            rating
        }
    }
`