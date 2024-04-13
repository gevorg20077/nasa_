import { createSlice } from "@reduxjs/toolkit";

const calendarValueSlice = createSlice({
  name: "calendarValue",
  initialState: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  reducers: {
    changeDay(state, { payload }) {
      return { ...state, day: payload }
    },
    changeMonth(state, { payload }) {
      return { ...state, month: payload }
    }, changeYear(state, { payload }) {
      return { ...state, year: payload }
    }
  }
}
)

export const calendarValueReducer = calendarValueSlice.reducer
export const { changeDay, changeMonth, changeYear } = calendarValueSlice.actions