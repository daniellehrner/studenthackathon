import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: 'What is the answer to the universe, life, and everything?',
        type: 'single',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'What is the answer to the universe, and everything?',
        type: 'multiple',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'What is the answer to life, and everything?',
        type: 'single',
        answers: [
          { text: '42', correct: true },
          { text: '12', correct: false },
          { text: 'banana', correct: false },
          { text: 'chocolate', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      }
    ]
  },
  getters: {
    questions: state => state.questions,
    numCorrectAnswers: state => state.questions.filter(q => q.answer.index != null).filter(q => q.answers[q.answer.index].correct).length,
    numIncorrectAnswers: state => state.questions.filter(q => q.answer.index != null).filter(q => !q.answers[q.answer.index].correct).length,
  },
  mutations: {
    answer (state, answer) {
      state.questions[answer.questionIndex].answer = answer
    }
  }
})
