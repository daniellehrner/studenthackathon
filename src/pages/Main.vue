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
      <timer ref="timer" @tick="updateTime" />
    </div>
  </article>
</template>

<script>
import Card from '../components/Card'
import Timer from '../components/Timer'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
      currentTime: 0,
      questionIndex: 0
    }
  },
  components: { Card, Timer },
  computed: {
    ...mapGetters(['questions']),
    done () {
      return this.questionIndex >= this.questions.length
    }
  },
  methods: {
    updateTime (time) {
      this.currentTime = time
    },
    nextQuestion () {
      this.questionIndex++
      this.$refs.timer.reset()

      if (this.done) {
        this.$router.push({ name: 'Stats' })
      }
    },
    answer (answer) {
      this.$store.commit('answer', {
        questionIndex: this.questionIndex,
        index: answer,
        time: this.currentTime
      })

      this.nextQuestion()
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
