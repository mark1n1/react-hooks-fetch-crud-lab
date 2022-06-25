import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion }) {
  function handleDeleteQuestion(questionDeleted) {
    deleteQuestion(questionDeleted);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        { questions.map((question) => (
          <QuestionItem 
            key={ question.id } 
            question={ question }
            onDeleteQuestion={ handleDeleteQuestion }
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
