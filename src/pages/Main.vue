<template>
  <article class="cards">
    <card
            v-for="(question, index) in questions"
            v-show="index === questionIndex"
            :key="question.question"
            :question="question"
            @answer="answer"
    />
  </article>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: { Card },
  computed: {
    ...mapGetters(['questions']),
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
        answer
      })

      this.nextQuestion()
    }
  },
  data () {
    return {
      questionIndex: 0
    }
  }
}
</script>

<style scoped lang="scss">
  .cards {
    display: flex;
    height: 100%;
  }
</style>
