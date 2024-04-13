import { createSlice } from "@reduxjs/toolkit"

const changeLanguageSlice = createSlice({
  name: 'changeLanguage',
  initialState: {
    english: true,
    russian: false,
    armenian: false
  },
  reducers: {
    changeToEnglish(state, { payload }) {
      return {
        english: true,
        russian: false,
        armenian: false
      }
    },
    changeToRussian(state, { payload }) {
      return {
        english: false,
        russian: true,
        armenian: false
      }
    },
    changeToArmenian(state, { payload }) {
      return {
        english: false,
        russian: false,
        armenian: true
      }
    }
  }
})

export const changeLanguageReducer = changeLanguageSlice.reducer
export const { changeToEnglish, changeToRussian, changeToArmenian } = changeLanguageSlice.actions