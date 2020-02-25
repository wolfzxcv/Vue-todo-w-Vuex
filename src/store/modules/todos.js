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
};

const mutations = {
  setTodos: (state, payload) => (state.todos = payload),
  newTodo: (state, payload) => state.todos.unshift(payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
