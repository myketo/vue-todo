<template>
  <TodoList title="TODO"></TodoList>
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
#app {
  --bright-blue: hsl(220, 98%, 61%);
  --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;

  display: flex;
  justify-content: center;
  background: url("./assets/images/bg-desktop-light.jpg") no-repeat;
  background-size: 100% auto;
  width: 100vw;
  height: 100vh;
}
</style>
