import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import Question from "./question";

const createQuestion = ({ question, askee = "mom", timestamp = 1234, status = "UNANSWERED", score = 0 } = {}) => ({
  question,
  askee,
  timestamp,
  status,
  score
});

const statuses = ["ACCEPTED", "REJECTED", "UNANSWERED"];

describe("Question component", async (assert) => {
  {
    const question = createQuestion({ question: "can i have some cake" });

    const $ = render(<Question {...question} statuses={statuses} />);
    const contains = match($(".name").html());

    assert({
      given: "a question",
      should: "render the question",
      actual: contains(question.question),
      expected: question.question
    });
  }

  {
    const question = createQuestion({ question: "can i have some cake" });
    const $ = render(<Question {...question} statuses={statuses} />);

    assert({
      given: "a status",
      should: "render the current status as active",
      actual: $(".status ul li.unanswered").attr("class").includes("active"),
      expected: true
    });
  }

  {
    const question = createQuestion({ question: "can i have some cake", askee: "uncle dom" });
    const $ = render(<Question {...question} statuses={statuses} />);
    const contains = match($(".askee").html());

    assert({
      given: "an askee",
      should: "render the askee",
      actual: contains(question.askee),
      expected: question.askee
    });
  }

  {
    const question = createQuestion({ question: "can i have some cake", score: 100 });
    const $ = render(<Question {...question} statuses={statuses} />);
    const contains = match($(".score").html());

    assert({
      given: "a score",
      should: "render the score",
      actual: contains("100"),
      expected: "100"
    });
  }
});
