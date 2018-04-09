<template>
    <section class="statistics">
        <h1 class="title">
            Your
            <template v-if="score < 1650">(not so awesome)</template>
            score</h1>

        <div class="stats">
            <div class="stat">
                <label class="label">Correct</label>
                <div class="score good">{{ numberOfCorrectAnswers }}</div>
            </div>
            <div class="stat">
                <label class="label">Incorrect</label>
                <div class="score bad">{{ numberOfIncorrectAnswers }}</div>
            </div>
            <div class="stat">
                <label class="label">Score</label>
                <div class="score">{{ score }} %</div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
  name: 'Stats',
  data () {
    return {
      /**
       * Count the number of correct answers. To check if a answer is correct,
       * you have to use the function this.answerCorrect and give it the current question as a parameter
       *
       * You will get the question by calling the function this.getQuestion(i)
       */
      numberOfCorrectAnswers: 0,

      /**
       * Count the number of incorrect answers. To check if a answer is correct,
       * you have to use the function this.answerCorrect and give it the current question as a parameter
       *
       * You will get the question by calling the function this.getQuestion(i)
       */
      numberOfIncorrectAnswers: 0,

      /**
       * Calculate the percentage of correct answers. To check if a answer is correct,
       * you have to use the function this.answerCorrect and give it the current question as a parameter
       *
       * You will get the question by calling the function this.getQuestion(i)
       */
      score: 0
    }
  },
  methods: {
    numberOfQuestions () {
      return this.getQuestions().length
    },
    getQuestions () {
      return this.$store.getters.questions
    },
    getQuestion (index) {
      return this.getQuestions()[index]
    },
    isAnswerCorrect (question) {
      return question.answers[question.answer.index].correct
    }
  },
  mount () {
    let i = 0
    while (i < this.numberOfQuestions()) {
      /**
       * INSERT CODE HERE :)
       */

      i++
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
