import React from "react";
import qBank from "./Qbank";

const questionValues = (questionId) => {
  const selectedQuestion = qBank.find((question) => question.id === questionId);
  const questionText = selectedQuestion.question;
  const options = selectedQuestion.options;
  const answer = selectedQuestion.answer;

  return {
    questionText,
    options,
    answer,
  };
};

export default questionValues;
