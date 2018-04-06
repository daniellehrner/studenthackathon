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
    questions: state => state.questions
  },
  mutations: {
    answer (state, answer) {
      console.log('store', answer)
      state.questions[answer.questionIndex].answer = answer.answer
    }
  }
})
