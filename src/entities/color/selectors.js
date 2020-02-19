export const selectType = (colors, type, name) => ({
    name,
    items: colors.filter((item)=>item.type === type),
});