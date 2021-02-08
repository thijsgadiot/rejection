import { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUESTIONS } from "../queries";
import { ADD_QUESTION } from "../mutations";
import SimpleInput from "./simpleInput";

const createQuestion = ({ timestamp = Date.now(), askee, question, status = "UNANSWERED" }) => ({
  timestamp,
  askee,
  question,
  status
});

export default function AddQuestionContainer() {
  const [question, setQuestion] = useState("");
  const [addQuestion] = useMutation(ADD_QUESTION, {
    refetchQueries: [{ query: QUESTIONS }]
  });

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      addQuestion({
        variables: {
          data: createQuestion({ askee: "someone", question })
        }
      });
      setQuestion("");
    }
  };

  return <SimpleInput placeholder="..." handleKeyPress={handleKeyPress} handleChange={setQuestion} value={question} />;
}
