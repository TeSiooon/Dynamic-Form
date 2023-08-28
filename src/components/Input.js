import { useDispatch } from "react-redux";
import styles from "./Input.module.css";
import { useRef, useState } from "react";
import { addAnswerText, addQuestionText, isCorrect } from "../store";

const Input = (props) => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [isChecked, setIsChecked] = useState(false);

  const optionHandler = () => {
    if (props.questionQuote) {
      const questionText = inputRef.current.value;

      dispatch(
        addQuestionText({ questionId: props.questionId, quote: questionText })
      );
    }
    if (props.answerQuote) {
      const answerText = inputRef.current.value;
      dispatch(
        addAnswerText({
          text: answerText,
          answerId: props.answerId,
          questionId: props.questionId,
        })
      );
    }
    if (props.checkbox) {
      dispatch(
        isCorrect({
          isTrue: isChecked,
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
      {props.checkbox && (
        <>
          {/* Maybe nowy komponent */}
          <label>Is this answer the correct one?</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => (setIsChecked((prev) => !prev), optionHandler(e))}
          />
        </>
      )}
    </div>
  );
};

export default Input;
