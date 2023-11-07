const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};
const pcBuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default pcBuilderSlice.reducer;
export const { addToPcBuilder } = pcBuilderSlice.actions;
