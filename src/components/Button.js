import { useDispatch } from "react-redux";
import styles from "./Button.module.css";
import { addAnswer, addQuestion, removeAnswer } from "../store";

const Button = (props) => {
  const dispatch = useDispatch();

  const optionHandler = () => {
    if (props.removeAnswer) {
      console.log("usuwanie odpowiedzi");
      dispatch(
        removeAnswer({
          answerId: props.answerIndex,
          questionIndex: props.questionId,
        })
      );
    }

    if (props.addQuestion) {
      console.log("dodanie pytania");
      dispatch(addQuestion());
    }

    if (props.addAnswer) {
      console.log("dodanie odpowiedzi");
      dispatch(addAnswer({ questionIndex: props.questionId }));
    }
  };

  const buttonStyles = `$ ${styles.button} ${
    props.red ? styles.redButton : styles.button
  }`;
  return (
    <button
      className={buttonStyles}
      type={props.type}
      onClick={() => optionHandler()}
    >
      {props.text}
    </button>
  );
};

export default Button;
