import {selectType} from './selectors';

const initialState = {
    colorTypes: [],
};

export default (state=initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_COLORS':
            state.colorTypes = [
                selectType(action.colors, 'water', 'Водные краски'),
                selectType(action.colors, 'emal', 'Эмали'),
            ];
            return Object.assign({}, state);
        default:
            return state;
    }
};