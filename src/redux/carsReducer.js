import { requestAllCars } from "../services/api";

const { createSlice, createAsyncThunk, isAnyOf } = require("@reduxjs/toolkit");

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const cars = await requestAllCars();
      return cars;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.items = action.payload;
      })

      .addMatcher(
        isAnyOf(),
        fetchCars.pending,

        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(),
        fetchCars.rejected,

        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
// export const { setFilter } = carsSlice.actions;

export const contactsReducer = carsSlice.reducer;
