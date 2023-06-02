import axios from "axios";

const initialState = {
  todos: [],
};

export const fetchTodos = () => {
  return async (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => dispatch({ type: "SET_TODOS", payload: resp.data }));
  };
};

export const fetchTodosDelete = (id) => {
  // console.log(id, "id");
  return async () => {
    axios({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    });
  };
};

const todoReducer = (state = initialState, action) => {
  if (action.type == "ADD_TODO") {
    const id = 0;
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          title: action.payload,
          completed: false,
          id: state.todos[state.todos.length - 1].id + 1,
        },
      ],
    };
  } else if (action.type == "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  } else if (action.type == "SET_TODOS") {
    return { ...state, todos: action.payload };
  }
  return state;
};

export const addTodo = (payload) => ({ type: "ADD_TODO", payload });
export const deleteTodo = (payload) => ({ type: "REMOVE_TODO", payload });
export default todoReducer;
