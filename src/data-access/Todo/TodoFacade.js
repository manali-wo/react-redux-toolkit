import { useDispatch, useSelector } from 'react-redux';

import { TODO_ACTIONS } from "./TodoStore";

export const useTodoFacade = () => {
    const dispatch = useDispatch();
    const { todoList } = useSelector(({ toDo }) => toDo);

    const addToDo = (payload) => dispatch(TODO_ACTIONS.addToDo(payload));
    const deleteToDo = (id) => dispatch(TODO_ACTIONS.deleteToDo(id));
    const editTodo = (payload) => dispatch(TODO_ACTIONS.editTodo(payload));

    return {
        todoList,

        addToDo,
        deleteToDo,
        editTodo
    }
}
