import { configureStore, createSlice } from "@reduxjs/toolkit";

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
      const { text, answerId, questionId } = action.payload;
      console.log(answerId);
      // const currentAnswer = state.questions[questionId].answers[answerIndex];
      const answerIndex = state.questions[questionId].answers.findIndex(
        (a) => a.answerId === answerId
      );

      state.questions[questionId].answers[answerIndex].answerText = text;
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
