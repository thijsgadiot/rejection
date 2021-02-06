import React from "react";
import { QuestionContainer } from "./questionContainer";
import { QuestionList } from "./questionList";
import { MockedProvider } from "@apollo/client/testing";
import { QUESTIONS } from "../queries/";
import { create, act } from "react-test-renderer";

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
            status: "REJECTED",
            timestamp: "456456456",
            score: "100"
          }
        ]
      }
    }
  }
};

describe("Question component", async (assert) => {
  {
    const component = create(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <QuestionContainer />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    const expected = mock.result.data.questions.data;
    const actual = component.root.findByType(QuestionList).props.questions;

    console.log("actual", actual);
    console.log("exected", expected);
    assert({
      given: "a question container ... <-- text needs work.",
      should: "render the question",
      actual: actual === expected,
      expected: true
    });
  }
});

// it("should render question component", async () => {
//   const component = create(
//     <MockedProvider mocks={[mock]} addTypename={false}>
//       <QuestionContainer />
//     </MockedProvider>
//   );

//   await new Promise((resolve) => setTimeout(resolve, 0));

//   const expected = mock.result.data.questions.data;
//   const actual = component.root.findByType(QuestionList).props.questions;
//   expect(actual).toEqual(expected);
// });
