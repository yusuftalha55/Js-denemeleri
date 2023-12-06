import React from "react";
import qBank from "./Qbank";

const questionValues = () => {
    const selectedQuestion = qBank.find((question) => question.id === questionİd);
    const question = selectedQuestion.question;
    const options = selectedQuestion.options;
    const answer = selectedQuestion.answer;
}

export default questionValues;