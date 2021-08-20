export const selectCount = (state) => state.counter.count;
export const selectDiscount = (state) => Math.round(state.counter.count / 10);
