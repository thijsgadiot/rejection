import TotalScore from "./totalScore";
import { useQuery } from "@apollo/client";
import { QUESTIONS } from "../queries/";

const add = (a, b) => a + b;
export const calculateTotalScore = (questions) =>
  Array.isArray(questions) ? questions.map(({ score }) => score).reduce(add, 0) : 0;

export default function TotalScoreContainer() {
  const { data } = useQuery(QUESTIONS);
  const score = calculateTotalScore(data.questions.data);
  return data && <TotalScore score={score} />;
}
