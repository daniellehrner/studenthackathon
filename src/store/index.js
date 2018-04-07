import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: 'Inside which HTML element do we put the JavaScript?',
        type: 'single',
        answers: [
          { text: '<javascript>', correct: false },
          { text: '<js>', correct: false },
          { text: '<scripting>', correct: false },
          { text: '<script>', correct: true }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'What is the correct syntax for referring to an external script called "x.js"',
        type: 'single',
        answers: [
          { text: '<script src="x.js">', correct: true },
          { text: '<script name="x.js">', correct: false },
          { text: '<script href="x.js">', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        type: 'single',
        answers: [
          { text: 'alertBox("Hello World")', correct: false },
          { text: 'alert("Hello World")', correct: true },
          { text: 'msg("Hello World")', correct: false },
          { text: 'msgBox("Hello World")', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How do you create a function in JavaScript?',
        type: 'single',
        answers: [
          { text: 'function myFunction()', correct: true },
          { text: 'function:myFunction()', correct: false },
          { text: 'function = myFunction()', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How do you call a function named "myFunction"?',
        type: 'single',
        answers: [
          { text: 'call myFunction()', correct: false },
          { text: 'call function myFunction()', correct: false },
          { text: 'myFunction()', correct: true }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How to write an IF statement in JavaScript?',
        type: 'single',
        answers: [
          { text: 'if i == 5 then', correct: false },
          { text: 'if i = 5', correct: false },
          { text: 'if i = 5 then', correct: false },
          { text: 'if (i == 5)', correct: true }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        type: 'single',
        answers: [
          { text: 'if (i != 5)', correct: true },
          { text: 'if i =! 5 then', correct: false },
          { text: 'if i <> 5', correct: false },
          { text: 'if (i <> 5)', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How does a WHILE loop start?',
        type: 'single',
        answers: [
          { text: 'while (i < 10; i++)', correct: false },
          { text: 'while i = 1 to 10', correct: false },
          { text: 'while (i <= 10)', correct: true }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How does a FOR loop start?',
        type: 'single',
        answers: [
          { text: 'for i = 1 to 5', correct: false },
          { text: 'for (i = 0; i <= 5)', correct: false },
          { text: 'for (i = 0; i <= 5; i++)', correct: true },
          { text: 'for (i <= 5; i++)', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'How can you add a comment in JavaScript?',
        type: 'single',
        answers: [
          { text: '\'This is a comment', correct: false },
          { text: '// This is a comment', correct: true },
          { text: '# This is a comment', correct: false },
          { text: '<!-- This is a comment -->', correct: false }
        ],
        answer: {
          index: null,
          time: null
        }
      },
      {
        question: 'What is the answer to life, the universe, and everything?',
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
    numIncorrectAnswers: state => state.questions.filter(q => q.answer.index != null).filter(q => !q.answers[q.answer.index].correct).length
  },
  mutations: {
    answer (state, answer) {
      state.questions[answer.questionIndex].answer = answer
    }
  }
})
