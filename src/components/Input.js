import { useDispatch } from "react-redux";
import styles from "./Input.module.css";
import { useRef } from "react";
import { addAnswerText, addQuestionText } from "../store";

const Input = (props) => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const optionHandler = () => {
    if (props.questionQuote) {
      const questionText = inputRef.current.value;

      dispatch(
        addQuestionText({ questionId: props.questionId, quote: questionText })
      );
    }
    if (props.answerQuote) {
      console.log(props.answerIndex);
      const answerText = inputRef.current.value;
      dispatch(
        addAnswerText({
          text: answerText,
          answerId: props.answerId,
          questionId: props.questionId,
        })
      );
    }
  };

  return (
    <div className={styles.form_control}>
      <label>
        <h3>{props.inputName}</h3>
      </label>
      <input
        onChange={(e) => optionHandler(e)}
        ref={inputRef}
        className={`${styles.input} ${styles.input_alt} `}
        placeholder={props.placeholder}
        required=""
        type="text"
      />
      <span
        className={`${styles.input_border} ${styles.input_border_alt}`}
      ></span>
    </div>
  );
};

export default Input;
