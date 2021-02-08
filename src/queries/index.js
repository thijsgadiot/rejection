import { gql } from "@apollo/client";

export const QUESTIONS = gql`
  query GetQuestions {
    questions {
      data {
        _id
        askee
        question
        score @client
        status
        timestamp
      }
    }
  }
`;
