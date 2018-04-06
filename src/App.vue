<template>
  <div id="app">
    <nav class="navigation">
      <router-link class="link" :to="{ name: 'Main' }">
        <span class="icon"><i class="fas fa-question-circle"></i></span>
        Questions
      </router-link>
      <router-link class="link" :to="{ name: 'Stats' }">
        <span class="icon"><i class="fas fa-chart-pie"></i></span>
        Stats
      </router-link>
    </nav>
    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: inherit;
    margin: 0;
    padding: 0;
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  html, body, .main, #app {
    height: 100%;
  }

  .main {
    padding-top: 50px;
  }

  .navigation {
    display: flex;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
  }

  .link {
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    color: white;
    background-color: #555555;

    transition: background-color 250ms;

    &:hover {
      background-color: lighten(#555555, 5%);
    }
  }

  .icon {
    margin-right: 5px;
  }
</style>
