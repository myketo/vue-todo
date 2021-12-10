<template>
  <todo-list title="TODO"></todo-list>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
:root {
  --bright-blue: hsl(220, 98%, 61%);
  --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  --black: hsl(235, 19%, 35%);
  --dark-grey: hsl(236, 9%, 61%);
  --light-grey: hsl(236, 33%, 92%);
}

*, * > * {
  box-sizing: border-box;
}

#app {
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  color: var(--black);

  display: flex;
  justify-content: center;
  background: url("./assets/images/bg-desktop-light.jpg") no-repeat;
  background-size: 100% auto;
  width: 100vw;
  height: 100vh;
}
</style>
