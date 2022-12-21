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
    mutation addReview(
        $employerName: String!, 
        $reviewText: String!, 
        $rating: Int!, 
        $jobTitle: String!
    ) {
        addReview(
            employerName: $employerName, 
            reviewText: $reviewText, 
            rating: $rating, 
            jobTitle: $jobTitle
        ) {
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

export const UPDATE_REVIEW = gql`
    mutation updateReview(
        $reviewId: ID!, 
        $employerName: String!, 
        $reviewText: String!, 
        $rating: Int!, 
        $jobTitle: String!
    ) {
        updateReview(
            reviewId: $reviewId
            employerName: $employerName
            reviewText: $reviewText
            rating: $rating
            jobTitle: $jobTitle
        ) {
            employerName
            reviewText
            rating
            jobTitle
        }
    }
`

export const REMOVE_REVIEW = gql`
    mutation removeReview($reviewId: ID!) {
        removeReview(reviewId: $reviewId) {
            _id
        }
    }
`

export const UPDATE_BLOG = gql`
    mutation updateBlog($blogId: ID!, $title: String!, $bodyText: String!) {
        updateBlog(blogId: $blogId, title: $title, bodyText: $bodyText) {
            title
            bodyText
        }
    }
`

export const REMOVE_BLOG = gql`
    mutation removeBlog($blogId: ID!) {
        removeBlog(blogId: $blogId) {
            _id
        }
    }
`