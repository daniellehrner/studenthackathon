<template>
    <section class="card">
        <h1 class="title">{{ question.question }}</h1>

        <div class="answers">
            <answer-button
                    v-for="(answer, index) in question.answers"
                    @click.native="$emit('answer', index)"
                    :key="answer.text"
                    :class="{ answered: question.answer === index }"
            >
                {{ answer.text }}
            </answer-button>
        </div>
    </section>
</template>
<script>
import Button from './answers/Button'
export default {
  name: 'Card',
  components: {
    'AnswerButton': Button
  },
  props: ['question']
}
</script>
<style scoped lang="scss">
    .card {
        border: 1px solid #979797;
        border-radius: 2px 2px 0 0 ;
        width: 800px;
        padding: 30px;
    }

    .title {
        padding: 30px 50px;
        font-size: 25px;
        font-weight: 200;
        color: #343434;
    }

    .answers {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .answer {
        flex: 0 0 40%;
        margin: 10px 0;
    }
</style>
