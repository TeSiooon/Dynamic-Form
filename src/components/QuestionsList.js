import { useSelector } from "react-redux";
import styles from "./DynamicForms.module.css";
import Input from "./Input";
import Button from "./Button";
import AnswersList from "./AnswersList";

const QuestionsList = (props) => {
  const questions = useSelector((state) => state.form.questions);

  return (
    <>
      {questions.map((question, questionIndex) => (
        <div key={question.id} className={styles.dummyLabel}>
          <Input
            placeholder="Your question"
            inputName={`Question number #${questionIndex + 1}`}
            questionQuote
            questionId={question.id}
          />
          <Button text={"Remove this question"} red type={"button"} />
          <AnswersList
            answers={questions[questionIndex].answers}
            questionId={questionIndex}
          />
        </div>
      ))}
      <Button text={"Add new question"} type={"button"} addQuestion />
    </>
  );
};

export default QuestionsList;
