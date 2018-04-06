import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: 'What is the answer to the universe, life, and everything?',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: null
      },
      {
        question: 'What is the answer to the universe, and everything?',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: null
      },
      {
        question: 'What is the answer to life, and everything?',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: null
      }
    ]
  },
  getters: {
    questions: state => state.questions,
    numCorrectAnswers: state => state.questions.filter(q => q.answer != null).filter(q => q.answers[q.answer].correct).length,
    numIncorrectAnswers: state => state.questions.filter(q => q.answer != null).filter(q => !q.answers[q.answer].correct).length
  },
  mutations: {
    answer (state, answer) {
      state.questions[answer.questionIndex].answer = answer.answer
    }
  }
})
