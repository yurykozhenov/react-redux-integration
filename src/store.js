import { createStore } from "redux";

function generateRandomNumber() {
    return Math.round(Math.random() * 100);
}

const initialState = {
    num: 0,
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                num: generateRandomNumber(),
            }
            default:
                return state;
    }
}

export const store = createStore(rootReducer);
