import { $api } from "../api/axios";
import { baseURL } from "../api/axios";

export const TodosService = {
  getTodos: () => $api.get(baseURL),
};

const initialState = {
  todosData: [],
  loading: false,
  error: null,
};

export const TodosActionTypes = {
  FETCH_TODOS: "FETCH_TODOS",
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE: "FETCH_TODOS_FAILURE",
};

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return { loading: true, error: null, todosData: [] };
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return { loading: false, error: null, todosData: action.payload };
    case TodosActionTypes.FETCH_TODOS_FAILURE:
      return { loading: false, error: action.payload, todosData: [] };
    default:
      return state;
  }
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos();
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_FAILURE,
        payload: "Ошибка!",
      });
    }
  };
};
