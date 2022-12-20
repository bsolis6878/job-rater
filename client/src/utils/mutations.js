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
    mutation addReview($employerName: String!, $reviewText: String!, $rating: Int!, $jobTitle: String!) {
        addReview(employerName: $employerName, reviewText: $reviewText, rating: $rating, jobTitle: $jobTitle) {
            _id
            employerName
            reviewText
            createdAt
            username
            rating
            jobTitle
        }
    }
`

export const ADD_BLOG = gql`
    mutation addBlog($title: String!, $bodyText: String!) {
        addBlog(title: $title, bodyText: $bodyText) {
            _id
            title
            bodyText
            createdAt
            username
        }
    }
`