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

        padding: 10px;
        background: #46A379;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 100;

        transition: background-color 250ms;

        &.answered, &:hover {
            background: darken(#46A379, 20%);
        }
    }
</style>
