import Question from "./question";
import { statuses } from "../models/question";

export function QuestionList({ questions, handleStatusClick }) {
  return (
    <div className="question-list">
      <div>
        <ul>
          {questions &&
            questions.map((question) => {
              return (
                <li className="question" key={question._id}>
                  <Question {...question} statuses={statuses} handleStatusClick={handleStatusClick(question)} />
                </li>
              );
            })}
        </ul>
      </div>
      <style jsx>{`
        .question-list {
          padding: 2rem;
          padding-top: 5rem;
        }
        ul {
          padding: 0;
          list-style-type: none;
        }
        ul li {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
