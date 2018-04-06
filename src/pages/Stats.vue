<template>
    <section class="stats">
        <h1 class="title">Your (not so awesome) score</h1>

        <div class="stat">
            <label class="label">Correct</label>
            <div class="score good">{{ numCorrectAnswers }}</div>
        </div>
        <div class="stat">
            <label class="label">Incorrect</label>
            <div class="score bad">{{ numIncorrectAnswers }}</div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters(['numCorrectAnswers', 'numIncorrectAnswers'])
  }
}
</script>
<style scoped lang="scss">
    .title {
        text-align: center;
        font-size: 50px;
        margin-bottom: 50px;
    }

    .stats {
        margin: 100px auto 0 auto;
        width: 50%;
        height: 100%;
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
