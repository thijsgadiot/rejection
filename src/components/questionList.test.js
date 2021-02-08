import React from "react";
import { QuestionList } from "./questionList";
import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";

const questions = [
  {
    _id: "123456",
    askee: "my momz",
    question: "can i have some candy",
    status: "REJECTED",
    timestamp: "456456456",
    score: "100"
  },
  {
    _id: "7890123",
    askee: "my my dog",
    question: "can i walk",
    status: "ACCEPTED",
    timestamp: "456456456",
    score: "10"
  }
];

describe("QuestionList component", async (assert) => {
  {
    const $ = render(<QuestionList questions={questions} handleStatusClick={() => {}} />);

    assert({
      given: "an array of questions",
      should: "render a li for each question",
      actual: $("li.question").length,
      expected: questions.length
    });
  }
});
