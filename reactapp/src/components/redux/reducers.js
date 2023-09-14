// src/components/redux/reducers.js
const initialState = {
    articles: [],
    selectedTopic: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ARTICLES':
            return { ...state, articles: action.payload };
        case 'SET_SELECTED_TOPIC':
            return { ...state, selectedTopic: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
