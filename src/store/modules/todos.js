import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: 'TOdo 1',
    },
    {
      id: 2,
      title: 'TOdo 2',
    },
  ],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async getTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    });
    commit('newTodo', res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('deleteTodo', id);
    commit('deleteTodo', id);
  },
  async filterTodos({ commit }, e) {
    const num = e.target.value;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${num}`
    );
    console.log('num from filter', num);
    commit('setTodos', res.data);
  },
  async toggleTodo({ commit }, targetTodo) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${targetTodo.id}`,
      targetTodo
    );
    commit('toggleTodo', res.data);
    console.log('toggleTodo', res.data);
  },
};

const mutations = {
  setTodos: (state, payload) => (state.todos = payload),
  newTodo: (state, payload) => state.todos.unshift(payload),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter(x => x.id !== id)),
  toggleTodo: (state, targetTodo) => {
    const idx = state.todos.findIndex(todo => todo.id === targetTodo.id);
    if (idx !== -1) {
      state.todos.splice(idx, 1, targetTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
