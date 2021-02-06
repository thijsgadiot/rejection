import { useQuery } from "@apollo/client";
import Head from "next/head";
import { QuestionContainer } from "../../src/components/questionContainer";
import TotalScore from "../../src/components/totalScore";
import AddQuestion from "../../src/components/addQuestion";
import { QUESTIONS } from "../../src/queries";

export default function Questions() {
  const { data } = useQuery(QUESTIONS);

  return (
    <div className="question-container">
      <Head>
        <title>Questions</title>
      </Head>

      {data && <TotalScore score={data.questions.data.reduce((a, c) => a + c.score, 0)} />}

      <AddQuestion />
      <QuestionContainer />
    </div>
  );
}
