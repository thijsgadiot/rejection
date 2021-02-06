import { useMutation, useQuery } from "@apollo/client";
import { QUESTIONS } from "../queries/";
import { UPDATE_QUESTION } from "../mutations/";
import { QuestionList } from "./questionList";
import { createQuestion } from "../models/question";

export function QuestionContainer({ name }) {
  const { data } = useQuery(QUESTIONS);
  const [updateQuestion] = useMutation(UPDATE_QUESTION);

  const handleStatusClick = (question) => ({ status }) => {
    const updatedQuestion = createQuestion({ ...question, status });

    updateQuestion({
      variables: { id: question._id, data: updatedQuestion },
      optimisticResponse: {
        __typename: "Mutation",
        updateQuestion: {
          _id: question._id,
          __typename: "Question",
          status: updatedQuestion.status
        }
      }
    });
  };

  const questions = data ? [...data.questions.data].reverse() : [];
  return <QuestionList questions={questions} handleStatusClick={handleStatusClick} />;
}
