export const createQuestion = ({ askee, question, status, timestamp }) => ({
  askee,
  question,
  status,
  timestamp
});

export const statuses = ["ACCEPTED", "REJECTED", "UNANSWERED"];
