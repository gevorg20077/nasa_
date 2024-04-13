import { createSlice } from "@reduxjs/toolkit"

const dateSlice = createSlice({
  name: 'date',
  initialState: "",
  reducers: {
    currentDateTime(state, { payload }) {
      let day = new Date().getDate()
      let month = new Date().getMonth() + 1
      let year = new Date().getFullYear()
      if (String(month).length === 1) {
        month = '0' + month
      }
      let date = day + "/" + month + "/" + year
      return date
    }
  }
})

export const dateReducer = dateSlice.reducer
export const { currentDateTime } = dateSlice.actions