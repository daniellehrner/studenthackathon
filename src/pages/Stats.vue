<template>
    <section class="statistics">
        <h1 class="title">
            Your
            <template v-if="score < 300">(not so awesome)</template>
            score</h1>

        <div class="stats">
            <div class="stat">
                <label class="label">Correct</label>
                <div class="score good">{{ numCorrectAnswers }}</div>
            </div>
            <div class="stat">
                <label class="label">Incorrect</label>
                <div class="score bad">{{ numIncorrectAnswers }}</div>
            </div>
            <div class="stat">
                <label class="label">Score</label>
                <div class="score">{{ score }}</div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters(['numCorrectAnswers', 'numIncorrectAnswers', 'questions']),
    score () {
      return this.questions.reduce((acc, question) => {
        if (!this.isAnswerCorrect(question)) {
          return acc
        }

        return acc + (30 - question.answer.time) * 10
      }, 0)
    }
  },
  methods: {
    isAnswerCorrect (question) {
      return question.answers[question.answer.index].correct
    }
  }
}
</script>
<style scoped lang="scss">
    .title {
        text-align: center;
        font-size: 50px;
        margin-bottom: 50px;
    }

    .statistics {
        margin: 100px auto 0 auto;
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stats {
        width: 300px;
    }

    .stat {
        display: flex;
        font-size: 30px;
        margin-bottom: 10px;
    }

    .score {
        flex: 0 0 100px;
        text-align: right;

        &.good {
            color: #417505;
        }

        &.bad {
            color: #D0021B;
        }
    }

    .label {
        flex: 0 0 200px;
    }
</style>
