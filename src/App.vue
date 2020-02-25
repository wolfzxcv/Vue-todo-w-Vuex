<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
body {
  font-family: "serif";
  line-height: 1.6;
  background: #c6ebda;
}
.contatiner {
  max-width: 1080px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
