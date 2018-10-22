import { ADD_TODO } from './action';


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
    }
    return state;
}
