import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    initialValue: "",
    count: null,
  },
  reducers: {
    setInitialValue: {
      reducer(state, action) {
        return {
          initialValue: action.payload,
          count: action.payload,
        };
      },
    },
    increaseValue: {
      reducer(state, action) {
        state.count += 1;
        // return {
        //   ...state,
        //   count: state.count + 1
        // }
      },
    },
    decreaseValue: {
      reducer(state, action) {
        state.count -= 1;
      },
    },
    resetValue: {
      reducer(state, action) {
        state.count = state.initialValue;
      },
    },
  },
});

export const { setInitialValue, decreaseValue, increaseValue, resetValue } =
  countSlice.actions;
export const countReducer = countSlice.reducer;
