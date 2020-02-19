import createAction from '@/helpers/createAction';

export const addColors = (colors) => createAction({
    type: 'ADD_COLORS',
    colors,
});
