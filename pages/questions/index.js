import Head from "next/head";
import { QuestionContainer } from "../../src/components/questionContainer";
import TotalScoreContainer from "../../src/components/totalScoreContainer";
import AddQuestionContainer from "../../src/components/addQuestionContainer";

export default function Questions() {
  return (
    <div className="question-container">
      <Head>
        <title>Questions</title>
      </Head>

      <TotalScoreContainer />
      <AddQuestionContainer />
      <QuestionContainer />
    </div>
  );
}
