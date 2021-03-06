import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOs } from './action';

export interface IAppState {
    todos: any[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {id: state.todos.length + 1, title: action.title};
            return Object.assign({}, state, {
                todos: state.todos.concat(newTodo),
                lastUpdate: new Date()
            });
        case TOGGLE_TODO:
            const task = state.todos.find(t => t.id === action.id);
            const index = state.todos.indexOf(task);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, task, {isCompleted: !task.isCompleted}),
                    ...state.todos.slice(index + 1),
                ],
                lastUpdate: new Date()
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });
        case CLEAR_TODOs:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
    }
    return state;
}
