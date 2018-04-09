<template>
  <article class="cards">
    <div class="card-wrapper">
      <card
              v-for="(question, index) in questions"
              v-show="index === questionIndex"
              :key="question.question"
              :question="question"
              @answer="answer"
      />
    </div>
  </article>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'Main',
  data () {
    return {
      currentTime: 0,
      questionIndex: 0,
      questions: []
    }
  },
  components: {
    Card
  },
  computed: {
    done () {
      return this.questionIndex >= this.questions.length
    }
  },
  methods: {
    nextQuestion () {
      this.questionIndex++

      if (this.done) {
        this.$router.push({ name: 'Stats' })
      }
    },
    answer (answer) {
      this.$store.commit('answer', {
        questionIndex: this.questionIndex,
        index: answer
      })

      this.nextQuestion()
    },
    numberOfQuestions () {
      return this.getQuestions().length
    },
    getQuestions () {
      return this.$store.getters.questions
    },
    getQuestion (index) {
      return this.getQuestions()[index]
    }
  },
  mounted () {
    let i = 0
    while (i < this.numberOfQuestions()) {
      /**
       * To show the questions you have to add them the ARRAY this.questions
       * To find out how to do that, search on the internet how to add elements to an array in JavaScript
       *
       * You will get the question by calling the function this.getQuestion(i)
       */

      i++
    }
  }
}
</script>

<style scoped lang="scss">
  .cards {
    display: flex;
    height: 100%;
  }

  .card-wrapper {
    margin: auto;
  }
</style>
