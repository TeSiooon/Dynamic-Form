import { configureStore, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    questions: [
      {
        id: 0,
        questionText: "",
        answers: [
          {
            answerId: "a0q0",
            answerText: "",
            isTrue: false,
          },
        ],
      },
    ],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push({
        id: state.questions.length,
        questionText: "",
        answers: [],
      });
    },
    addQuestionText: (state, action) => {
      const { questionId, quote } = action.payload;
      state.questions[questionId].questionText = quote;
    },
    addAnswer: (state, action) => {
      const { questionIndex } = action.payload;
      console.log(questionIndex);
      const newAnswerId = `a${state.questions[questionIndex].answers.length}q${questionIndex}`;

      state.questions[questionIndex].answers.push({
        answerId: newAnswerId,
        answerText: "",
        isTrue: false,
      });
    },

    addAnswerText: (state, action) => {
      const { text, answerIndex, questionId } = action.payload;
      console.log(text, answerIndex, questionId);
      const currentAnswer = state.questions[questionId].answers[answerIndex];
      // console.log(state.questions[questionId].answers);

      console.log(currentAnswer);
    },

    removeAnswer: (state, action) => {
      const { questionIndex, answerId } = action.payload;
      console.log(questionIndex, answerId);
      state.questions[questionIndex].answers = state.questions[
        questionIndex
      ].answers.filter((a) => a.answerId !== answerId);
    },
  },
});

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export const {
  addQuestion,
  addAnswer,
  addQuestionText,
  addAnswerText,
  removeAnswer,
} = formSlice.actions;

export default store;
