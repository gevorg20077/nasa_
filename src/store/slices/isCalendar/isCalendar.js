import { createSlice } from "@reduxjs/toolkit"

const isCalendarSlice = createSlice({
  name: "isCalendar",
  initialState: false,
  reducers: {
    openCalendar(state, { payload }) {
      return true
    },
    closeCalendar(state, { payload }) {
      return false
    }
  }
})

export const isCalendarReducer = isCalendarSlice.reducer
export const { openCalendar, closeCalendar } = isCalendarSlice.actions