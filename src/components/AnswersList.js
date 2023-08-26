import Button from "./Button";
import Input from "./Input";

const AnswersList = (props) => {
  const answers = props.answers;
  return (
    <>
      {answers.map((answer, answerIndex) => (
        <div key={answer.answerId}>
          <p>Answer #{answerIndex + 1}</p>
          <Input
            placeholder={"Your answer"}
            answerQuote
            answerIndex={answer.answerId}
            questionId={props.questionId}
          />
          <Button
            text={"Remove this answer"}
            type={"button"}
            red
            removeAnswer
            answerIndex={answer.answerId}
            questionId={props.questionId}
          />
        </div>
      ))}
      <Button
        text={"Add new answer"}
        type={"button"}
        addAnswer
        questionId={props.questionId}
      />
    </>
  );
};

export default AnswersList;
