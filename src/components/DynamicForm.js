import Input from "./Input";
import Button from "./Button";
import styles from "./DynamicForms.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswer,
  addQuestion,
  addQuestionText,
  removeAnswer,
  addAnswerText,
} from "../store";
import { useRef } from "react";
import QuestionsList from "./QuestionsList";

const DynamicForm = (props) => {
  const questionRef = useRef();
  const answerRef = useRef();

  const questions = useSelector((state) => state.form.questions);
  const dispatch = useDispatch();

  const handleAddAnswerText = (e, answerIndex, questionIndex) => {
    const answerText = answerRef.current.value;
    dispatch(
      addAnswerText({ text: answerText, answerId: answerIndex, questionIndex })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(questions);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submitHandler}>
        <QuestionsList />

        <div className={styles.actions}>
          <Button text={"Submit"} type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
