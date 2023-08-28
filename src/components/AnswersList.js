import Button from "./Button";
import Input from "./Input";
import styles from "./AnswersList.module.css";

const AnswersList = (props) => {
  const answers = props.answers;
  // console.log(answers);
  return (
    <div className={styles.answer_list}>
      {answers.map((answer, answerIndex) => (
        <div key={answer.answerId}>
          <p>Answer #{answerIndex + 1}</p>
          <Input
            placeholder={"Your answer"}
            answerQuote
            checkbox
            answerId={answer.answerId}
            questionId={props.questionId}
          />
          {answers.length > 2 && (
            <Button
              text={"Remove this answer"}
              type={"button"}
              red
              removeAnswer
              answerIndex={answer.answerId}
              questionId={props.questionId}
            />
          )}
        </div>
      ))}
      <Button
        text={"Add new answer"}
        type={"button"}
        addAnswer
        questionId={props.questionId}
      />
    </div>
  );
};

export default AnswersList;
