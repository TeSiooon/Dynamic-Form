import { useSelector } from "react-redux";
import styles from "./QuestionList.module.css";
import Input from "./Input";
import Button from "./Button";
import AnswersList from "./AnswersList";

const QuestionsList = (props) => {
  const questions = useSelector((state) => state.form.questions);
  const canBeRemoved = questions.length > 1;
  // console.log(canBeRemoved);

  return (
    <div className={styles.question_list}>
      {questions.map((question, questionIndex) => (
        <div key={question.id} className={styles.dummyLabel}>
          <Input
            placeholder="Your question"
            inputName={`Question number #${questionIndex + 1}`}
            questionQuote
            questionId={question.id}
          />
          {questions.length > 2 && (
            <Button
              text={"Remove this question"}
              red
              removeQuestion
              canBeRemoved={canBeRemoved}
              questionId={questionIndex}
              type={"button"}
            />
          )}

          <AnswersList
            answers={questions[questionIndex].answers}
            questionId={questionIndex}
          />
        </div>
      ))}
      <Button text={"Add new question"} type={"button"} addQuestion />
    </div>
  );
};

export default QuestionsList;
