import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import TotalScore from "./totalScore";

describe("TotalScore component", async (assert) => {
  {
    const score = 450;
    const $ = render(<TotalScore score={score} />);
    const contains = match($(".total").html());

    assert({
      given: "a score",
      should: "render the score",
      actual: parseInt(contains(score)),
      expected: score
    });
  }
  {
    const score = 450;
    const target = 600;
    const $ = render(<TotalScore score={score} target={target} />);
    const contains = match($(".target").html());
    assert({
      given: "a score and a target",
      should: "render the target",
      actual: parseInt(contains(target)),
      expected: target
    });
  }

  {
    const score = 450;
    const defaultTarget = 500;
    const $ = render(<TotalScore score={score} />);
    const contains = match($(".target").html());
    assert({
      given: "a score and no target",
      should: "render the default target",
      actual: parseInt(contains(defaultTarget)),
      expected: defaultTarget
    });
  }

  // where/when to test reducer that calculates score?
});
