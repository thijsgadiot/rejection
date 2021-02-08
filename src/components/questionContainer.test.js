import React from "react";
import { QuestionContainer } from "./questionContainer";
import { QuestionList } from "./questionList";
import { MockedProvider } from "@apollo/client/testing";
import { QUESTIONS } from "../queries";
import { create } from "react-test-renderer";

import { describe } from "riteway";

const mock = {
  request: {
    query: QUESTIONS
  },
  result: {
    data: {
      questions: {
        data: [
          {
            _id: "123456",
            askee: "my momz",
            question: "can i have some candy",
            score: "100",
            status: "REJECTED",
            timestamp: "456456456"
          }
        ]
      }
    }
  }
};

describe("QuestionContainer component", async (assert) => {
  {
    const component = create(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <QuestionContainer />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    const actual = component.root.findByType(QuestionList).props.questions;
    const expected = mock.result.data.questions.data;

    assert({
      given: "a question container and a QUESTIONS query",
      should: "pass the questions as a prop to the QuestionList component",
      actual,
      expected
    });
  }
});
