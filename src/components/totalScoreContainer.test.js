import { describe } from "riteway";
import { calculateTotalScore } from "./totalScoreContainer";

describe("calculateTotalScore", async (assert) => {
  {
    const scores = [{ score: 100 }, { score: 10 }, { score: 99 }, { score: 5 }];

    assert({
      given: "an array with multiple score objects",
      should: "calculate the total",
      actual: calculateTotalScore(scores),
      expected: 214
    });
  }
  {
    const scores = [{ score: 100 }];

    assert({
      given: "an array with a single score object",
      should: "calculate the total",
      actual: calculateTotalScore(scores),
      expected: 100
    });
  }
  {
    const scores = [];
    assert({
      given: "an empty array",
      should: "return 0",
      actual: calculateTotalScore(scores),
      expected: 0
    });
  }
  {
    assert({
      given: "no array",
      should: "return 0",
      actual: calculateTotalScore(),
      expected: 0
    });
  }
});
