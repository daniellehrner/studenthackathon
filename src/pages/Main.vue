<template>
  <article class="cards">
    <card
            v-for="(question, index) in questions"
            v-show="index === questionIndex"
            :key="question.question"
            :question="question.question"
            :answers="question.answers"
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
    ...mapGetters(['questions'])
  },
  methods: {
    nextQuestion () {
      this.questionIndex++
    },
    answer (answer) {
      console.log('main', answer)

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
