<template>
    <div class="answer"><slot></slot></div>
</template>
<script>
export default {
  name: 'Button'
}
</script>
<style scoped lang="scss">
    .answer {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        text-align: center;

        padding: 15px;
        background: #46A379;
        color: white;
        cursor: pointer;
        letter-spacing: 2px;
        font-weight: 100;

        transition: background-color 250ms;

        &.answered, &:hover {
            background: darken(#46A379, 20%);
        }
    }
</style>
